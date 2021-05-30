import configuredAxios from "./common"
import * as ImagePicker from "expo-image-picker"
import * as FileSystem from "expo-file-system"

import messagePublusher from "messagepublisher"
import { IsAuthError } from "./errors"
import { API_HOST } from "../constants/credentials"

export const getAccountInfo = async (): Promise<{ ok: boolean, data: any } | void> => {
    try {
        const r = await configuredAxios.get("/account")
        return { ok: r.data.service.ok, data: r.data.result }
    } catch (error) {
        messagePublusher.add(error.message)
    }
}

export const getAvatar = async (): Promise<{ ok: boolean, avatar: any } | void> => {
    try {
        const r = await configuredAxios.get("/account/avatar")
        if (IsAuthError(r.data.service.error)) {
            return { ok: false, avatar: {} }
        }
        return { ok: r.data.service.ok, avatar: r.data.result.avatar }
    } catch (error) {
        messagePublusher.add(error.message)
    }
}

export const setAvatar = async (a: string): Promise<boolean | void> => {
    try {
        const r = await configuredAxios.post("/account/avatar", { data: { avatar: a } })
        return r.data.service.ok
    } catch (error) {
        messagePublusher.add(error.message)
    }
}

export const openMediaPicker = async () => {
    await ImagePicker.getMediaLibraryPermissionsAsync()
    const r = await ImagePicker.launchImageLibraryAsync() as any
    if (r.uri) {
        return await FileSystem.readAsStringAsync(r.uri, { encoding: "base64" })
    }
}