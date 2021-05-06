import configuredAxios from "./common"

import messagePublusher from "messagepublisher"

export const getAccountInfo_ = () => {
    return configuredAxios.get("/account")
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            messagePublusher.add("Network error!")
        })
        .catch((err: Error) => {
            messagePublusher.add(err.message)
        })
}