import axios from "axios";
import * as MediaLib from "expo-media-library"
import * as FileSystem from "expo-file-system"

import { getPhotoTag, setPhotoTagSaved } from "./storage"
import { API_HOST } from "../constants/credentials"
import messagePublusher from "messagepublisher"
import { ERROR_NOT_200 } from "./errors"

export const getPhotos = (): Promise<any> => {
    return axios.get(`${API_HOST}/photos`, { headers: { "Fetch": "true" } })
        .then(resp => {
            if (resp.status === 200) {
                return { ...resp.data }
            }
            return ERROR_NOT_200
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })
}

export const getLocalPhotos = (): Promise<{ photo: string; id: string }[] | void> => {
    return MediaLib.requestPermissionsAsync()
        .then(() => {
            return MediaLib.getAssetsAsync({ mediaType: "photo" })
                .then((resp) => {
                    let promises: Promise<void>[] = [];
                    let photos: { photo: string; id: string; date: number }[] = [];
                    for (let a of resp.assets) {
                        promises.push(MediaLib.getAssetInfoAsync(a)
                            .then(info => {
                                if (info.localUri) {
                                    return FileSystem.readAsStringAsync(info.localUri, { encoding: "base64" })
                                        .then(file => { 
                                            photos.push({ photo: file, id: a.id, date: a.creationTime})
                                        })
                                }
                            }))
                    }
                    return Promise.all(promises)   
                        .then(() => {
                            console.log(photos.length)
                            photos.sort((a, b) => {
                                return b.date - a.date
                            })
                            return photos
                        })
                })
        })
}

export const getPhotosToBackup = (localPhotos: { photo: string; id: string }[]): string[] => {
    let photosToBackup: string[] = []
    for (let p of localPhotos) {
        getPhotoTag(p.id)
            .then(r => {
                if (r != "1") {
                    photosToBackup.push(p.photo)
                    setPhotoTagSaved(p.id)
                }
            })
    }
    return photosToBackup
}

export const backupLocalPhotos = (p: string[]): Promise<any> => {
    return axios.post(`${API_HOST}/backup_photos`, { data: p }, { headers: { "Fetch": "true" } })
        .then(resp => {
            if (resp.status === 200) {
                return resp.data.ok
            }
            return ERROR_NOT_200
        })
}