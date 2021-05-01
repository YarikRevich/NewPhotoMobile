//External libraries

import { Dispatch } from "react";
import { connect } from "react-redux";

//Types ...

import { IPhotoAction } from "../../types/reducers/photo-reducer"
import { State } from "../../types/state/state"

//Components ...

import Photos from "./Photos"
import { createGetLocalPhotos, createBackupPhotos } from "./../../redux/photo-reducer"

const mapStateToProps = (state: State) => {
    return ({
        photosPage: state.photosPage,
    })
}

const mapDispatchToProps = (dispatch: Dispatch<IPhotoAction | any>) => {
    return ({
        getLocalPhotos(updater: Function) {
            dispatch(createGetLocalPhotos(updater))
        },
        backupPhotos(updater: Function) {
            dispatch(createBackupPhotos(updater))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)