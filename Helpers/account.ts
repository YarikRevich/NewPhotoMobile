import configuredAxios from "./common"
import * as ImagePicker from "expo-image-picker"
import * as FileSystem from "expo-file-system"

import messagePublusher from "messagepublisher"

export const getAccountInfo = (): Promise<{ ok: boolean, data: any } | void> => {
    return configuredAxios.get("/account")
        .then(resp => {
            if (resp.status === 200) {
                return { ok: resp.data.service.ok, data: resp.data.result }
            }
            messagePublusher.add("Network error!")
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })
}

export const getAvatar = (): Promise<{ ok: boolean, avatar: any } | void> => {
    return configuredAxios.get("/account/avatar")
        .then(resp => {
            if (resp.status === 200) {
                return { ok: resp.data.service.ok, avatar: resp.data.result.avatar }
            }
            messagePublusher.add("Network error!")
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })
}

export const setAvatar = (a: string): Promise<boolean | void> => {
    return configuredAxios.post("/account/avatar", { data: { avatar: a } })
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

export const openMediaPicker = () => {
    return ImagePicker.getMediaLibraryPermissionsAsync()
        .then(() => {
            return ImagePicker.launchImageLibraryAsync()
                .then((r: any) => {
                    if (r.uri) {
                        return FileSystem.readAsStringAsync(r.uri, { encoding: "base64" })
                            .then(f => {
                                return f
                            })
                    }
                })
        })
}