import { Dispatch } from "react";
import { IPhotoAction, GET_PHOTOS_SUCCESS, GET_PHOTOS_ERROR, BACKUP_SUCCESS, BACKUP_ERROR } from "../types/reducers/photo-reducer"
import { PhotoPage, serviceI } from "../types/state/state"

import messagePublusher from "messagepublisher"

import { getLocalPhotos } from "./../Helpers/photos"

const initialState: PhotoPage = {
    result: [],
}

const photoReducer = (state = initialState, action: IPhotoAction) => {
    switch (action.type) {
        case BACKUP_SUCCESS:
            setTimeout(() => {
                if (action.updater) {
                    action.updater(true)
                }
            }, 5);
            if (action.data) {
                return { ...state }
            }
        case BACKUP_ERROR:
            setTimeout(() => {
                if (action.updater) {
                    action.updater(true)
                }
            }, 5);
            messagePublusher.add("An error happened during the backuping")
            if (action.data) {
                return { ...state }
            }
        case GET_PHOTOS_SUCCESS:
            setTimeout(() => {
                if (action.updater) {
                    action.updater(true)
                }
            }, 5)
            if (action.data) {
                return { ...state, result: action.data }
            }
            return { ...state }
        case GET_PHOTOS_ERROR:
            setTimeout(() => {
                if (action.updater) {
                    action.updater(true)
                }
            }, 5)
            messagePublusher.add("Something went wrong!")
            return { ...state }
    }
    return state
}

// //Craetes handler to process the query to backup the photos ...

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
        })
}

const createGetPhotosSuccess = (data: any, updater: Function) => {
    return { type: GET_PHOTOS_SUCCESS, data: data, updater: updater }
}

export default photoReducer