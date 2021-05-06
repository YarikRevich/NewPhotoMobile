//External libraries

import { Dispatch } from "react";
import { connect } from "react-redux";

//Types ...

import { IPhotoAction } from "../../types/reducers/photo-reducer"
import { State } from "../../types/state/state"

//Components ...

import Photos from "./Photos"
import { createGetLocalPhotos, createBackupPhotos, createCheckForNewPhotos, createTurnOffReset, createStartAnimation, createStopAnimation, createTurnOnListening } from "./../../redux/photo-reducer"

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

        turnOnListening(){
            dispatch(createTurnOnListening())
        }

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)