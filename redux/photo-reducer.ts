import { Dispatch } from "react";
import { IPhotoAction, GET_LOCAL_PHOTOS_ERROR, GET_LOCAL_PHOTOS_SUCCESS, BACKUP_SUCCESS, BACKUP_ERROR, PHOTOS_NUM } from "../types/reducers/photo-reducer"
import { PhotoPage, serviceI, State } from "../types/state/state"

import messagePublusher from "messagepublisher"

import { getLocalPhotos, getPhotosToBackup, backupLocalPhotos, getPhotosNum } from "./../Helpers/photos"

const initialState: PhotoPage = {
    result: [],
    photosNum: 0,
}

/**
 * 
 * @param state Photo state 
 * @param action Object with the information for the changing of the state
 * @returns Changed Photo state
 */
const photoReducer = (state = initialState, action: IPhotoAction) => {
    switch (action.type) {
        case PHOTOS_NUM:
            return { ...state, photosNum: action.photosNum }
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
 * @param updater Hook for the updation of the component
 * @returns Dispatch for the futher async call of reducer
 */
export const createBackupPhotos = (updater: Function) => (dispatch: Dispatch<any>, getState: Function) => {
    return getPhotosToBackup(getState().photosPage.result)
        .then((resp) => {
            return backupLocalPhotos(resp)
                .then(ok => {
                    if (!ok) {
                        dispatch(createBackupPhotosError(updater))
                    }
                    setTimeout(() => {
                        updater(true)
                    }, 3000)
                })
        })
}

const createBackupPhotosError = (updater: Function) => {
    return { type: BACKUP_ERROR, updater: updater }
}


/**
 * 
 * @param updater Hook for the updation of the component
 * @returns Dispatch for the futher async call of reducer
 */
export const createGetLocalPhotos = (updater: Function) => (dispatch: Dispatch<any>) => {
    return getLocalPhotos()
        .then(data => {
            dispatch(createGetPhotosSuccess(data, updater))
            updater(true)
        })
}

const createGetPhotosSuccess = (data: any, updater: Function) => {
    return { type: GET_LOCAL_PHOTOS_SUCCESS, data: data }
}

/**
 * @todo Creates getPhotosNum async call for the reducer
 * @param updater Hook for the updation of the component
 * @returns Dispatch for the futher async call of reducer
 */
export const createGetPhotosNum = (updater: Function) => (dispatch: Function, getState: Function) => {
    return getPhotosNum()
        .then(photosNum => {
            if (photosNum) {
                dispatch(createGetPhotosNumSuccess(updater, photosNum))
                const photosPage = getState().photosPage
                if (photosPage.result.length != photosPage.photosNum) {  
                    updater(true)
                }
            }
        })
}

const createGetPhotosNumSuccess = (updater: Function, photosNum: number) => {
    return { type: PHOTOS_NUM, updater: updater, photosNum: photosNum }
}

export default photoReducer