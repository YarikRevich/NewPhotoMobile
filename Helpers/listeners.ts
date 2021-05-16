import { useRef, useState } from "react"

export const addAuthListener = (authentification: StateComponents.Authentification, u: (n: boolean) => void) => {
    const authListenerRef = useRef(0)
    clearInterval(authListenerRef.current)

    authListenerRef.current = setInterval(() => {
        authentification.isAuthed && !authentification.isChecking ? u(true) : u(false)
    }, 10)

}

export const addAvatarListener = (authentification: StateComponents.Authentification, u: () => void) => {
    const avatarListenerRef = useRef(0)
    clearInterval(avatarListenerRef.current)

    if (authentification.isAuthed) {
        avatarListenerRef.current = setInterval(() => {
            u()
        }, 5000)
    }
}

export const addMessageListener = (u: () => void) => {
    const messageListener = useRef(0)
    clearInterval(messageListener.current)

    messageListener.current = setInterval(() => u(), 2000)
}