//External libraries

import { Dispatch } from "react";
import { connect } from "react-redux";

//Types ...

import { IAuthAction } from "./../../../types/reducers/auth-reducer"
import { State } from "./../../../types/state/state"

//Components ...

import SignUp from "./SignUp"

//Reducer ...

import { createSignIn } from "./../../../redux/auth-reducer"

const mapStateToProps = (state: State) => {
    return {}
}

const mapDispatchToProps = (dispatch: Dispatch<IAuthAction | any>) => {
    return {
        signIn: (d: { login: string, password: string }, updater: Function) => {
            dispatch(createSignIn(d, updater))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)