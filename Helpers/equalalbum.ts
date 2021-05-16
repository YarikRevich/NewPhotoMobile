import messagepublisher from "messagepublisher"
import configuredAxios from "./common"


export const getEqualAlbum = (albumName: string): Promise<{ ok: boolean, data: RecievedData.EqualAlbum } | undefined | void> => {
    return configuredAxios.get("/albums/detailed", { params: { "name": albumName } })
        .then(resp => {
            if (resp.status === 200) {
                return { ok: resp.data.service.ok, data: resp.data.result.data }
            }
            messagepublisher.add("Network error!")
        })
        .catch((err: Error) => messagepublisher.add(err.message))
}

export const addPhotosToAlbum = (albumName: string, data: SentData.LocalPhotos<SentData.FileInfo>): Promise<boolean | null> => {
    return configuredAxios.put("/albums/detailed", { data: { name: albumName, result: data } })
        .then(resp => {
            if (resp.status === 200) {
                return resp.data.service.ok
            }
            messagepublisher.add("Network error!")
        })
        .catch((err: Error) => messagepublisher.add(err.message))
}

export const deletePhotosFromAlbum = (data: string[]): Promise<boolean | null> => {
    return configuredAxios.delete("/albums/detailed", { data: { data: { photos: data } } })
        .then(resp => {
            if (resp.status === 200) {
                return resp.data.service.ok
            }
            messagepublisher.add("Network error!")
        })
        .catch((err: Error) => messagepublisher.add(err.message))
}