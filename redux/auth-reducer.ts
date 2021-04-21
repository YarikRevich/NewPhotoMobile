import { IAuthAction, RETRIEVE_TOKEN, SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_OUT_SUCCESS, SIGN_OUT_ERROR, CHECK_AUTH_SUCCESS, CHECK_AUTH_ERROR } from "./../types/reducers/auth-reducer"

import { checkAuth, retrieveToken, signIn, signOut } from "./../Helpers/auth"
import { setToken, getToken } from "./../Helpers/storage"
import { Dispatch } from "react"
import messagePublusher from "messagepublisher"

const initialState = {
    isAuthed: false,
    checkAuth: {
        message: ""
    },
    signIn: {
        message: ""
    },
    signOut: {
        message: ""
    }
}

const authReducer = (state = initialState, action: IAuthAction) => {
    switch (action.type) {
        case CHECK_AUTH_SUCCESS:
            setTimeout(() => {
                if (action.updater) {
                    action.updater(true)
                }
            }, 500)
            return ({ ...state, isAuthed: true })
        case CHECK_AUTH_ERROR:
            setTimeout(() => {
                if (action.updater) {
                    action.updater(true)
                }
            }, 500)
            return ({ ...state, isAuthed: false })
            break
        case SIGN_IN_SUCCESS:
            state.isAuthed = true
            messagePublusher.add("You logged in!")
            // state.signIn.message = "You logged in!"
            if (action.updater) {
                action.updater(true)
            }
            break
        case SIGN_IN_ERROR:
            messagePublusher.add("Something went wrong!")
            // state.signIn.message = "Something went wrong!"
            if (action.updater) {
                action.updater(true)
            }
            break
        case SIGN_OUT_SUCCESS:
            state.isAuthed = false
            messagePublusher.add("Success!")
            // state.signOut.message = "Success!"
            if (action.updater) {
                action.updater(true)
            }
            break
        case SIGN_OUT_ERROR:
            messagePublusher.add("Error happened!")
            // state.signOut.message = "Error happened!"
            if (action.updater) {
                action.updater(true)
            }
            break
    }
    return state
}

export const createRetrieveToken = (updater: Function) => {
    return ({ type: RETRIEVE_TOKEN, updater: updater })
}

// Check auth creators ...

export const createCheckAuth = (updater: Function) => (dispatch: Dispatch<any>) => {
    return checkAuth()
        .then(ok => {
            console.log(ok)
            if (ok) {
                dispatch(checkAuthSuccess(updater))
            } else {
                dispatch(checkAuthError(updater))
            }

        })
}

export const checkAuthSuccess = (updater: Function) => {
    return ({ type: CHECK_AUTH_SUCCESS, updater: updater })
}

export const checkAuthError = (updater: Function) => {
    return ({ type: CHECK_AUTH_ERROR, updater: updater })
}

// Sign in creators ...

export const createSignIn = (d: any, updater: Function) => (dispatch: Dispatch<any>) => {
    return signIn({ ...d })
        .then(ok => {
            if (ok) {
                dispatch(signInSuccess(updater))
            } else {
                dispatch(signInError(updater))
            }
        })
}

const signInSuccess = (updater: Function) => {
    return ({ type: SIGN_IN_SUCCESS, updater: updater })
}

const signInError = (updater: Function) => {
    return ({ type: SIGN_IN_ERROR, updater: updater })
}

// Sign out creators ...

export const createSignOut = (updater: Function) => (dispatch: Dispatch<any>) => {
    return signOut()
        .then(ok => {
            if (ok) {
                dispatch(signOutSuccess(updater))
            } else {
                dispatch(signOutError(updater))
            }
        })
}

export const signOutSuccess = (updater: Function) => {
    return ({ type: SIGN_OUT_SUCCESS, updater })
}

export const signOutError = (updater: Function) => {
    return ({ type: SIGN_OUT_ERROR, updater })
}

export default authReducer