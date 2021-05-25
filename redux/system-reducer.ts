/// <reference path="./../types/reducers.ts" />

import { SystemReducer } from "./../types/reducers"

const initialState = {
    isConnected: true,
    isAppActive: true,
    isLocalAuthentication: false,
    LocalAuthenticationType: 1 | 2,
    LocalAuthenticationStatus: "nominal"
}

type initialStateType = typeof initialState

const system = (state: initialStateType = initialState, action: SystemReducer.ISystemReducer) => {
    switch (action.type) {
        case SystemReducer.TURN_ON_CONNECT:
            return { ...state, isConnected: true }
        case SystemReducer.TURN_OFF_CONNECT:
            return { ...state, isConnected: false }
        case SystemReducer.SET_APP_ACTIVE:
            return { ...state, isAppActive: true }
        case SystemReducer.SET_APP_INACTIVE:
            return { ...state, isAppActive: false }
        case SystemReducer.SET_LOCAL_AUTHENTICATION_ACTIVE:
            return { ...state, isLocalAuthentication: true }
        case SystemReducer.SET_LOCAL_AUTHENTICATION_INACTIVE:
            return { ...state, isLocalAuthentication: false }
        case SystemReducer.SET_LOCAL_AUTHENTICATION_TYPE:
            if (action.localAuthenticationType) {
                return { ...state, LocalAuthenticationType: action.localAuthenticationType }
            }
            break
        case SystemReducer.SET_LOCAL_AUTHENTICATION_STATUS_TRY_AGAIN:
            return { ...state, LocalAuthenticationStatus: "try_again" }
        case SystemReducer.SET_LOCAL_AUTHENTICATION_STATUS_FAILED:
            return { ...state, LocalAuthenticationStatus: "failed" }
        case SystemReducer.SET_LOCAL_AUTHENTICATION_STATUS_NOMINAL:
            return { ...state, LocalAuthenticationStatus: "nominal" }
    }
    return state
}

export const createTurnOnConnect = (): SystemReducer.ISystemReducer => {
    return { type: SystemReducer.TURN_ON_CONNECT }
}

export const createTurnOffConnect = (): SystemReducer.ISystemReducer => {
    return { type: SystemReducer.TURN_OFF_CONNECT }
}

export const createSetAppActive = (): SystemReducer.ISystemReducer => {
    return { type: SystemReducer.SET_APP_ACTIVE }
}

export const createSetAppInActive = (): SystemReducer.ISystemReducer => {
    return { type: SystemReducer.SET_APP_INACTIVE }
}

export const createSetLocalAuthenticationActive = (): SystemReducer.ISystemReducer => {
    return { type: SystemReducer.SET_LOCAL_AUTHENTICATION_ACTIVE }
}

export const createSetLocalAuthenticationInActive = (): SystemReducer.ISystemReducer => {
    return { type: SystemReducer.SET_LOCAL_AUTHENTICATION_INACTIVE }
}

export const createSetLocalAuthenticationType = (l: 1 | 2): SystemReducer.ISystemReducer => {
    return { type: SystemReducer.SET_LOCAL_AUTHENTICATION_TYPE, localAuthenticationType: l }
}

export const createSetLocalAuthenticationStatusTryAgain = (): SystemReducer.ISystemReducer => {
    return { type: SystemReducer.SET_LOCAL_AUTHENTICATION_STATUS_TRY_AGAIN }
}

export const createSetLocalAuthenticationStatusFailed = (): SystemReducer.ISystemReducer => {
    return { type: SystemReducer.SET_LOCAL_AUTHENTICATION_STATUS_FAILED }
}

export const createSetLocalAuthenticationStatusNominal = (): SystemReducer.ISystemReducer => {
    return { type: SystemReducer.SET_LOCAL_AUTHENTICATION_STATUS_NOMINAL }
}


export default system
