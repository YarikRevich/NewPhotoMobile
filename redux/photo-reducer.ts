import { Dispatch } from "react";
import {
    IPhotoAction,
    GET_LOCAL_PHOTOS_ERROR,
    GET_LOCAL_PHOTOS_SUCCESS,
    TOOGLE_FETCHING,
    TOOGLE_BACKUPING,
    STOP_ANIMATION,
    START_ANIMATION,
    TURNON_RESET,
    TURNOFF_RESET,
    TURNON_LISTENING,
    BACKUP_ERROR,
    PHOTOS_NUM,
} from "../types/reducers/photo-reducer"
import { PhotoPage } from "../types/state/state"

import messagePublusher from "messagepublisher"

import { getLocalPhotos, getPhotosToBackup, backupLocalPhotos, getPhotosNum } from "./../Helpers/photos"

const initialState: PhotoPage = {
    result: [],
    isFetching: false,
    isBackuping: false,
    isAnimating: true,
    isListening: false,
    isReset: false,
}

/**
 * 
 * @param state Photo state 
 * @param action Object with the information for the changing of the state
 * @returns Changed Photo state
 */
const photoReducer = (state = initialState, action: IPhotoAction) => {
    switch (action.type) {
        case TOOGLE_FETCHING:
            return { ...state, isFetching: state.isFetching ? false : true }
        case TOOGLE_BACKUPING:
            return { ...state, isBackuping: state.isBackuping ? false : true }
        case STOP_ANIMATION:
            return { ...state, isAnimating: false, isListening: false }
        case START_ANIMATION:
            return { ...state, isAnimating: true, isListening: true }
        case TURNON_RESET:
            return { ...state, isReset: true }
        case TURNOFF_RESET:
            return { ...state, isReset: false }
        case TURNON_LISTENING:
            return { ...state, isListening: true }
        case BACKUP_ERROR:
            messagePublusher.add("An error happened during the backuping")
            break
        case GET_LOCAL_PHOTOS_SUCCESS:
            if (action.data) {
                return { ...state, result: action.data, photosNum: action.data.length }
            }
            return { ...state }
        case GET_LOCAL_PHOTOS_ERROR:
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
    return { type: TOOGLE_FETCHING }
}

/**
 * 
 * @todo Creates action for backup toogling 
 * @returns Action
 */
const createToogleBackuping = () => {
    return { type: TOOGLE_BACKUPING }
}

/**
 * 
 * @todo Creates action for animation start
 * @returns Action
 */
export const createStartAnimation = () => {
    return { type: START_ANIMATION }
}

/**
 * 
 * @todo Creates action for animation stop
 * @returns Action
 */
export const createStopAnimation = () => {
    return { type: STOP_ANIMATION }
}

/**
 * 
 * @todo Creates action for reset turn on
 * @returns Action
 */
const createTurnOnReset = () => {
    return { type: TURNON_RESET }
}

/**
 * 
 * @todo Creates action for reset turn off 
 * @returns Action
 */
export const createTurnOffReset = () => {
    return { type: TURNOFF_RESET }
}

/**
 * 
 * @todo Creates action for listening turn on 
 * @returns Action
 */
export const createTurnOnListening = () => {
    return { type: TURNON_LISTENING }
}

/**
 * 
 * @param updater Hook for the updation of the component
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
    return { type: BACKUP_ERROR }
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
    return { type: GET_LOCAL_PHOTOS_SUCCESS, data: data }
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

/**
 * 
 * @param updater Hook for the updation of the component
 * @param photosNum Num of the photos;
 * @returns Action
 */
const createGetPhotosNumSuccess = (photosNum: number) => {
    return { type: PHOTOS_NUM, photosNum: photosNum }
}

export default photoReducer