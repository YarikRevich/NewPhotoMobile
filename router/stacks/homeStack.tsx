//ExternalLibraries ...

import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

//Components ...

import PhotosContainer from "./../../Components/Photos/PhotosContainer"
import HeaderContainer from "../../Components/CustomisedHeader/Header/HeaderContainer"
import Banner from "./../../Components/CustomisedHeader/Banner/Banner"

//Types ...

import { IHomeStack } from "../../types/stacks/nav-stacks"


const Stack = createStackNavigator()


export const HomeStack = (props: IHomeStack) => {

    return (
        <Stack.Navigator initialRouteName={"Home"}>
            <Stack.Screen options={{
                headerTitle: () => (
                    <>
                        <HeaderContainer navigation={props.navigation} title={"NewPhotoMobile"} type={"drawer"} />
                        <Banner />
                    </>
                )
            }} name={"Home"} component={PhotosContainer} />
        </Stack.Navigator>
    )
}