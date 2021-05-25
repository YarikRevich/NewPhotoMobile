//ExternalLibraries ...
import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

//Components ...
import HeaderContainer from "../../Components/Interface/Header/HeaderContainer"
import Banner from "../../Components/Interface/Banner/Banner"


import SignInContainer from "../../Components/Screens/Auth/SignIn/SignInContainer";
import SignUpContainer from "../../Components/Screens/Auth/SignUp/SignUpContainer";

import CustomisedHeaderStyle from "./../../constants/CustomisedHeader"
import HeaderStyle from "./../../constants/CustomisedHeader"

const Stack = createStackNavigator()

export const AuthStack = (props: Stack) => {

    return (
        <Stack.Navigator initialRouteName={"SignIn"}>
            <Stack.Screen options={{
                headerStyle: HeaderStyle.header,
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
                ), headerStyle: [CustomisedHeaderStyle.headerStackStyle, HeaderStyle.header], headerTitleStyle: CustomisedHeaderStyle.headerStackTitleStyle 
            }} name={"SignUp"} component={SignUpContainer} />
        </Stack.Navigator>
    )
}