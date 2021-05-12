import { Dispatch } from "react";
import { connect } from "react-redux";

import Header from "./Header"
import { createCleanEqualAlbum } from "./../../../redux/equalalbum-reducer"

import type { EqualAlbumReducer } from "./../../../types/reducers"

const mapStateToProps = (state: State) => {
    return ({
        header: state.header,
        authentification: state.authentification,
    })
}


export default connect(mapStateToProps, {})(Header)