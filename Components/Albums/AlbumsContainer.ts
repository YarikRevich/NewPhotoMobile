/// <reference path="./../../types/reducers.ts" />

import { Dispatch } from "react";
import { connect } from "react-redux"

import type { ParamListBase } from "@react-navigation/native"
import type { StackScreenProps } from "@react-navigation/stack"

import Albums from "./Albums"
import { createGetAlbums } from "../../redux/albums-reducer";

import type { AlbumsReducer } from "./../../types/reducers"

const mapStateToProps = (state: State, navigator: StackScreenProps<ParamListBase>) => {
    return {
        albumsPage: state.albumsPage,
        navigator: navigator,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AlbumsReducer.IAlbumsAction | any>) => {
    return {
        getAlbums: () => {
            dispatch(createGetAlbums())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Albums)