//External libraries

import { Dispatch } from "react";
import { connect } from "react-redux";
import { RouteProp } from "@react-navigation/native"
import { DrawerContentComponentProps, DrawerContentOptions } from "@react-navigation/drawer"

//Types ...

import { IAuthAction } from "../../types/reducers/auth-reducer"
import { State } from "../../types/state/state"

//Components ...

import { createSignOut } from "./../../redux/auth-reducer"
import Account from "./Account"


const mapStateToProps = (state: State, navigation: DrawerContentComponentProps<DrawerContentOptions>) => {
   
    return ({
        navigation: navigation,
        authentification: state.authentification,
    })
}

const mapDispatchToProps = (dispatch: Dispatch<IAuthAction | any>) => {
    return {
        signOut: (updater: Function) => {
            dispatch(createSignOut(updater))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)