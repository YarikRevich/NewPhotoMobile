/// <reference path="./../types/reducers.ts" />

import { Dispatch } from "react"
import { getAlbums, addAlbum } from "../Helpers/albums"
import messagepublisher from "messagepublisher"

import { AlbumsReducer } from "./../types/reducers"

const initialState = {
    result: [] as RecievedData.Albums
}

type initialStateType = typeof initialState

const albumsPage = (state: initialStateType = initialState, action: AlbumsReducer.IAlbumsAction) => {
    switch (action.type) {
        case AlbumsReducer.CLEAN_ALBUM:
            return { result: [] }
        case AlbumsReducer.GET_ALBUMS_SUCCESS:
            return { ...state, result: action.data }
        case AlbumsReducer.GET_ALBUMS_ERROR:
            messagepublisher.add("Error happened during getting the albums!")
            return { ...state }
        case AlbumsReducer.ADD_ALBUM_SUCCESS:
            return { ...state }
        case AlbumsReducer.ADD_ALBUM_ERROR:
            messagepublisher.add("Error happened during adding album!")
            return { ...state }

    }
    return state
}

export default albumsPage

export const createCleanAlbum = (): AlbumsReducer.IAlbumsAction => {
    return { type: AlbumsReducer.CLEAN_ALBUM }
}


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
const createGetAlbumsSuccess = (data: RecievedData.Albums): AlbumsReducer.IAlbumsAction => {
    return { type: AlbumsReducer.GET_ALBUMS_SUCCESS, data: data }
}

/**
 * 
 * @returns Action
 */
const createGetAlbumsError = (): AlbumsReducer.IAlbumsAction => {
    return { type: AlbumsReducer.GET_ALBUMS_ERROR }
}

export const createAddAlbum = (albumName: string) => (dispatch: Dispatch<AlbumsReducer.IAlbumsAction>) => {
    return addAlbum(albumName)
        .then(ok => {
            if (ok) {
                dispatch(createAddAlbumSuccess())
            } else {
                dispatch(createAddAlbumError())
            }
        })
}

const createAddAlbumSuccess = (): AlbumsReducer.IAlbumsAction => {
    return { type: AlbumsReducer.ADD_ALBUM_SUCCESS }
}

const createAddAlbumError = (): AlbumsReducer.IAlbumsAction => {
    return { type: AlbumsReducer.ADD_ALBUM_ERROR }
}

