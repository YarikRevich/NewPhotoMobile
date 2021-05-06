/// <reference path="./../types/reducers.ts" />

import { Dispatch } from "react"
import { getAlbums } from "../Helpers/albums"
import messagepublisher from "messagepublisher"

import { AlbumsReducer } from "./../types/reducers"

const initialState = {
    result: [] as RecievedData.Albums
}

type initialStateType = typeof initialState

const albumsPage = (state: initialStateType = initialState, action: AlbumsReducer.IAlbumsAction) => {
    switch (action.type) {
        case AlbumsReducer.GET_ALBUMS_SUCCESS:
            return { ...state, result: action.data }
        case AlbumsReducer.GET_ALBUMS_ERROR:
            messagepublisher.add("Error happened during getting the albums!")
            return { ...state }
    }
    return state
}

export default albumsPage


/**
 * @returns Dispatch for the futher action
 */
export const createGetAlbums = () => (dispatch: Dispatch<any>) => {
    getAlbums()
        .then((v) => {
            if (v.ok) {
                dispatch(createGetAlbumsSuccess(v.data))
            } else {
                dispatch(createGetAlbumsError())
            }
        })
}

/**
 * 
 * @param data Data for saving
 * @returns Action
 */
const createGetAlbumsSuccess = (data: RecievedData.Albums) => {
    return { type: AlbumsReducer.GET_ALBUMS_SUCCESS, data: data }
}

/**
 * 
 * @returns Action
 */
const createGetAlbumsError = () => {
    return { type: AlbumsReducer.GET_ALBUMS_ERROR }
}

