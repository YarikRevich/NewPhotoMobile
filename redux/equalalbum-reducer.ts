/// <reference path="./../types/reducers.ts" />

import messagepublisher from "messagepublisher"
import { Dispatch } from "react"

import { addPhotosToAlbum, getEqualAlbum, deletePhotosFromAlbum } from "./../Helpers/equalalbum"
import { EqualAlbumReducer } from "./../types/reducers"

const initialState = {
    result: [] as RecievedData.EqualAlbum
}

type initialStateType = typeof initialState

const equalAlbumReducer = (state: initialStateType = initialState, action: EqualAlbumReducer.IEqualAlbumAction) => {

    switch (action.type) {
        case EqualAlbumReducer.CLEAN_EQUAL_ALBUM:
            return { result: [] }
        case EqualAlbumReducer.GET_EQUAL_ALBUM_SUCCESS:
            if (action.data) {
                return { ...state, result: action.data }
            }
            return { ...state }
        case EqualAlbumReducer.GET_EQUAL_ALBUM_ERROR:
            messagepublisher.add("An error happened during the getting of albums!")
            return { ...state }
        case EqualAlbumReducer.DELETE_EQUAL_PHOTO:
            return { ...state }
        case EqualAlbumReducer.DELETE_EQUAL_PHOTO:
            messagepublisher.add("An error happened during the deleting of photos!")
            return { ...state }
        case EqualAlbumReducer.ADD_PHOTOS_SUCCESS:
            return { ...state }
        case EqualAlbumReducer.ADD_PHOTOS_ERROR:
            messagepublisher.add("An error happened during the adding of photos!")
            return { ...state }
    }

    return state
}

export const createCleanEqualAlbum = (): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.CLEAN_EQUAL_ALBUM }
}

export const createGetEqualAlbum = (albumName: string) => (dispatch: Dispatch<EqualAlbumReducer.IEqualAlbumAction>) => {
    dispatch(createCleanEqualAlbum())
    return getEqualAlbum(albumName)
        .then(v => {
            if (v && v.ok) {
                dispatch(getEqualAlbumSuccess(v.data))
            } else {
                dispatch(getEqualAlbumError())
            }
        })
}

const getEqualAlbumSuccess = (data: RecievedData.EqualAlbum): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.GET_EQUAL_ALBUM_SUCCESS, data: data }
}

const getEqualAlbumError = (): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.GET_EQUAL_ALBUM_ERROR }
}

export const createAddPhotos = (albumName: string, data: SentData.LocalPhotos<SentData.FileInfo>, toDelete: string[]) => (dispatch: Dispatch<EqualAlbumReducer.IEqualAlbumAction>) => {
    return addPhotosToAlbum(albumName, data)
        .then(ok => {
            if (ok) {
                return deletePhotosFromAlbum(toDelete)
                    .then(ok => {
                        if (ok) {
                            dispatch(createDeletePhotosSuccess())
                        }
                        dispatch(createAddPhotosSuccess())
                    })
            } else {
                dispatch(createAddPhotosError())
            }
        })
}

const createAddPhotosSuccess = (): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.ADD_PHOTOS_SUCCESS }
}

const createAddPhotosError = (): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.ADD_PHOTOS_ERROR }
}

const createDeletePhotosSuccess = (): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.DELETE_EQUAL_PHOTO }
}


export default equalAlbumReducer