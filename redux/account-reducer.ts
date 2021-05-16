/// <reference path="./../types/reducers.ts" />


import { Dispatch } from "react"
import messagePublusher from "messagepublisher"
import { getAccountInfo, getAvatar, openMediaPicker, setAvatar } from "./../Helpers/account"
import { getStorageAccountInfo, setStorageAccountInfo } from "./../Helpers/storage"

import { AccountReducer } from "./../types/reducers"


const initialState = {
    result: {
        firstname: "",
        secondname: "",
        storage: 0,
    },
    avatar: ""
}


type initialStateType = typeof initialState;

const accountReducer = (state: initialStateType = initialState, action: AccountReducer.IAccountAction) => {
    switch (action.type) {
        case AccountReducer.SET_AVATAR_SUCCESS:
            messagePublusher.add("A new avatar was set successfully");
            return { ...state }
        case AccountReducer.SET_AVATAR_ERROR:
            messagePublusher.add("An error happened during the setting of a new avatar!")
            return { ...state }
        case AccountReducer.GET_AVATAR_SUCCESS:
            if (action.avatar) return { ...state, avatar: action.avatar }
            return { ...state }
        case AccountReducer.GET_AVATAR_ERROR:
            messagePublusher.add("An error happened during the getting of a new avatar!")
            return { ...state }
        case AccountReducer.GET_ACCOUNT_INFO_SUCCESS:
            if (action.data) return { ...state, result: action.data }
            return { ...state }
        case AccountReducer.GET_ACCOUNT_INFO_ERROR:
            messagePublusher.add("An error happened during the getting of account info!")
            return { ...state }
    }
    return state
}

export const createSetAvatar = () => (dispatch: Dispatch<AccountReducer.IAccountAction>) => {
    return openMediaPicker()
        .then(r => {
            if (r) {
                return setAvatar(r)
                    .then(ok => {
                        if (ok) {
                            dispatch(createSetAvatarSuccess())
                        } else {
                            dispatch(createSetAvatarError())
                        }
                    })
            }
        })
}

const createSetAvatarSuccess = (): AccountReducer.IAccountAction => {
    return { type: AccountReducer.SET_AVATAR_SUCCESS }
}

const createSetAvatarError = (): AccountReducer.IAccountAction => {
    return { type: AccountReducer.SET_AVATAR_ERROR }
}

export const createGetAvatar = () => (dispatch: Dispatch<AccountReducer.IAccountAction>) => {
    return getAvatar()
        .then(v => {
            if (v && v.ok) {
                dispatch(createGetAvatarSuccess(v.avatar))
            } else {
                dispatch(createGetAvatarError())
            }
        })
}

const createGetAvatarSuccess = (avatar: string): AccountReducer.IAccountAction => {
    return { type: AccountReducer.GET_AVATAR_SUCCESS, avatar: avatar }
}

const createGetAvatarError = (): AccountReducer.IAccountAction => {
    return { type: AccountReducer.GET_AVATAR_ERROR }
}


export const createGetAccountInfo = () => (dispatch: Dispatch<any>) => {
    return getStorageAccountInfo()
        .then(d => {
            if (d === null) {
                getAccountInfo()
                    .then(v => {
                        if (v && v.ok) {
                            setStorageAccountInfo(JSON.stringify(v.data))
                                .then(() => {
                                    dispatch(createGetAccountInfoSuccess(v.data))
                                })
                        } else {
                            dispatch(createGetAccountInfoError())
                        }
                    })
            } else {
                dispatch(createGetAccountInfoSuccess(JSON.parse(d)))
            }
        })
}

const createGetAccountInfoSuccess = (data: any) => {
    return { type: AccountReducer.GET_ACCOUNT_INFO_SUCCESS, data: data }
}

const createGetAccountInfoError = () => {
    return { type: AccountReducer.GET_ACCOUNT_INFO_ERROR }
}

export default accountReducer