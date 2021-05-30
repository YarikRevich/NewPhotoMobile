/// <reference path="./../types/reducers.ts" />

import messagepublisher from "messagepublisher"
import { Dispatch } from "react"
import { tagMadia } from "../Helpers/media"

import { addMediaToAlbum, getEqualAlbum, deleteMediaFromAlbum, getDetailedAlbumMediaNum, deleteAlbum } from "./../Helpers/equalalbum"
import { EqualAlbumReducer } from "./../types/reducers"

const initialState = {
    photos: {
        result: [],
        last_page: false,
    },
    videos: {
        result: []
    },
    info: {
        media_num: 0
    },
    isReset: false,
    isFetching: false
}

type initialStateType = typeof initialState

const equalAlbumReducer = (state: initialStateType = initialState, action: EqualAlbumReducer.IEqualAlbumAction) => {

    switch (action.type) {
        case EqualAlbumReducer.CLEAN_EQUAL_ALBUM:
            return { photos: {result: [], last_page: state.photos.last_page}, videos: {result: []}, info: state.info, isFetching: state.isFetching, isReset: state.isReset }
        case EqualAlbumReducer.GET_LAST_PAGE:
            if (action.data) {
                if (action.data[0].length == state.photos.result.length) {
                    return { ...state, photos: { result: [], last_page: true } }
                }
            }
            return { ...state }
        case EqualAlbumReducer.GET_EQUAL_ALBUM_SUCCESS:
            if (action.data) {
                console.log()
                return { ...state, photos: { result: [...state.photos.result, ...action.data[0]], last_page: state.photos.last_page }, videos: { result: [...state.videos.result, ...action.data[1]] }, info: { media_num: action.data[0].length + action.data[1].length } }
            }
            return { ...state }
        case EqualAlbumReducer.GET_EQUAL_ALBUM_ERROR:
            messagepublisher.add("An error happened during the getting of albums!")
            return { ...state }
        case EqualAlbumReducer.CHANGE_MEDIA_SUCCESS:
            break
        case EqualAlbumReducer.CHANGE_MEDIA_ERROR:
            messagepublisher.add("An error happened during the adding of photos!")
            break
        case EqualAlbumReducer.GET_ALBUM_INFO_SUCCESS:
            if (action.info) {
                return { ...state, info: action.info }
            }
            return { ...state }
        case EqualAlbumReducer.GET_ALBUM_INFO_ERROR:
            return { ...state }
        case EqualAlbumReducer.TOOGLE_FETCHING:
            return { ...state, isFetching: (state.isFetching ? false : true) }
        case EqualAlbumReducer.TURN_ON_RESET:
            return { ...state, isReset: true }
        case EqualAlbumReducer.TURN_OFF_RESET:
            return { ...state, isReset: false }
        case EqualAlbumReducer.DELETE_ALBUM_SUCCESS:
            return { ...state }
        case EqualAlbumReducer.DELETE_ALBUM_ERROR:
            return { ...state }
    }

    return state
}

export const createCleanEqualAlbum = (): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.CLEAN_EQUAL_ALBUM }
}

const createGetLastPage = (r: [RecievedData.EqualAlbum<RecievedData.EqualAlbumInfoTaged>, RecievedData.EqualAlbum<RecievedData.EqualAlbumInfoTaged>]): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.GET_LAST_PAGE, data: r }
}

export const createGetEqualAlbum = (albumName: string, offset: number, page: number) => async (dispatch: Dispatch<EqualAlbumReducer.IEqualAlbumAction>) => {
    dispatch(createToogleFetching())
    const v = await getEqualAlbum(albumName, offset, page)
    if (v && v.ok) {
        const r = await tagMadia(v.data)
        dispatch(createGetLastPage(r))
        dispatch(createCleanEqualAlbum())
        dispatch(getEqualAlbumSuccess(r))
    } else {
        dispatch(getEqualAlbumError())
    }
    dispatch(createToogleFetching())
}

const getEqualAlbumSuccess = (data: [RecievedData.EqualAlbum<RecievedData.EqualAlbumInfoTaged>, RecievedData.EqualAlbum<RecievedData.EqualAlbumInfoTaged>]): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.GET_EQUAL_ALBUM_SUCCESS, data: data }
}

const getEqualAlbumError = (): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.GET_EQUAL_ALBUM_ERROR }
}

export const createChangeMedia = (t: "photos" | "videos", albumName: string, photos: SentData.LocalPhotos<SentData.FileInfo>, videos: SentData.LocalVideos<SentData.FileInfo>, toDelete: string[]) => async (dispatch: Dispatch<EqualAlbumReducer.IEqualAlbumAction>) => {
    switch (t) {
        case "photos":
            let ok = await addMediaToAlbum("photos", albumName, photos)
            if (!ok) {
                return dispatch(createChangeMediaError())
            }
            ok = await deleteMediaFromAlbum("photos", albumName, toDelete)
            if (!ok) {
                return dispatch(createChangeMediaError())

            }
            break
        case "videos":
            ok = await addMediaToAlbum("videos", albumName, videos)
            if (!ok) {
                return dispatch(createChangeMediaError())
            }
            ok = await deleteMediaFromAlbum("videos", albumName, toDelete)
            if (!ok) {
                return dispatch(createChangeMediaError())
            }
    }

    dispatch(createChangeMediaSuccess())
}

const createChangeMediaSuccess = (): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.CHANGE_MEDIA_SUCCESS }
}

const createChangeMediaError = (): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.CHANGE_MEDIA_ERROR }
}

export const createGetDetailedAlbumMediaNum = (albumName: string) => async (dispatch: Dispatch<EqualAlbumReducer.IEqualAlbumAction>, getState: Function) => {
    const info = await getDetailedAlbumMediaNum(albumName)
    if (info) {
        const state = getState().equalAlbumPage
        if (info.media_num !== state.info.media_num && !state.isFetching) {
            dispatch(createTurnOnReset())
        }
        dispatch(getAlbumInfoSuccess(info))
    } else {
        dispatch(getAlbumInfoError())
    }
}

const getAlbumInfoSuccess = (info: RecievedData.AlbumInfo): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.GET_ALBUM_INFO_SUCCESS, info: info }
}

const getAlbumInfoError = (): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.GET_ALBUM_INFO_ERROR }
}

const createToogleFetching = (): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.TOOGLE_FETCHING }
}

const createTurnOnReset = (): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.TURN_ON_RESET }
}

export const createTurnOffReset = (): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.TURN_OFF_RESET }
}

export const createDeleteAlbum = (albumName: string) => async (dispatch: Dispatch<EqualAlbumReducer.IEqualAlbumAction>) => {
    const r = await deleteAlbum(albumName)
    if (r) {
        dispatch(createDeleteAlbumSuccess())
    } else {
        dispatch(createDeleteAlbumError())
    }
}

const createDeleteAlbumSuccess = (): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.DELETE_ALBUM_SUCCESS }
}

const createDeleteAlbumError = (): EqualAlbumReducer.IEqualAlbumAction => {
    return { type: EqualAlbumReducer.DELETE_ALBUM_ERROR }
}




export default equalAlbumReducer