//External libraries

import { Dispatch } from "react";
import { connect } from "react-redux";

//Types ...

import { IAuthAction, SignInData } from "./../../../types/reducers/auth-reducer"
import { State } from "./../../../types/state/state"

//Components ...

import SignIn from "./SignIn"

//Reducer ...

import { createSignIn } from "./../../../redux/auth-reducer"

const mapStateToProps = (state: State) => {
    return {
        // authentification: state.authentification
    }
}

const mapDispatchToProps = (dispatch: Dispatch<IAuthAction | any>) => {
    return {
        signIn: (d: SignInData, updater: Function) => {
            dispatch(createSignIn(d, updater))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)