import React from "react";
import { Image } from "react-native"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import EqualAlbumContainer from "./../../../Components/EqualAlbum/EqualAlbumContainer"
import { StackScreenProps } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/routers";
// import VideosContainer from "./../../../Components/Videos/VideosContainer"

const Stack = createBottomTabNavigator()

export const EqualAlbumTabStack = (props: StackScreenProps<ParamListBase>) => {

    if (!props.route.params) return <></>

    const params = Object.assign(props.route.params)
    const albumName = params["albumName"]

    return (
        <Stack.Navigator initialRouteName={"Photo"}>
            <Stack.Screen options={{
                tabBarIcon: () => {
                    return (
                        <Image style={{ width: 45, height: 45 }} source={require("./../../../assets/images/photoicon.png")} />
                    )
                }
            }} initialParams={{ albumName, albumViewType: "Photo" }} name={"Photo"} component={EqualAlbumContainer} />
            <Stack.Screen options={{
                tabBarIcon: () => {
                    return (
                        <Image style={{ width: 35, height: 35 }} source={require("./../../../assets/images/videoicon.png")} />
                    )
                }
            }} initialParams={{ albumName, albumViewType: "Video" }} name={"Video"} component={EqualAlbumContainer} />
        </Stack.Navigator>
    )
}