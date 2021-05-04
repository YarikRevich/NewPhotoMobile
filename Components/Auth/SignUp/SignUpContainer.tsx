//External libraries

import { Dispatch } from "react";
import { connect } from "react-redux";

//Types ...

import { IAuthAction, SignUpData } from "./../../../types/reducers/auth-reducer"
import { State } from "./../../../types/state/state"

//Components ...

import SignUp from "./SignUp"

//Reducer ...

import { createSignUp } from "./../../../redux/auth-reducer"
import messagePublisher from "messagepublisher";

const mapStateToProps = (state: State) => {
    return {}
}

const mapDispatchToProps = (dispatch: Dispatch<IAuthAction | any>) => {
    return {
        signUp: (d: SignUpData, updater: Function) => {
            if (d.data.login.length == 0){
                messagePublisher.add("Login is required!")
                return
            }
            if (d.data.firstname.length == 0){
                messagePublisher.add("Firstname is required!")
                return
            }
            if (d.data.secondname.length == 0){
                messagePublisher.add("Secondname is required!")
                return
            }
            if (d.data.password1.length == 0){
                messagePublisher.add("Password is required!")
                return
            } 
            if (d.data.password2.length == 0){
                messagePublisher.add("Password confirmation is required!")
                return
            } 
            if (d.data.password1 == d.data.password2) {
                dispatch(createSignUp(d, updater))
            }else{
                messagePublisher.add("Your passwords mismatched!")
            }
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)