/// <reference path="./../../types/reducers.ts" />


//External libraries

import { Dispatch } from "react";
import { connect } from "react-redux";


//Components ...

import Photos from "./Photos"
import { createGetLocalPhotos, createBackupPhotos, createCheckForNewPhotos, createTurnOffReset, createStartAnimation, createStopAnimation, createTurnOnListening } from "./../../redux/photo-reducer"

import type { PhotoReducer } from "./../../types/reducers"

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
const mapDispatchToProps = (dispatch: Dispatch<PhotoReducer.IPhotoAction | any>) => {
    return ({

        /**
         * 
         * @param updater Hook for the futher updation
         */
        getLocalPhotos() {
            dispatch(createGetLocalPhotos())
        },

        /**
         * 
         * @param updater Hook for the futher updation
         */
        backupPhotos() {
            dispatch(createBackupPhotos())
        },

        /**
         * 
         * @param updater Hook for the futher updation
         */
        checkForNewPhotos() {
            dispatch(createCheckForNewPhotos())
        },

        /**
         * @todo Starts animation process
         */
        startAnimation() {
            dispatch(createStartAnimation())
        },

        /**
         * @todo Stops animation process
         */
        stopAnimation() {
            dispatch(createStopAnimation())
        },

        /**
        * @todo Turnoff process
        */
        turnOffReset() {
            dispatch(createTurnOffReset())
        },

        turnOnListening() {
            dispatch(createTurnOnListening())
        }

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)