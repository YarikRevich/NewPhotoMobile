/// <reference path="./../types/reducers.ts" />


//External libraries ...

import { Dispatch } from "react";
import { connect } from "react-redux"

//Reducer ...

import { createCheckAuth } from "./../redux/auth-reducer"

import { HeaderReducer, AuthReducer } from "./../types/reducers"

//Style ...

import AppDrawer from "./nav"

const mapStateToProps = (state: State) => {
    return {
        authentification: state.authentification,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<HeaderReducer.IHeaderAction | AuthReducer.IAuthAction | any>) => {
    return ({
        checkAuth: () => {
            dispatch(createCheckAuth())
        },
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawer)