/// <reference path="../types/reducers.ts" />

import { Dispatch } from "react";

import messagePublusher from "messagepublisher"

import { getLocalPhotos, getPhotosToBackup, backupLocalPhotos, getPhotosNum } from "./../Helpers/photos"

import { PhotoReducer } from "./../types/reducers"

const initialState = {
    result: [],
    isFetching: false,
    isBackuping: false,
    isAnimating: true,
    isListening: false,
    isReset: false,
}

type initialStateType = typeof initialState

/**
 * 
 * @param state Photo state 
 * @param action Object with the information for the changing of the state
 * @returns Changed Photo state
 */
const photoReducer = (state: initialStateType = initialState, action: PhotoReducer.IPhotoAction) => {
    switch (action.type) {
        case PhotoReducer.TOOGLE_FETCHING:
            return { ...state, isFetching: state.isFetching ? false : true }
        case PhotoReducer.TOOGLE_BACKUPING:
            return { ...state, isBackuping: state.isBackuping ? false : true }
        case PhotoReducer.STOP_ANIMATION:
            return { ...state, isAnimating: false, isListening: false }
        case PhotoReducer.START_ANIMATION:
            return { ...state, isAnimating: true, isListening: true }
        case PhotoReducer.TURNON_RESET:
            return { ...state, isReset: true }
        case PhotoReducer.TURNOFF_RESET:
            return { ...state, isReset: false }
        case PhotoReducer.TURNON_LISTENING:
            return { ...state, isListening: true }
        case PhotoReducer.BACKUP_ERROR:
            messagePublusher.add("An error happened during the backuping")
            break
        case PhotoReducer.GET_LOCAL_PHOTOS_SUCCESS:
            if (action.data) {
                return { ...state, result: action.data, photosNum: action.data.length }
            }
            return { ...state }
        case PhotoReducer.GET_LOCAL_PHOTOS_ERROR:
            messagePublusher.add("Something went wrong!")
    }
    return state
}

/**
 * 
 * @todo Creates action for fetch toogling 
 * @returns Action
 */
const createToogleFetching = () => {
    return { type: PhotoReducer.TOOGLE_FETCHING }
}

/**
 * 
 * @todo Creates action for backup toogling 
 * @returns Action
 */
const createToogleBackuping = () => {
    return { type: PhotoReducer.TOOGLE_BACKUPING }
}

/**
 * 
 * @todo Creates action for animation start
 * @returns Action
 */
export const createStartAnimation = () => {
    return { type: PhotoReducer.START_ANIMATION }
}

/**
 * 
 * @todo Creates action for animation stop
 * @returns Action
 */
export const createStopAnimation = () => {
    return { type: PhotoReducer.STOP_ANIMATION }
}

/**
 * 
 * @todo Creates action for reset turn on
 * @returns Action
 */
const createTurnOnReset = () => {
    return { type: PhotoReducer.TURNON_RESET }
}

/**
 * 
 * @todo Creates action for reset turn off 
 * @returns Action
 */
export const createTurnOffReset = () => {
    return { type: PhotoReducer.TURNOFF_RESET }
}

/**
 * 
 * @todo Creates action for listening turn on 
 * @returns Action
 */
export const createTurnOnListening = () => {
    return { type: PhotoReducer.TURNON_LISTENING }
}

/**
 * 
 * @returns Dispatch for the futher async call of reducer
 */
export const createBackupPhotos = () => (dispatch: Dispatch<any>, getState: Function) => {
    dispatch(createToogleBackuping())
    return getPhotosToBackup(getState().photosPage.result)
        .then((resp) => {
            return backupLocalPhotos(resp)
                .then(ok => {
                    if (!ok) {
                        dispatch(createBackupPhotosError())
                    }
                    dispatch(createToogleBackuping())
                })
        })
}


/**
 * 
 * @param updater Hook for the updation of the component
 * @returns Action
 */
const createBackupPhotosError = () => {
    return { type: PhotoReducer.BACKUP_ERROR }
}

/**
 * 
 * @param updater Hook for the updation of the component
 * @returns Dispatch for the futher async call of reducer
 */
export const createGetLocalPhotos = () => (dispatch: Dispatch<any>) => {
    dispatch(createToogleFetching())
    return getLocalPhotos()
        .then(data => {
            dispatch(createGetPhotosSuccess(data))
            dispatch(createToogleFetching())
        })
}

/**
 * 
 * @param data New photos to save
 * @param updater Hook for the updation of the component
 * @returns Action
 */
const createGetPhotosSuccess = (data: any) => {
    return { type: PhotoReducer.GET_LOCAL_PHOTOS_SUCCESS, data: data }
}

/**
 * @todo Creates getPhotosNum async call for the reducer
 * @param updater Hook for the updation of the component
 * @returns Dispatch for the futher async call of reducer
 */
export const createCheckForNewPhotos = () => (dispatch: Function, getState: Function) => {
    return getPhotosNum()
        .then(photosNum => {
            if (photosNum) {
                const photosPage = getState().photosPage
                if (photosPage.result.length != photosNum) {
                    dispatch(createStartAnimation())
                    dispatch(createTurnOnReset())
                }
            }
        })
}

export default photoReducer