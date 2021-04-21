//ExternalLibraries ...

import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

//Components ...

import Photos from "./../../Components/Photos/Photos"
import HeaderContainer from "./../../Components/Header/HeaderContainer"

//Types ...

import { IHomeStack } from "../../types/stacks/nav-stacks"


const Stack = createStackNavigator()


export const HomeStack = (props: IHomeStack) => {

    return (
        <Stack.Navigator initialRouteName={"Home"}>
            <Stack.Screen options={{ headerTitle: () => <HeaderContainer navigation={props.navigation} title={"NewPhotoMobile"} /> }} name={"Home"} component={Photos} />
        </Stack.Navigator>
    )
}