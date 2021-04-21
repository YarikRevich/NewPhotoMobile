//ExternalLibraries ...

import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

//Components ...

import About from "./../../Components/About/About"
import HeaderContainer from "./../../Components/Header/HeaderContainer"

//Types ...

import { IAboutStack } from "../../types/stacks/nav-stacks"


const Stack = createStackNavigator()


export const AboutStack = (props: IAboutStack) => {

    return (
        <Stack.Navigator initialRouteName={"About"}>
            <Stack.Screen options={{ headerTitle: () => <HeaderContainer navigation={props.navigation} title={"About"}/> }} name={"About"} component={About} />
        </Stack.Navigator>
    )
}
