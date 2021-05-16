/// <reference path="./../../types/reducers.ts" />


//External libraries

import { Dispatch } from "react";
import { connect } from "react-redux";


//Components ...

import Photos from "./Photos"
import { createGetLocalPhotos, createGetLocalVideos, createBackupMedia, createCheckForNewMedia, createTurnOffReset, createStartAnimation, createStopAnimation, createTurnOnListening } from "./../../redux/media-reducer"

import type { MediaReducer } from "./../../types/reducers"

/**
 * 
 * @param state Photo state
 * @returns Object with photosPage state
 */
const mapStateToProps = (state: State) => {
    return ({
        mediaPage: state.mediaPage,
    })
}

/**
 * 
 * @param dispatch Dispatch for the communication with mediapage reducers
 * @returns Methods to communicate with reducers
 */
const mapDispatchToProps = (dispatch: Dispatch<MediaReducer.IMediaAction | any>) => {
    return ({

        /**
         * 
         * @todo Gets local photos
         */
        getLocalPhotos() {
            dispatch(createGetLocalPhotos())
        },

        /**
        * 
        * @todo Gets local videos
        */
        getLocalVideos: () => {
            dispatch(createGetLocalVideos())
        },

        /**
         * 
         * @todo Backups local photos 
         */
        backupMedia() {
            dispatch(createBackupMedia())
        },

        /**
         * 
         * @param updater Hook for the futher updation
         */
        checkForNewMedia() {
            dispatch(createCheckForNewMedia())
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