//ExternalLibraries ...

import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

//Components ...

import HeaderContainer from "./../../Components/Header/HeaderContainer"

//Types ...

import { IAuthStack } from "../../types/stacks/nav-stacks"

import SignInContainer from "./../../Components/Auth/SignIn/SignInContainer";


const Stack = createStackNavigator()


export const AuthStack = (props: IAuthStack) => {

    return (
        <Stack.Navigator initialRouteName={"SignIn"}>
            <Stack.Screen options={{ headerTitle: () => <HeaderContainer navigation={props.navigation} title={"SignIn"}/> }} name={"SignIn"} component={SignInContainer} />
        </Stack.Navigator>
    )
}