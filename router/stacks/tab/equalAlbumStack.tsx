import React from "react";
import { Image } from "react-native"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import PhotosContainer from "./../../../Components/EqualAlbum/PhotosContainer"
import VideosContainer from "./../../../Components/Videos/VideosContainer"

const Stack = createBottomTabNavigator()

export const EqualAlbumTabStack = () => {

    return (
        <Stack.Navigator initialRouteName={"Photo"}>
            <Stack.Screen options={{
                tabBarIcon: () => {
                    return (
                        <Image style={{ width: 45, height: 45 }} source={require("./../../../assets/images/photoicon.png")} />
                    )
                }
            }} name={"Photo"} component={PhotosContainer} />
            <Stack.Screen options={{
                tabBarIcon: () => {
                    return (
                        <Image style={{ width: 35, height: 35 }} source={require("./../../../assets/images/videoicon.png")} />
                    )
                }
            }} name={"Video"} component={VideosContainer} />
        </Stack.Navigator>
    )
}