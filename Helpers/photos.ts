import configuredAxios from "./common"
import * as MediaLib from "expo-media-library"
import * as FileSystem from "expo-file-system"

import { getPhotoTag, setPhotoTagSaved } from "./storage"
import messagePublusher from "messagepublisher"
import { getImageSize } from "./utils";

export const getPhotos = (): Promise<any> => {
    return configuredAxios.get("/photos")
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

export const getLocalPhotos = (): Promise<SentData.LocalPhotos | void> => {
    return MediaLib.requestPermissionsAsync()
        .then(() => {
            return MediaLib.getAssetsAsync({ mediaType: "photo" })
                .then((resp) => {
                    let promises: Promise<void>[] = [];
                    let photos: SentData.LocalPhotos = [];
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

export const getPhotosToBackup = (localPhotos: SentData.LocalPhotos): Promise<SentData.LocalPhotos> => {
    let promises: Promise<void>[] = [];
    let photosToBackup: SentData.LocalPhotos = []
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

export const backupLocalPhotos = (p: SentData.LocalPhotos): Promise<any> => {
    return configuredAxios.post("/photos", { data: p })
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