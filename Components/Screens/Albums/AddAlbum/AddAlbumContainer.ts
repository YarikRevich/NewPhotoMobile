import { connect } from "react-redux";

import AddAlbum from "./AddAlbum"

import { Dispatch } from "react";
import { AlbumsReducer } from "../../../../types/reducers";

import {createAddAlbum } from "../../../../redux/albums-reducer"

const mapDispatchToProps = (dispatch: Dispatch<AlbumsReducer.IAlbumsAction | any>) => {
    return {
        addAlbum: (albumName: string) => {
            dispatch(createAddAlbum(albumName))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddAlbum)