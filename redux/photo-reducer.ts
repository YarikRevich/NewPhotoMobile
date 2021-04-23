import { Dispatch } from "react";
import { IPhotoAction, GET_PHOTOS_SUCCESS, GET_PHOTOS_ERROR } from "../types/reducers/photo-reducer"
import { PhotoPage, serviceI } from "../types/state/state"

import messagePublusher from "messagepublisher"

import { getPhotos } from "./../Helpers/photos"

const initialState: PhotoPage = {
    result: [],
}

const photoReducer = (state = initialState, action: IPhotoAction) => {
    switch (action.type) {
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


//Craetes handler to process the query to get the photos ...

export const createGetPhotos = (updater: Function) => (dispatch: Dispatch<any>) => {
    return getPhotos()
        .then(data => {
            if (data.service.ok) {
                dispatch(createGetPhotosSuccess(data.result, updater))
            } else {
                dispatch(createGetPhotosError(data.result, updater))
            }
        })
}

const createGetPhotosSuccess = (data: any, updater: Function) => {
    return { type: GET_PHOTOS_SUCCESS, data: data, updater: updater }
}

const createGetPhotosError = (data: any, updater: Function) => {
    return { type: GET_PHOTOS_ERROR, data: data, updater: updater }
}

export default photoReducer