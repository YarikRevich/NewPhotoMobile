/// <reference path="./../../../types/reducers.ts" path="./../../../types/state.ts" />


import { Dispatch } from "react";
import { connect } from "react-redux";

import type { AuthReducer } from "./../../../types/reducers"
import type {  } from "./../../../types/components"

//Components ...

import SignIn from "./SignIn"

//Reducer ...

import { createSignIn } from "./../../../redux/auth-reducer"

const mapStateToProps = (state: State) => {
    return {
        // authentification: state.authentification
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AuthReducer.IAuthAction | any>) => {
    return {
        signIn: (d: SentData.SignIn) => {
            dispatch(createSignIn(d))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)