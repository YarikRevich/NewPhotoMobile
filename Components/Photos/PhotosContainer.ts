//External libraries

import { Dispatch } from "react";
import { connect } from "react-redux";

//Types ...

import { IPhotoAction } from "../../types/reducers/photo-reducer"
import { State } from "../../types/state/state"

//Components ...

import Photos from "./Photos"
import { createGetLocalPhotos, createBackupPhotos, createGetPhotosNum } from "./../../redux/photo-reducer"

/**
 * 
 * @param state Photo state
 * @returns Object with photosPage state
 */
const mapStateToProps = (state: State) => {
    return ({
        photosPage: state.photosPage,
    })
}

/**
 * 
 * @param dispatch Dispatch for the communication with photopage reducers
 * @returns Methods to communicate with reducers
 */
const mapDispatchToProps = (dispatch: Dispatch<IPhotoAction | any>) => {
    return ({
        /**
         * 
         * @param updater Hook for the futher updation
         */
        getLocalPhotos(updater: Function) {
            dispatch(createGetLocalPhotos(updater))
        },
        /**
         * 
         * @param updater Hook for the futher updation
         */
        backupPhotos(updater: Function) {
            dispatch(createBackupPhotos(updater))
        },
        /**
         * 
         * @param updater Hook for the futher updation
         */
        getPhotosNum(updater: Function) {
            dispatch(createGetPhotosNum(updater))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)