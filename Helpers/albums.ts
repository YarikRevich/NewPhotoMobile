import configuredAxios from "./common"
import messagepublisher from "messagepublisher";


export const getAlbums = (): Promise<any | null> => {
    return configuredAxios.get("/albums")
        .then(resp => {
            if (resp.status == 200) {
                return { ok: resp.data.service.ok, data: resp.data.result }
            }
            messagepublisher.add("Network error!")
        })
        .catch((err: Error) => {
            messagepublisher.add(err.message)
        })
}


export const addAlbum = (albumName: string): Promise<boolean | null> => {
    return configuredAxios.post("/albums", { data: { name: albumName } })
        .then(resp => {
            if (resp.status === 200) {
                return resp.data.service.ok
            }
            messagepublisher.add("Network error!")
        })
        .catch((err: Error) => messagepublisher.add(err.message))
}