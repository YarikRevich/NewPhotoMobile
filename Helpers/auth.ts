import axios from "axios"

import { ERROR_NOT_200, signUpI, signInI } from "../types/utils/auth"

import { API_HOST } from "../constants/credentials"


export const retrieveToken = (token: string | null): Promise<string> => {
    if (!token) new Promise((resolve, reject) => resolve(null))

    return axios.get(`http://${API_HOST}/retrieve_token`)
        .then(resp => {
            if (resp.status === 200) {
                return resp.headers["set-cookie"][0].split(";")[0].split("sessionid=")[1]
            }
            return ERROR_NOT_200
        })
}

export const checkAuth = (): Promise<boolean | string> => {
    return axios.get(`http://${API_HOST}/check_auth`)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data.ok
            }
            return ERROR_NOT_200
        })

}

export const signIn = (d: signInI): Promise<boolean | string> => {
    return axios.post(`http://${API_HOST}/sign_in`, {
        ...d
    })
        .then(resp => {
            if (resp.status === 200) {
                return resp.data.ok
            }
            return ERROR_NOT_200
        })

}

export const signUp = async (d: signUpI): Promise<number | string> => {
    const r = await axios.get(`http://${API_HOST}/sign_in`, {
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
    return axios.get(`http://${API_HOST}/sign_out`)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data.ok
            }
            return ERROR_NOT_200
        })
}



