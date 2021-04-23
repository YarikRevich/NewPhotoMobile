import axios from "axios"
import messagePublusher from "messagepublisher"
import { API_HOST } from "./../constants/credentials"
import { ERROR_NOT_200 } from "./errors"

export const getAccountInfo_ = () => {
    return axios.get(`${API_HOST}/account`, { headers: { "Fetch": "true" } })
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            return ERROR_NOT_200
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })
}