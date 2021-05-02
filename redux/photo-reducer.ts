import { Dispatch } from "react";
import { IPhotoAction, GET_LOCAL_PHOTOS_ERROR, GET_LOCAL_PHOTOS_SUCCESS, BACKUP_SUCCESS, BACKUP_ERROR } from "../types/reducers/photo-reducer"
import { PhotoPage, serviceI } from "../types/state/state"

import messagePublusher from "messagepublisher"

import { getLocalPhotos } from "./../Helpers/photos"

const initialState: PhotoPage = {
    result: [],
}

const photoReducer = (state = initialState, action: IPhotoAction) => {
    switch (action.type) {
        case BACKUP_SUCCESS:
            if (action.data) {
                return { ...state }
            }
        case BACKUP_ERROR:
            messagePublusher.add("An error happened during the backuping")
            if (action.data) {
                return { ...state }
            }
        case GET_LOCAL_PHOTOS_SUCCESS:
            if (action.data) {
                return { ...state, result: action.data }
            }
            return { ...state }
        case GET_LOCAL_PHOTOS_ERROR:
            messagePublusher.add("Something went wrong!")
    }
    return state
}

// //Creates handler to process the query to backup the photos ...

export const createBackupPhotos = (updater: Function) => (dispatch: Dispatch<any>) => {
    // backupPhotos()
    // .then((resp) => {
    //     dispatch(createBackupPhotosSuccess(updater))
    // })

}

const createBackupPhotosSuccess = (updater: Function) => {
    return {type: BACKUP_SUCCESS, updater: updater}
}


//Creates handler to process the query to get the photos ...

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

export default photoReducer