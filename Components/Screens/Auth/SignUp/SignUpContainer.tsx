import { Dispatch } from "react";
import { connect } from "react-redux";

//Components ...

import SignUp from "./SignUp"

import type { AuthReducer } from "../../../../types/reducers"

//Reducer ...

import { createSignUp } from "../../../../redux/auth-reducer"
import messagePublisher from "messagepublisher";

const mapDispatchToProps = (dispatch: Dispatch<AuthReducer.IAuthAction | any>) => {
    return {
        signUp: (d: SentData.SignUp, updater: Function) => {
            if (d.data.login.length == 0) {
                messagePublisher.add("Login is required!")
                return
            }
            if (d.data.firstname.length == 0) {
                messagePublisher.add("Firstname is required!")
                return
            }
            if (d.data.secondname.length == 0) {
                messagePublisher.add("Secondname is required!")
                return
            }
            if (d.data.password1.length == 0) {
                messagePublisher.add("Password is required!")
                return
            }
            if (d.data.password2.length == 0) {
                messagePublisher.add("Password confirmation is required!")
                return
            }
            if (d.data.password1 == d.data.password2) {
                dispatch(createSignUp(d))
            } else {
                messagePublisher.add("Your passwords mismatched!")
            }
        },
    }
}

export default connect(null, mapDispatchToProps)(SignUp)