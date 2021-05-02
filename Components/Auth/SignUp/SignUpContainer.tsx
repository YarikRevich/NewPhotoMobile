//External libraries

import { Dispatch } from "react";
import { connect } from "react-redux";

//Types ...

import { IAuthAction } from "./../../../types/reducers/auth-reducer"
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
        signUp: (d: { login: string; firstname: string; secondname: string; password1: string; password2: string }, updater: Function) => {
            if (d.login.length == 0){
                messagePublisher.add("Login is required!")
                return
            }
            if (d.firstname.length == 0){
                messagePublisher.add("Firstname is required!")
                return
            }
            if (d.secondname.length == 0){
                messagePublisher.add("Secondname is required!")
                return
            }
            if (d.password1.length == 0){
                messagePublisher.add("Password is required!")
                return
            } 
            if (d.password2.length == 0){
                messagePublisher.add("Password confirmation is required!")
                return
            } 
            if (d.password1 == d.password2) {
                dispatch(createSignUp(d, updater))
            }else{
                messagePublisher.add("Your passwords mismatched!")
            }
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)