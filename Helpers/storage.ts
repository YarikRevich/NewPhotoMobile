import AsyncStorage from "@react-native-community/async-storage"

export const getAccountInfo = (): Promise<string | null> => {
    return AsyncStorage.getItem("account_info")
}

export const setAccountInfo = (i: string): Promise<void> => {
    return AsyncStorage.setItem("account_info", i)
}