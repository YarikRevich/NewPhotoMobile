import axios from "axios";
import { Image } from "react-native"
import * as MediaLib from "expo-media-library"
import * as FileSystem from "expo-file-system"

import { getPhotoTag, setPhotoTagSaved } from "./storage"
import { API_HOST } from "../constants/credentials"
import messagePublusher from "messagepublisher"
import { getImageSize } from "./utils";
import { LocalPhotos } from "../types/utils/photo";

export const getPhotos = (): Promise<any> => {
    return axios.get(`${API_HOST}/photos`, { headers: { "Fetch": "true" } })
        .then(resp => {
            if (resp.status === 200) {
                return { ...resp.data }
            }
            messagePublusher.add("Network error!")
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })
}

export const getLocalPhotos = (): Promise<LocalPhotos[] | void> => {
    return MediaLib.requestPermissionsAsync()
        .then(() => {
            return MediaLib.getAssetsAsync({ mediaType: "photo" })
                .then((resp) => {
                    let promises: Promise<void>[] = [];
                    let photos: LocalPhotos[] = [];
                    for (let a of resp.assets) {
                        promises.push(
                            MediaLib.getAssetInfoAsync(a)
                                .then(info => {
                                    if (info.localUri) {
                                        return FileSystem.readAsStringAsync(info.localUri, { encoding: "base64" })
                                            .then(file => {
                                                photos.push(
                                                    {
                                                        file: file,
                                                        id: a.id,
                                                        date: a.creationTime,
                                                        extension: a.filename.split(".")[1].toLowerCase(),
                                                        size: getImageSize(a.height, a.width)
                                                    })
                                            })
                                    }
                                }
                                ))
                    }
                    return Promise.all(promises)
                        .then(() => {
                            photos.sort((a, b) => {
                                return b.date - a.date
                            })
                            return photos
                        })
                })
        })
}

export const getPhotosNum = (): Promise<number | null> => {
    return MediaLib.getPermissionsAsync()
        .then(() => {
            return MediaLib.getAssetsAsync()
                .then(resp => {
                    return resp.assets.length
                })
        })
}

export const getPhotosToBackup = (localPhotos: LocalPhotos[]): Promise<LocalPhotos[]> => {
    let promises: Promise<void>[] = [];
    let photosToBackup: LocalPhotos[] = []
    for (let p of localPhotos) {
        promises.push(getPhotoTag(p.id)
            .then(r => {
                if (r != "1") {
                    photosToBackup.push(p)
                    setPhotoTagSaved(p.id)
                }
            }))
    }
    return Promise.all(promises)
        .then(() => photosToBackup)

}

export const backupLocalPhotos = (p: LocalPhotos[]): Promise<any> => {
    return axios.post(`${API_HOST}/photos`, { data: p }, { headers: { "Fetch": "true" } })
        .then(resp => {
            if (resp.status === 200) {
                return resp.data.service.ok
            }
            messagePublusher.add("Network error!")
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })
}