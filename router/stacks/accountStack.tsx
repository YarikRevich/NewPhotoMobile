//ExternalLibraries ...

import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

//Components ...

import AccountContiner from "../../Components/Account/AccountContainer"
import HeaderContainer from "../../Components/Header/HeaderContainer"

//Types ...

import { IAcountStack } from "../../types/stacks/nav-stacks"


const Stack = createStackNavigator()


export const AccountStack = (props: IAcountStack) => {

    return (
        <Stack.Navigator initialRouteName={"Account"}>
            <Stack.Screen options={{ headerTitle: () => <HeaderContainer navigation={props.navigation} title={"Account"} /> }} name={"Account"} component={AccountContiner}/>
        </Stack.Navigator>
    )
}