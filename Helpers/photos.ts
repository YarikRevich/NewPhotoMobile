import axios from "axios";
import { API_HOST } from "../constants/credentials"
import messagePublusher from "messagepublisher"
import { ERROR_NOT_200 } from "./errors"

export const getPhotos = (): Promise<any> => {
    return axios.get(`${API_HOST}/photos`, {headers: {"Fetch": "true"}})
        .then(resp => {
            if (resp.status === 200) {
                return { ...resp.data }
            }
            return ERROR_NOT_200
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })
}