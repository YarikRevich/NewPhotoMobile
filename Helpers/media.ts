import configuredAxios from "./common"
import messagePublusher from "messagepublisher"
import { getImageSize } from "./utils";
import * as MediaLib from "expo-media-library";
import * as FileSystem from "expo-file-system"
import { getMediaTag, setMediaTagSaved } from "./storage";

export const getLocalMedia = (t: "photo" | "video"): Promise<SentData.LocalPhotos<SentData.FileInfo> | SentData.LocalVideos<SentData.FileInfo>> => {
    return MediaLib.requestPermissionsAsync()
        .then(() => {
            return MediaLib.getAssetsAsync({ mediaType: t })
                .then((resp) => {
                    let promises: Promise<void>[] = [];
                    let media: SentData.LocalPhotos<SentData.FileInfo> | SentData.LocalVideos<SentData.FileInfo> = [];
                    for (let a of resp.assets) {
                        promises.push(
                            MediaLib.getAssetInfoAsync(a)
                                .then(info => {
                                    if (info.localUri) {
                                        return FileSystem.readAsStringAsync(info.localUri, { encoding: "base64" })
                                            .then(file => {
                                                media.push(
                                                    {
                                                        file: file,
                                                        id: a.id,
                                                        date: a.creationTime,
                                                        extension: a.filename.split(".")[1].toLowerCase(),
                                                        size: getImageSize(a.height, a.width),
                                                        uri: a.uri
                                                    })
                                            })
                                    }
                                }
                                ))
                    }
                    return Promise.all(promises)
                        .then(() => {
                            media.sort((a, b) => {
                                return b.date - a.date
                            })
                            return media
                        })
                })
        })
}

export const getMediaToBackup = (l: SentData.LocalPhotos<SentData.FileInfo> | SentData.LocalVideos<SentData.FileInfo>): Promise<SentData.LocalPhotos<SentData.FileInfo> | SentData.LocalVideos<SentData.FileInfo>> => {
    let promises: Promise<void>[] = [];
    let mediaToBackup: SentData.LocalPhotos<SentData.FileInfo> | SentData.LocalVideos<SentData.FileInfo> = []
    for (let p of l) {
        promises.push(getMediaTag(p.id)
            .then(r => {
                if (r != "1") {
                    mediaToBackup.push(p)
                    setMediaTagSaved(p.id)
                }
            }))
    }
    return Promise.all(promises)
        .then(() => mediaToBackup)
}

export const getMediaNum = (t: "photo" | "video"): Promise<number | null> => {
    return MediaLib.getPermissionsAsync()
        .then(() => {
            return MediaLib.getAssetsAsync({ mediaType: t })
                .then(resp => {
                    return resp.assets.length
                })
        })
}

export const backupLocalMedia = (t: "photos" | "videos", p: SentData.LocalPhotos<SentData.FileInfo> | SentData.LocalVideos<SentData.FileInfo>): Promise<any> => {
    return configuredAxios.post(`/${t}`, { data: p })
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