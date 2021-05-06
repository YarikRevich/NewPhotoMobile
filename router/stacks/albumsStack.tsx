//ExternalLibraries ...

import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

//Components ...

import AlbumsContainer from "./../../Components/Albums/AlbumsContainer"
import HeaderContainer from "../../Components/CustomisedHeader/Header/HeaderContainer"
import Banner from "./../../Components/CustomisedHeader/Banner/Banner"

//Types ...

import { IAlbumsStack } from "../../types/stacks/nav-stacks"


const Stack = createStackNavigator()


/**
 * 
 * @param props Drawer props
 * @returns  Albums stack navigator
 */
export const AlbumsStack = (props: IAlbumsStack) => {

    return (
        <Stack.Navigator initialRouteName={"Albums"}>
            <Stack.Screen options={{
                headerTitle: () => (
                    <>
                        <HeaderContainer navigation={props.navigation} title={"Albums"} type={"drawer"} />
                        <Banner />
                    </>
                )
            }} name={"Albums"} component={AlbumsContainer} />
        </Stack.Navigator>
    )
}