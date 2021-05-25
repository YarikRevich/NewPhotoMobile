import { useRef } from "react"
import { AppState, AppStateStatus } from "react-native"
import NetInfo from "@react-native-community/netinfo"
import * as LocalAuthentication from "expo-local-authentication"

export const addAuthListener = (authentification: StateComponents.Authentification, u: () => void) => {
    setInterval(() => {
        authentification.isAuthed && !authentification.isChecking ? u() : u()
    }, 10)
}

export const addNetListener = (y: Function, n: Function) => {
    const authListenerRef = useRef(0)
    clearInterval(authListenerRef.current)

    authListenerRef.current = setInterval(async () => {
        const r = await NetInfo.fetch()
        if (r.isConnected) {
            y()
        } else {
            n()
        }
    }, 100)
}


export const addAvatarListener = (isAuthed: boolean, u: Function) => {
    const avatarListenerRef = useRef(0)
    clearInterval(avatarListenerRef.current)

    if (isAuthed) {
        avatarListenerRef.current = setInterval(() => {
            u()
        }, 1000)
    }
}

export const addAppFocusListener = (a: Function, i: Function) => {
    const appFocusListenerRef = useRef(0)
    clearInterval(appFocusListenerRef.current)

    const _handler = (config: AppStateStatus) => {
        if (config == "active") {
            a()
        } else {
            i()
        }
    }

    AppState.addEventListener("change", _handler)
}

export const addLocalAuthenticationListener = (y: Function, n: Function, st: (l: 1 | 2) => void) => {
    const localAuthenticationListener = useRef(0)
    clearInterval(localAuthenticationListener.current)

    localAuthenticationListener.current = setInterval(async () => {
        const r = await LocalAuthentication.supportedAuthenticationTypesAsync()
        const e = await LocalAuthentication.isEnrolledAsync()
        if (r.includes(LocalAuthentication.AuthenticationType.FINGERPRINT) || r.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION) && e) {
            if (r.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)) {
                st(LocalAuthentication.AuthenticationType.FINGERPRINT)
            } else if (r.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION)) {
                st(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION)
            }
            y()
        } else {
            n()
        }
    }, 200)
}