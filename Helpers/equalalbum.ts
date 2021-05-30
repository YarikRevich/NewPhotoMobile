import messagepublisher from "messagepublisher"
import configuredAxios from "./common"


export const getEqualAlbum = async (albumName: string, offset: number, page: number): Promise<{ ok: boolean, data: [RecievedData.EqualAlbum<RecievedData.EqualAlbumPhotosInfo>, RecievedData.EqualAlbum<RecievedData.EqualAlbumVideosInfo>] } | undefined | void> => {
    try {
        const r = await configuredAxios.get("/albums/detailed", { params: { "name": albumName, "offset": Math.round(offset), "page": page } })
        return { ok: r.data.service.ok, data: [r.data.result.photos, r.data.result.videos] as [RecievedData.EqualAlbum<RecievedData.EqualAlbumPhotosInfo>, RecievedData.EqualAlbum<RecievedData.EqualAlbumVideosInfo>] }
    } catch (error) {
        messagepublisher.add(error.message)
    }
}

export const addMediaToAlbum = async (t: "photos" | "videos", albumName: string, data: SentData.LocalPhotos<SentData.FileInfo> | SentData.LocalVideos<SentData.FileInfo>): Promise<boolean | null | undefined> => {
    try {
        const req = (t == "photos" ? { data: { name: albumName, photos: data } } : { data: { name: albumName, videos: data } })
        const r = await configuredAxios.put("/albums/detailed", req)
        return r.data.service.ok
    } catch (error) {
        messagepublisher.add(error.message)
    }
}

export const deleteMediaFromAlbum = async (t: "photos" | "videos", albumName: string, data: string[]): Promise<boolean | null | undefined> => {
    try {
        const req = (t == "photos" ? { data: { data: { name: albumName, photos: data } } } : { data: { data: { name: albumName, "videos": data } } })
        const r = await configuredAxios.delete("/albums/detailed", req)
        return r.data.service.ok
    } catch (error) {
        messagepublisher.add(error.message)
    }
}

export const getDetailedAlbumMediaNum = async (albumName: string): Promise<RecievedData.AlbumInfo | undefined> => {
    try {
        const r = await configuredAxios.get("/albums/detailed/info", { params: { name: albumName } })
        return r.data.result
    } catch (error) {
        messagepublisher.add(error.message)
    }
}

export const deleteAlbum = async (albumName: string): Promise<boolean | undefined> => {
    try {
        const r = await configuredAxios.delete("/albums", { params: { name: albumName } })
        return r.data.service.ok
    } catch (error) {
        messagepublisher.add(error.message)
    }
}