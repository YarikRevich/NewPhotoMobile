import axios from "axios"

import messagePublusher from "messagepublisher"
import { signUpI, signInI } from "../types/utils/auth"
import { ERROR_NOT_200 } from "./errors"

import { API_HOST } from "../constants/credentials"


export const retrieveToken = (token: string | null): Promise<string> => {
    if (!token) new Promise((resolve) => resolve(null))

    return axios.get(`${API_HOST}/retrieve_token`)
        .then(resp => {
            if (resp.status === 200) {
                return resp.headers["set-cookie"][0].split(";")[0].split("sessionid=")[1]
            }
            messagePublusher.add("Network error!")
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })
}

export const checkAuth = (): Promise<boolean | string> => {
    return axios.get(`${API_HOST}/check_auth`)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data.ok
            }
            messagePublusher.add("Network error!")
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })

}

export const signIn = (d: signInI): Promise<boolean | string> => {
    return axios.post(`${API_HOST}/sign_in`, {
        ...d
    })
        .then(resp => {
            if (resp.status === 200) {
                return resp.data.ok
            }
            messagePublusher.add("Network error!")
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })

}

export const signUp = (d: signUpI): Promise<JSON | string> => {
    return axios.post(`${API_HOST}/sign_up`, d)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data.ok
            }
            messagePublusher.add("Network error!")
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })

}

export const signOut = (): Promise<boolean | string> => {
    return axios.get(`${API_HOST}/sign_out`)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data.ok
            }
            messagePublusher.add("Network error!")
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })
}



