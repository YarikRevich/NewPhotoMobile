//ExternalLibraries ...

import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

//Components ...

import AlbumsContainer from "./../../Components/Albums/AlbumsContainer"
import EqualAlbumContainer from "./../../Components/EqualAlbum/EqualAlbumContainer"


import HeaderContainer from "../../Components/CustomisedHeader/Header/HeaderContainer"
import Banner from "./../../Components/CustomisedHeader/Banner/Banner"

import CustomisedHeaderStyle from "./../../constants/CustomisedHeader"


const Stack = createStackNavigator()


/**
 * 
 * @param props Drawer props
 * @returns  Albums stack navigator
 */
export const AlbumsStack = (props: Stack) => {

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
            <Stack.Screen options={{
                headerTitle: () => (
                    <>
                        <HeaderContainer navigation={props.navigation} title={"EqualAlbum"} type={"stack"} />
                        <Banner />
                    </>
                ),
                headerStyle: CustomisedHeaderStyle.headerStackStyle, headerTitleStyle: CustomisedHeaderStyle.headerStackTitleStyle 
            }} name={"EqualAlbum"} component={EqualAlbumContainer} />
        </Stack.Navigator>
    )
}