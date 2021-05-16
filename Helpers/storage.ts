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
