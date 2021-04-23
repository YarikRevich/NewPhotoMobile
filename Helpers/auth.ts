import axios from "axios"

import messagePublusher from "messagepublisher"
import { signUpI, signInI } from "../types/utils/auth"
import { ERROR_NOT_200 } from "./errors"

import { API_HOST } from "../constants/credentials"


export const retrieveToken = (token: string | null): Promise<string> => {
    if (!token) new Promise((resolve, reject) => resolve(null))

    return axios.get(`${API_HOST}/retrieve_token`)
        .then(resp => {
            if (resp.status === 200) {
                return resp.headers["set-cookie"][0].split(";")[0].split("sessionid=")[1]
            }
            return ERROR_NOT_200
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
            return ERROR_NOT_200
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
            return ERROR_NOT_200
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })

}

export const signUp = async (d: signUpI): Promise<number | string> => {
    const r = await axios.get(`${API_HOST}/sign_in`, {
        params: {
            ...d
        }
    })
    if (r.status === 200) {
        const data = JSON.parse(r.data)
    }
    return ERROR_NOT_200
}

export const signOut = (): Promise<boolean | string> => {
    return axios.get(`${API_HOST}/sign_out`)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data.ok
            }
            return ERROR_NOT_200
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })
}



