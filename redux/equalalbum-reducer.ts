/// <reference path="./../types/reducers.ts" />

import { Dispatch } from "react"

import { getEqualAlbum } from "./../Helpers/equalalbum"
import { EqualAlbumReducer } from "./../types/reducers"

const initialState = {
    result: [] as RecievedData.EqualAlbum
}

type initialStateType = typeof initialState

const equalAlbumReducer = (state: initialStateType = initialState, action: EqualAlbumReducer.IEqualAlbumAction) => {

    switch (action.type) {
        case EqualAlbumReducer.GET_EQUAL_ALBUM_SUCCESS:
            if (action.data) {
                return { ...state, result: action.data }
            }
            return { ...state }
        case EqualAlbumReducer.GET_EQUAL_ALBUM_ERROR:
            break
    }

    return state
}

export const createGetEqualAlbum = (albumName: string) => (dispatch: Dispatch<EqualAlbumReducer.IEqualAlbumAction>) => {
    return getEqualAlbum(albumName)
        .then((v) => {
            if (v && v.ok) {
                dispatch(getEqualAlbumSuccess(v.data))
            }
        })
}

const getEqualAlbumSuccess = (data: RecievedData.EqualAlbum): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.GET_EQUAL_ALBUM_SUCCESS, data: data }
}

const getEqualAlbumError = (): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.GET_EQUAL_ALBUM_ERROR }
}

export default equalAlbumReducer