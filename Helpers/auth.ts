import configuredAxios from "./common"

import messagePublusher from "messagepublisher"

export const checkAuth = (): Promise<boolean | string> => {
    return configuredAxios.get("/check_auth")
        .then(resp => {
            if (resp.status === 200) {
                return resp.data.service.ok
            }
            messagePublusher.add("Network error!")
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })

}

export const signIn = (d: SentData.SignIn): Promise<boolean | string> => {
    return configuredAxios.post("/sign_in", {
        ...d
    })
        .then(resp => {
            if (resp.status === 200) {
                return resp.data.service.ok
            }
            messagePublusher.add("Network error!")
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })

}

export const signUp = (d: SentData.SignUp): Promise<JSON | string> => {
    return configuredAxios.post("/sign_up", d)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data.service.ok
            }
            messagePublusher.add("Network error!")
            return { ok: false }
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })

}

export const signOut = (): Promise<boolean | string> => {
    return configuredAxios.get("/sign_out")
        .then(resp => {
            if (resp.status === 200) {
                return resp.data.service.ok
            }
            messagePublusher.add("Network error!")
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })
}



