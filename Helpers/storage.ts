import AsyncStorage from "@react-native-community/async-storage"

export const getStorageAccountInfo = (): Promise<string | null> => {
    return AsyncStorage.getItem("account_info")
}

export const setStorageAccountInfo = (i: string): Promise<void> => {
    return AsyncStorage.setItem("account_info", i)
}

export const setMediaTagSaved = (id: string): Promise<void> => {
    return AsyncStorage.setItem(id, "1")
}

export const getMediaTag = (id: string): Promise<string | null> => {
    return AsyncStorage.getItem(id)
}

export const setServiceImageDataByFile = (file: string, data: { uri: string, extension: string }): Promise<void> => {
    return AsyncStorage.setItem(file, JSON.stringify(data))
}

export const getServiceImageDataByFile = (file: string): Promise<{ uri: string, extension: string } | null> => {
    return AsyncStorage.getItem(file).then(d => d ? JSON.parse(d) : null)
}

export const deleteServiceImageDataByFile = (file: string) => {
    AsyncStorage.removeItem(file)
}

export const setUsedCredentials = (d: SentData.SignIn) => {
    AsyncStorage.setItem("used_creds", JSON.stringify(d))
}

export const getUsedCredentials = async (): Promise<SentData.SignIn | void> => {
    const r = await AsyncStorage.getItem("used_creds")
    if (r) {
        return JSON.parse(r)
    }
}

export const getLocalAuthentication = async () => {
    const r = await AsyncStorage.getItem("local_auth")
    if (r) {
        return r
    }
}

export const setLocalAuthentication = async (o: "0" | "1") => {
    await AsyncStorage.setItem("local_auth", o)
}

export const getTokens = async () => {
    const r = await AsyncStorage.getItem("tokens")
    if (r) {
        return JSON.parse(r)
    }
}

export const setTokens = async (at: string, lt: string) => {
    await AsyncStorage.setItem("tokens", JSON.stringify({ at, lt }))
}
