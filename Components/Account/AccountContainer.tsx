/// <reference path="./../../types/reducers.ts" />

//External libraries

import { Dispatch } from "react";
import { connect } from "react-redux";
import { DrawerContentComponentProps, DrawerContentOptions } from "@react-navigation/drawer"

import type { AuthReducer } from "./../../types/reducers"

//Components ...

import { createSignOut } from "./../../redux/auth-reducer"
import { createGetAccountInfo, createSetAvatar, createGetAvatar } from "./../../redux/account-reducer"
import Account from "./Account"


const mapStateToProps = (state: State, navigation: DrawerContentComponentProps<DrawerContentOptions>) => {

    return ({
        navigation: navigation,
        authentification: state.authentification,
        accountPage: state.accountPage
    })
}

const mapDispatchToProps = (dispatch: Dispatch<AuthReducer.IAuthAction | any>) => {
    return {
        signOut: () => {
            dispatch(createSignOut())
        },
        getAccountInfo: () => {
            dispatch(createGetAccountInfo())
        },
        setAvatar: () => {
            dispatch(createSetAvatar())
        },
        getAvatar: () => {
            dispatch(createGetAvatar())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)