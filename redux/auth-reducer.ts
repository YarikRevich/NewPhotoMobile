/// <reference path="./../types/reducers.ts" />

import { getUsedCredentials, setStorageAccountInfo, setUsedCredentials } from "./../Helpers/storage"
import { checkAuth, signIn, signOut, signUp } from "./../Helpers/auth"
import { Dispatch } from "react"
import messagePublusher from "messagepublisher"

import { AuthReducer } from "./../types/reducers"

const initialState = {
    isAuthed: false,
    isLocallyAuthed: false,
    isChecking: false,
    isSignedUp: false,
}

const authReducer = (state = initialState, action: AuthReducer.IAuthAction) => {
    switch (action.type) {
        case AuthReducer.TOOGLE_CHECKING:
            return { ...state, isChecking: state.isChecking ? false : true }
        case AuthReducer.CHECK_AUTH_SUCCESS:
            return { ...state, isAuthed: true }
        case AuthReducer.CHECK_AUTH_ERROR:
            messagePublusher.add("You are not authed!")
            return { ...state, isAuthed: false }
        case AuthReducer.SIGN_UP_SUCCESS:
            messagePublusher.add("You signed up!")
            return { ...state, isSignedUp: true }
        case AuthReducer.SIGN_UP_ERROR:
            messagePublusher.add("User with such login already exists!")
            return { ...state }
        case AuthReducer.SIGN_IN_OUTER_SUCCESS:
            messagePublusher.add("You logged in!")
            return { ...state, isAuthed: true, isSignedUp: false }
        case AuthReducer.SIGN_IN_OUTER_ERROR:
            messagePublusher.add("User with such credentials does not exist")
            return { ...state }
        case AuthReducer.SIGN_IN_INNER_SUCCESS:
            return { ...state, isLocallyAuthed: true }
        case AuthReducer.SIGN_IN_INNER_ERROR:
            return { ...state }
        case AuthReducer.SIGN_OUT_SUCCESS:
            messagePublusher.add("Logout is successful!")
            return { ...state, isAuthed: false }
        case AuthReducer.SIGN_OUT_ERROR:
            messagePublusher.add("Logout is not successful!")
            return { ...state }
    }
    return state
}

const createToogleChecking = (): AuthReducer.IAuthAction => {
    return { type: AuthReducer.TOOGLE_CHECKING }
}

// Check auth creators ...

export const createCheckAuth = () => (dispatch: Dispatch<any>) => {
    dispatch(createToogleChecking())
    checkAuth()
        .then(ok => {
            if (ok) {
                dispatch(checkAuthSuccess())
            } else {
                dispatch(checkAuthError())
            }
            dispatch(createToogleChecking())
        })
}

export const checkAuthSuccess = () => {
    return ({ type: AuthReducer.CHECK_AUTH_SUCCESS })
}

export const checkAuthError = () => {
    return ({ type: AuthReducer.CHECK_AUTH_ERROR })
}

export const createSignUp = (d: SentData.SignUp) => (dispatch: Dispatch<any>) => {
    return signUp(d)
        .then(ok => {
            if (ok) {
                dispatch(signUpSuccess())

            } else {
                dispatch(signUpError())
            }
        })
}

const signUpSuccess = () => {
    return ({ type: AuthReducer.SIGN_UP_SUCCESS })
}

const signUpError = () => {
    return ({ type: AuthReducer.SIGN_UP_ERROR })
}

export const createSignInOuter = (d: SentData.SignIn) => async (dispatch: Dispatch<any>) => {
    const ok = await signIn(d)
    if (ok) {
        await setUsedCredentials(d)
        dispatch(signInOuterSuccess())
    } else {
        dispatch(signInOuterError())
    }
}

const signInOuterSuccess = () => {
    return ({ type: AuthReducer.SIGN_IN_OUTER_SUCCESS })
}

const signInOuterError = () => {
    return ({ type: AuthReducer.SIGN_IN_OUTER_ERROR })
}

export const createSignInInner = (d: SentData.SignIn) => async (dispatch: Dispatch<any>) => {
    const r = await getUsedCredentials()

    if (r) {
        if (r.data.login === d.data.login && r.data.password === r.data.password) {
            dispatch(signInInnerSuccess())
        } else {
            dispatch(signInInnerError())
        }
    }
}

const signInInnerSuccess = () => {
    return ({ type: AuthReducer.SIGN_IN_INNER_SUCCESS })
}

const signInInnerError = () => {
    return ({ type: AuthReducer.SIGN_IN_INNER_ERROR })
}

export const createSignOut = () => (dispatch: Dispatch<any>) => {
    return signOut()
        .then(ok => {
            if (ok) {
                setStorageAccountInfo("")
                    .then(() => {
                        dispatch(signOutSuccess())
                    })
            } else {
                dispatch(signOutError())
            }
        })
}

export const signOutSuccess = () => {
    return ({ type: AuthReducer.SIGN_OUT_SUCCESS })
}

export const signOutError = () => {
    return ({ type: AuthReducer.SIGN_OUT_ERROR })
}

export default authReducer
