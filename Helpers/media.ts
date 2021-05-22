import configuredAxios from "./common"
import messagePublusher from "messagepublisher"
import { getImageSize, getRandomFileName } from "./utils";
import * as MediaLib from "expo-media-library";
import * as FileSystem from "expo-file-system"
import { getMediaTag, getServiceImageDataByFile, setMediaTagSaved, setServiceImageDataByFile } from "./storage";
import { DrawerContentScrollView } from "@react-navigation/drawer";

export const getLocalMedia = async (t: "photo" | "video"): Promise<SentData.LocalPhotos<SentData.FileInfo> | SentData.LocalVideos<SentData.FileInfo>> => {
    await MediaLib.requestPermissionsAsync()
    const assets = (await MediaLib.getAssetsAsync({ mediaType: t })).assets

    let media: SentData.LocalPhotos<SentData.FileInfo> | SentData.LocalVideos<SentData.FileInfo> = [];

    for (let v of assets) {
        const info = await MediaLib.getAssetInfoAsync(v)
        if (!info.localUri) continue
        const file = await FileSystem.readAsStringAsync(info.localUri, { encoding: "base64" })
        await setServiceImageDataByFile(file, { uri: info.uri, extension: info.filename.split(".")[1].toLowerCase() })
        media.push(
            {
                file: file,
                id: info.id,
                date: info.creationTime,
                extension: info.filename.split(".")[1].toLowerCase(),
                size: getImageSize(info.height, info.width),
                uri: info.uri
            })
    }
    return media
}

export const getMediaToBackup = async (l: SentData.LocalPhotos<SentData.FileInfo> | SentData.LocalVideos<SentData.FileInfo>): Promise<SentData.LocalPhotos<SentData.FileInfo> | SentData.LocalVideos<SentData.FileInfo>> => {
    let mediaToBackup: SentData.LocalPhotos<SentData.FileInfo> | SentData.LocalVideos<SentData.FileInfo> = []
    for (let p of l) {
        const tag = await getMediaTag(p.id)
        if (tag != "1") {
            mediaToBackup.push(p)
            await setMediaTagSaved(p.id)
        }
    }
    return mediaToBackup
}

export const getMediaNum = async (t: "photo" | "video"): Promise<number | null> => {
    await MediaLib.getPermissionsAsync()
    return (await MediaLib.getAssetsAsync({ mediaType: t })).assets.length
}

export const backupLocalMedia = async (t: "photos" | "videos", p: SentData.LocalPhotos<SentData.FileInfo> | SentData.LocalVideos<SentData.FileInfo>): Promise<any> => {
    try {
        const r = await configuredAxios.post(`/${t}`, { data: p })
        return r.data.service.ok
    } catch (error) {
        messagePublusher.add(error.message)
    }
}

export const tagMadia = async (data: [RecievedData.EqualAlbum<RecievedData.EqualAlbumPhotosInfo>, RecievedData.EqualAlbum<RecievedData.EqualAlbumVideosInfo>]): Promise<[RecievedData.EqualAlbum<RecievedData.EqualAlbumInfoTaged>, RecievedData.EqualAlbum<RecievedData.EqualAlbumInfoTaged>]> => {
    let photos: RecievedData.EqualAlbum<RecievedData.EqualAlbumInfoTaged> = []
    let videos: RecievedData.EqualAlbum<RecievedData.EqualAlbumInfoTaged> = []
    for (let i of data) {
        if (i === null) continue
        for (let a of i) {
            const p = a as RecievedData.EqualAlbumPhotosInfo
            const v = a as RecievedData.EqualAlbumVideosInfo
            if (p.photo !== undefined) {
                const r = await getServiceImageDataByFile(p.photo)
                if (!r) {
                    const d = `${FileSystem.documentDirectory}${getRandomFileName()}${p.extension}`
                    await FileSystem.writeAsStringAsync(d, p.photo)
                    await setServiceImageDataByFile(p.photo, { extension: p.extension, uri: d })
                    photos.push({ uri: d, extension: p.extension })
                } else {
                    photos.push({ uri: r.uri, extension: r.extension })
                }

            } else {
                const r = await getServiceImageDataByFile(v.video)
                if (!r) {
                    const d = `${FileSystem.documentDirectory}${getRandomFileName()}${v.extension}`
                    await FileSystem.writeAsStringAsync(d, v.video)
                    await setServiceImageDataByFile(v.video, { extension: v.extension, uri: d })
                    videos.push({ uri: d, extension: v.extension })
                } else {
                    videos.push({ uri: r.uri, extension: r.extension })
                }
            }
        }
    }
    return [photos, videos]
}