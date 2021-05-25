//ExternalLibraries ...

import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

//Components ...

import AlbumsContainer from "../../Components/Screens/Albums/AlbumsContainer"
import { EqualAlbumTabStack } from "./tab/equalAlbumStack"


import HeaderContainer from "../../Components/Interface/Header/HeaderContainer"
import Banner from "../../Components/Interface/Banner/Banner"

import CustomisedHeaderStyle from "./../../constants/CustomisedHeader"
import HeaderStyle from "./../../constants/CustomisedHeader"


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
                headerStyle: HeaderStyle.header,
                headerTitle: () => (
                    <>
                        <HeaderContainer navigation={props.navigation} title={"Albums"} type={"drawer"} avatar={true} />
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
                headerStyle: [CustomisedHeaderStyle.headerStackStyle, HeaderStyle.header,], headerTitleStyle: CustomisedHeaderStyle.headerStackTitleStyle
            }} name={"EqualAlbum"} component={EqualAlbumTabStack} />
        </Stack.Navigator>
    )
}