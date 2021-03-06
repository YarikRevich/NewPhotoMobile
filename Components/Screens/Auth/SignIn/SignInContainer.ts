/// <reference path="./../../../../types/reducers.ts" path="./../../../types/state.ts" />


import { Dispatch } from "react";
import { connect } from "react-redux";

import type { AuthReducer } from "../../../../types/reducers"
import type { } from "../../../../types/components"

//Components ...

import SignIn from "./SignIn"

//Reducer ...

import { createSignInOuter } from "../../../../redux/auth-reducer"

const mapDispatchToProps = (dispatch: Dispatch<AuthReducer.IAuthAction | any>) => {
    return {
        signInOuter: (d: SentData.SignIn) => {
            dispatch(createSignInOuter(d))
        }
    }
}

export default connect(null, mapDispatchToProps)(SignIn)