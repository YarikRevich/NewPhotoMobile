/// <reference path="./../../../../types/reducers.ts" />

import { Dispatch } from "react"
import { connect } from "react-redux"
import type { ParamListBase } from "@react-navigation/native"
import type { StackScreenProps } from "@react-navigation/stack"

import EqualAlbum from "./EqualAlbum"
import { createGetEqualAlbum, createTurnOffReset, createGetDetailedAlbumMediaNum, createDeleteAlbum } from "../../../../redux/equalalbum-reducer"

import type { EqualAlbumReducer } from "../../../../types/reducers"

/**
 * 
 * @param state State
 * @returns EqualAlbumPage state
 */
const mapStateToProps = (state: State, navigator: StackScreenProps<ParamListBase>) => {
    return {
        equalAlbumPage: state.equalAlbumPage,
        navigator: navigator
    }
}

/**
 * 
 * @param dispatch Dispatch
 * @returns Handlers for dispatch calling
 */
const mapDispatchToProps = (dispatch: Dispatch<EqualAlbumReducer.IEqualAlbumAction | any>) => {
    return {
        getEqualAlbum: (albumName: string, offset: number, page: number) => {
            console.log(page, offset)
            dispatch(createGetEqualAlbum(albumName, offset, page))
        },
        getDetailedAlbumMediaNum: (albumName: string) => {
            dispatch(createGetDetailedAlbumMediaNum(albumName))
        },
        turnOffReset: () => {
            dispatch(createTurnOffReset())
        },
        deleteAlbum: (albumName: string) => {
            dispatch(createDeleteAlbum(albumName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EqualAlbum)

