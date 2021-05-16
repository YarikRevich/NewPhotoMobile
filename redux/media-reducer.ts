/// <reference path="../types/reducers.ts" />

import { Dispatch } from "react";

import messagePublusher from "messagepublisher"

import { MediaReducer } from "./../types/reducers"
import { getLocalMedia, getMediaNum } from "../Helpers/media";
import { backupLocalMedia, getMediaToBackup } from "../Helpers/media";

const initialState = {
    photos: {
        result: [],
        photosNum: 0
    },
    videos: {
        result: []
    },
    isFetching: false,
    isBackuping: false,
    isAnimating: true,
    isListening: false,
    isReset: false,
}

type initialStateType = typeof initialState

/**
 * 
 * @param state Media state 
 * @param action Object with the information for the changing of the state
 * @returns Changed Photo state
 */
const photoReducer = (state: initialStateType = initialState, action: MediaReducer.IMediaAction) => {
    switch (action.type) {
        case MediaReducer.TOOGLE_BACKUPING:
            return { ...state, isBackuping: state.isBackuping ? false : true }
        case MediaReducer.STOP_ANIMATION:
            return { ...state, isAnimating: false, isListening: false }
        case MediaReducer.START_ANIMATION:
            return { ...state, isAnimating: true, isListening: true }
        case MediaReducer.TURNON_RESET:
            return { ...state, isReset: true }
        case MediaReducer.TURNOFF_RESET:
            return { ...state, isReset: false }
        case MediaReducer.TURNON_LISTENING:
            return { ...state, isListening: true }
        case MediaReducer.TOOGLE_FETCHING:
            return { ...state, isFetching: state.isFetching ? false : true }
        case MediaReducer.GET_LOCAL_PHOTOS_SUCCESS:
            if (action.data) {
                return { ...state, photos: { result: action.data, photosNum: action.data.length } }
            }
            return { ...state }
        case MediaReducer.GET_LOCAL_PHOTOS_ERROR:
            messagePublusher.add("Something went wrong!")
            return { ...state }
        case MediaReducer.GET_LOCAL_VIDEOS_SUCCESS:
            return { ...state, videos: { result: action.data } }
        case MediaReducer.GET_LOCAL_VIDEOS_ERROR:
            return { ...state }
        case MediaReducer.BACKUP_ERROR:
            messagePublusher.add("An error happened during the backuping")
            return { ...state }
    }
    return state
}

/**
 * 
 * @todo Creates action for fetch toogling 
 * @returns Action
 */
const createToogleFetching = () => {
    return { type: MediaReducer.TOOGLE_FETCHING }
}

/**
 * 
 * @todo Creates action for backup toogling 
 * @returns Action
 */
const createToogleBackuping = () => {
    return { type: MediaReducer.TOOGLE_BACKUPING }
}

/**
 * 
 * @todo Creates action for animation start
 * @returns Action
 */
export const createStartAnimation = () => {
    return { type: MediaReducer.START_ANIMATION }
}

/**
 * 
 * @todo Creates action for animation stop
 * @returns Action
 */
export const createStopAnimation = () => {
    return { type: MediaReducer.STOP_ANIMATION }
}

/**
 * 
 * @todo Creates action for reset turn on
 * @returns Action
 */
const createTurnOnReset = () => {
    return { type: MediaReducer.TURNON_RESET }
}

/**
 * 
 * @todo Creates action for reset turn off 
 * @returns Action
 */
export const createTurnOffReset = () => {
    return { type: MediaReducer.TURNOFF_RESET }
}

/**
 * 
 * @todo Creates action for listening turn on 
 * @returns Action
 */
export const createTurnOnListening = () => {
    return { type: MediaReducer.TURNON_LISTENING }
}

/**
 * 
 * @returns Dispatch for the futher async call of reducer
 */
export const createGetLocalPhotos = () => (dispatch: Dispatch<any>) => {
    dispatch(createToogleFetching())
    return getLocalMedia("photo")
        .then(data => {
            dispatch(createGetPhotosSuccess(data))
            dispatch(createToogleFetching())
        })
}

/**
 * 
 * @param data New photos to save
 * @returns Action
 */
const createGetPhotosSuccess = (data: any) => {
    return { type: MediaReducer.GET_LOCAL_PHOTOS_SUCCESS, data: data }
}

/**
 * 
 * @returns Dispatch action
 */
export const createGetLocalVideos = () => (dispatch: Dispatch<MediaReducer.IMediaAction>) => {
    return getLocalMedia("video")
        .then(r => {
            dispatch(createGetVideosSuccess(r))
        })
}

/**
 * 
 * @param d Data to save
 * @returns Action
 */
const createGetVideosSuccess = (d: SentData.LocalVideos<SentData.FileInfo>): MediaReducer.IMediaAction => {
    return { type: MediaReducer.GET_LOCAL_VIDEOS_SUCCESS, data: d }
}

/**
 * 
 * @param d Data to save
 * @returns Action
 */
const createGetVideosError = (): MediaReducer.IMediaAction => {
    return { type: MediaReducer.GET_LOCAL_VIDEOS_ERROR }
}

/**
 * @todo Creates getPhotosNum async call for the reducer
 * @returns Dispatch for the futher async call of reducer
 */
export const createCheckForNewMedia = () => (dispatch: Function, getState: Function) => {
    return getMediaNum("photo")
        .then(photosNum => {
            if (photosNum) {
                return getMediaNum("video")
                    .then(videosNum => {
                        if (videosNum) {
                            const mediaPage = getState().mediaPage
                            if (mediaPage.photos.result.length != photosNum || mediaPage.videos.result.length != videosNum) {
                                dispatch(createStartAnimation())
                                dispatch(createTurnOnReset())
                            }
                        }
                    })
                // }
            }
        })
}

/**
 * 
 * @returns Dispatch for the futher async call of reducer
 */
export const createBackupMedia = () => (dispatch: Dispatch<any>, getState: Function) => {
    dispatch(createToogleBackuping())
    return getMediaToBackup(getState().mediaPage.photos.result)
        .then((resp) => {
            return backupLocalMedia("photos", resp)
                .then(ok => {
                    if (!ok) {
                        dispatch(createBackupError())

                    } else {
                        return getMediaToBackup(getState().mediaPage.videos.result)
                            .then((resp) => {
                                return backupLocalMedia("videos", resp)
                                    .then(ok => {
                                        if (!ok) {
                                            dispatch(createBackupError())
                                        }
                                        dispatch(createToogleBackuping())
                                    })
                            })
                    }
                })
        })
}

/**
 * 
 * @returns Action
 */
const createBackupError = () => {
    return { type: MediaReducer.BACKUP_ERROR }
}


export default photoReducer