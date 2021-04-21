import AsyncStorage from "@react-native-community/async-storage"

export const setToken = async(token: string) => {
    //Sets wanted token for future auth check ...

    return await AsyncStorage.setItem("token", token)
}

export const getToken = async(): Promise<string | null> => {
    //Get wanted token for auth check ...

    return await AsyncStorage.getItem("token")
}