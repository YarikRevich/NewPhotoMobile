//External libraries ...

import React, { useEffect, useState } from "react";
import { View, Button, Text } from "react-native"
import { NavigationContainer, NavigationContainerRef, useRoute } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions } from "@react-navigation/drawer"
import { TouchableOpacity } from "react-native-gesture-handler";

//Types ...

import { AppDrawerType } from "./../types/components/Nav"

//Style constants ...

import NavStyle from "./../constants/Nav"

//Stacks ...

import { HomeStack } from "./stacks/homeStack"
import { AboutStack } from "./stacks/aboutStack"
import { AccountStack } from "./stacks/accountStack"
import { AuthStack } from "./stacks/authStack"

//Util ...

import { ForceUpdater, ForceUpdaterOnce } from "./../Helpers/utils"

const drawer = createDrawerNavigator()

const DrawerContent = (props: { dContainer: DrawerContentComponentProps<DrawerContentOptions>, checkAuth: Function, authentification: { isAuthed: boolean }, redirected: boolean, setRedirected: Function }) => {

    const handlePhotoPress = () => {
        props.dContainer.navigation.navigate("Home")
    }

    const handleAboutPress = () => {
        props.dContainer.navigation.navigate("About")
    }

    const handleAccountPress = () => {
        props.dContainer.navigation.navigate("Account")
    }

    return (
        <View style={NavStyle.buttonContainer}>
            <TouchableOpacity style={NavStyle.button} onPress={handlePhotoPress}>
                <Text style={NavStyle.buttonFont}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={NavStyle.button} onPress={handleAboutPress}>
                <Text style={NavStyle.buttonFont}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={NavStyle.button} onPress={handleAccountPress}>
                <Text style={NavStyle.buttonFont}>Account</Text>
            </TouchableOpacity>
        </View>
    )
}

const AppDrawer = (props: AppDrawerType) => {
    const [redirected, setRedirected] = useState(false);
    const [authChecked, setAuthChecked] = useState(true);
    const _FORCE_UPDATE_ONCE = ForceUpdaterOnce();

    setInterval(() => {
        props.authentification.isAuthed && authChecked ? _FORCE_UPDATE_ONCE(true) : _FORCE_UPDATE_ONCE(false)
    }, 200)

    //onReady={() => {
    //     if (!authChecked) {
    //         props.checkAuth(setAuthChecked)
    //     }
    // }} 

    return (
        <NavigationContainer >
            <drawer.Navigator initialRouteName={"Photos"} drawerContent={(p) => <DrawerContent dContainer={p} checkAuth={props.checkAuth} authentification={props.authentification} redirected={redirected} setRedirected={setRedirected} />}>
                {props.authentification.isAuthed ? (
                    <>
                        <drawer.Screen name={"Photos"} component={HomeStack} />
                        <drawer.Screen name={"About"} component={AboutStack} />
                        <drawer.Screen options={!props.authentification.isAuthed ? { swipeEnabled: false } : { swipeEnabled: true }} name={"Account"} component={AccountStack} />
                    </>
                ) : (
                    <>
                        <drawer.Screen options={!props.authentification.isAuthed ? { swipeEnabled: false } : { swipeEnabled: true }} name={"Auth"} component={AuthStack} />
                    </>
                )}
            </drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppDrawer