//External libraries

import { Dispatch } from "react";
import { connect } from "react-redux";

//Types ...

import { IPhotoAction } from "../../types/reducers/photo-reducer"
import { State } from "../../types/state/state"

//Components ...

import Photos from "./Photos"
import { createGetPhotos } from "./../../redux/photo-reducer"

const mapStateToProps = (state: State) => {
    return ({
        photoPage: state.photoPage,
    })
}

const mapDispatchToProps = (dispatch: Dispatch<IPhotoAction | any>) => {
    return ({
        getPhotos(updater: Function) {
            dispatch(createGetPhotos(updater))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)