//External libraries ...

import React, { Dispatch } from "react";
import { connect } from "react-redux"

//Reducer ...

import { createRetrieveToken, createCheckAuth } from "./../redux/auth-reducer"


//Types ...

import { State } from "../types/state/state"
import { IHeaderAction } from "../types/reducers/header-reducer"
import { IAuthAction } from "../types/reducers/auth-reducer"

//Style ...

import AppDrawer from "./nav"

const mapStateToProps = (state: State) => {
    return {
        authentification: state.authentification,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<IHeaderAction | IAuthAction | any>) => {
    return ({
        checkAuth: (updater: Function) => {
            dispatch(createCheckAuth(updater))
        },
        retrieveToken: (updater: Function) => {
            dispatch(createRetrieveToken(updater))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawer)