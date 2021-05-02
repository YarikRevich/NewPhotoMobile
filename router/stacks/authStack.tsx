//ExternalLibraries ...

import React from "react";
import { Text } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

//Components ...

import HeaderContainer from "../../Components/CustomisedHeader/Header/HeaderContainer"
import Banner from "./../../Components/CustomisedHeader/Banner/Banner"

//Types ...

import { IAuthStack } from "../../types/stacks/nav-stacks"

import SignInContainer from "./../../Components/Auth/SignIn/SignInContainer";
import SignUpContainer from "./../../Components/Auth/SignUp/SignUpContainer";


const Stack = createStackNavigator()

//


export const AuthStack = (props: IAuthStack) => {

    return (
        <Stack.Navigator initialRouteName={"SignIn"}>
            <Stack.Screen options={{
                headerTitle: () => (
                    <>
                        <HeaderContainer navigation={props.navigation} title={"SignIn"} type={"drawer"} />
                        <Banner />
                    </>
                )
            }} name={"SignIn"} component={SignInContainer} />
            <Stack.Screen options={{
                headerTitle: () => (
                    <>
                        <HeaderContainer navigation={props.navigation} title={"SignUp"} type={"stack"} />
                        <Banner />
                    </>
                ), headerStyle: { backgroundColor: "aliceblue", height: 80 }, headerTitleStyle: { fontSize: 20, fontWeight: "700", marginTop: 5 }
            }} name={"SignUp"} component={SignUpContainer} />
        </Stack.Navigator>
    )
}