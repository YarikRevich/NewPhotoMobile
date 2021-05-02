import { IAuthAction, RETRIEVE_TOKEN, SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_UP_SUCCESS, SIGN_UP_ERROR, SIGN_OUT_SUCCESS, SIGN_OUT_ERROR, CHECK_AUTH_SUCCESS, CHECK_AUTH_ERROR } from "./../types/reducers/auth-reducer"

import { setAccountInfo } from "./../Helpers/storage"
import { checkAuth, retrieveToken, signIn, signOut, signUp } from "./../Helpers/auth"
import { Dispatch } from "react"
import messagePublusher from "messagepublisher"

const initialState = {
    isAuthed: false,
}

const authReducer = (state = initialState, action: IAuthAction) => {
    switch (action.type) {
        case CHECK_AUTH_SUCCESS:
            return ({ ...state, isAuthed: true })
        case CHECK_AUTH_ERROR:
            messagePublusher.add("You are not authed!")
            return ({ ...state, isAuthed: false })
        case SIGN_UP_SUCCESS:
            messagePublusher.add("You signed up!")
            if (action.updater) {
                action.updater({ ok: true, checked: true })
            }
            break
        case SIGN_UP_ERROR:
            messagePublusher.add("User with such login already exists!")
            if (action.updater) {
                action.updater({ ok: false, checked: true })
            }
            break
        case SIGN_IN_SUCCESS:
            messagePublusher.add("You logged in!")
            if (action.updater){
                action.updater(true)
            }
            return { ...state, isAuthed: true }
        case SIGN_IN_ERROR:
            messagePublusher.add("User with such credentials does not exist")
            break
        case SIGN_OUT_SUCCESS:
            messagePublusher.add("Logout is successful!")
            return { ...state, isAuthed: false }
        case SIGN_OUT_ERROR:
            messagePublusher.add("Logout is not successful!")

    }
    return state
}

// Check auth creators ...

export const createCheckAuth = (updater: Function) => (dispatch: Dispatch<any>) => {
    return checkAuth()
        .then(ok => {
            if (ok) {
                dispatch(checkAuthSuccess(updater))
            } else {
                dispatch(checkAuthError(updater))
            }
            updater(true)
        })
}

export const checkAuthSuccess = (updater: Function) => {
    return ({ type: CHECK_AUTH_SUCCESS })
}

export const checkAuthError = (updater: Function) => {
    return ({ type: CHECK_AUTH_ERROR })
}

// Sign up creators ...

export const createSignUp = (d: { login: string; firstname: string; secondname: string; password1: string; password2: string }, updater: Function) => (dispatch: Dispatch<any>) => {
    return signUp(d)
        .then(ok => {
            if (ok) {
                dispatch(signUpSuccess(updater))

            } else {
                dispatch(signUpError(updater))
            }
            updater(true)
        })
}

const signUpSuccess = (updater: Function) => {
    return ({ type: SIGN_UP_SUCCESS, updater: updater })
}

const signUpError = (updater: Function) => {
    return ({ type: SIGN_UP_ERROR, updater: updater })
}

//Sign in creators ...

export const createSignIn = (d: any, updater: Function) => (dispatch: Dispatch<any>) => {
    return signIn({ ...d })
        .then(ok => {
            if (ok) {
                dispatch(signInSuccess(updater))
            } else {
                dispatch(signInError())
                updater(true)
            }
            
        })
}

const signInSuccess = (updater: Function) => {
    return ({ type: SIGN_IN_SUCCESS, updater: updater })
}

const signInError = () => {
    return ({ type: SIGN_IN_ERROR })
}

// Sign out creators ...

export const createSignOut = (updater: Function) => (dispatch: Dispatch<any>) => {
    return signOut()
        .then(ok => {
            if (ok) {
                setAccountInfo("")
                    .then(() => {
                        dispatch(signOutSuccess(updater))
                    })
            } else {
                dispatch(signOutError(updater))
            }
        })
}

export const signOutSuccess = (updater: Function) => {
    return ({ type: SIGN_OUT_SUCCESS })
}

export const signOutError = (updater: Function) => {
    return ({ type: SIGN_OUT_ERROR })
}

export default authReducer