import { Dispatch } from "react";
import { connect } from "react-redux";

import AddPhotos from "./AddPhotos"

import { createAddPhotos } from "./../../../redux/equalalbum-reducer"

import type { EqualAlbumReducer } from "./../../../types/reducers"

const mapDispatchToProps = (dispatch: Dispatch<EqualAlbumReducer.IEqualAlbumAction | any>) => {
    return {
        addPhotos: (albumName: string, data: SentData.LocalPhotos<SentData.FileInfo>, toDelete: string[]) => {
            dispatch(createAddPhotos(albumName, data, toDelete))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddPhotos)