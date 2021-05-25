/// <reference path="./../types/reducers.ts" />


//External libraries ...

import { Dispatch } from "react";
import { connect } from "react-redux"
import { compose } from "redux"

//HOC

import withListeners from "./../HOC/WithListeners"

//Reducer ...

import { createCheckAuth } from "./../redux/auth-reducer"

import { HeaderReducer, AuthReducer } from "./../types/reducers"
import { createGetAvatar } from "./../redux/account-reducer"

//Style ...

import AppDrawer from "./nav"

const mapStateToProps = (state: State) => {
    return {
        authentification: state.authentification,
        system: state.system
    }
}

const mapDispatchToProps = (dispatch: Dispatch<HeaderReducer.IHeaderAction | AuthReducer.IAuthAction | any>) => {
    return ({
        checkAuth: () => {
            dispatch(createCheckAuth())
        },
        getAvatar: () => {
            dispatch(createGetAvatar())
        },
    })
}

export default withListeners(connect(mapStateToProps, mapDispatchToProps)(AppDrawer))