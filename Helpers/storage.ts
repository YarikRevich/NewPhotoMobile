import AsyncStorage from "@react-native-community/async-storage"

export const getAccountInfo = (): Promise<string | null> => {
    return AsyncStorage.getItem("account_info")
}

export const setAccountInfo = (i: string): Promise<void> => {
    return AsyncStorage.setItem("account_info", i)
}

export const setPhotoTagSaved = (id: string): Promise<void> => {
    return AsyncStorage.setItem(id, "1")
}

export const getPhotoTag = (id: string): Promise<string | null> => {
    return AsyncStorage.getItem(id)
}