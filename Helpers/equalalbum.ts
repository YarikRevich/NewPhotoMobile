import messagepublisher from "messagepublisher"
import configuredAxios from "./common"

export const getEqualAlbum = (albumName: string): Promise<{ok: boolean, data: RecievedData.EqualAlbum} | undefined | void> => {
    return configuredAxios.get("/albums/detailed", { params: { "name": albumName } })
        .then(resp => {
            if (resp.status === 200) {
                return (resp.data.ok, resp.data.result)
            }
            messagepublisher.add("Network error!")
        })
        .catch((err: Error) => messagepublisher.add(err.message))
}