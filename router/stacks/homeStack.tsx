//ExternalLibraries ...

import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//Components ...

import PhotosContainer from "../../Components/Screens/Home/Photos/PhotosContainer"
import HeaderContainer from "../../Components/Interface/Header/HeaderContainer"
import Banner from "../../Components/Interface/Banner/Banner"
import HeaderStyle from "./../../constants/CustomisedHeader"

import { HomeTabStack } from "./tab/homeStack"

const Stack = createStackNavigator()


export const HomeStack = (props: Stack) => {

    return (
        <Stack.Navigator initialRouteName={"Home"}>
            <Stack.Screen options={{
                headerStyle: HeaderStyle.header,
                headerTitle: () => (
                    <>
                        <HeaderContainer navigation={props.navigation} title={"NewPhotoMobile"} type={"drawer"} avatar={true} />
                        <Banner />
                    </>
                )
            }} name={"Home"} component={HomeTabStack} />
        </Stack.Navigator>
    )
}