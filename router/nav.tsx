/// <reference path="./../types/components.ts" />


//External libraries ...

import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions } from "@react-navigation/drawer"
import { TouchableOpacity } from "react-native-gesture-handler";

import type { Components } from "./../types/components";

//Style constants ...

import NavStyle from "./../constants/Nav"

//Stacks ...

import { HomeStack } from "./stacks/homeStack"
import { AboutStack } from "./stacks/aboutStack"
import { AccountStack } from "./stacks/accountStack"
import { AuthStack } from "./stacks/authStack"

//Util ...

import { ForceUpdaterOnce } from "./../Helpers/utils"

//Styles ...

import ActivityIndStyle from "./../constants/ActivityIndicator"
import { AlbumsStack } from "./stacks/albumsStack";

const drawer = createDrawerNavigator()

const DrawerContent = (props: { dContainer: DrawerContentComponentProps<DrawerContentOptions>, checkAuth: Function, authentification: { isAuthed: boolean }, redirected: boolean, setRedirected: Function }) => {

    const handlePhotoPress = () => {
        props.dContainer.navigation.navigate("Home")
    }

    const handleAlbumsPress = () => {
        props.dContainer.navigation.navigate("Albums")
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
            <TouchableOpacity style={NavStyle.button} onPress={handleAlbumsPress}>
                <Text style={NavStyle.buttonFont}>Albums</Text>
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

const AppDrawer = (props: Components.AppDrawerType) => {
    const [redirected, setRedirected] = useState(false);
    const [checkerIsRun, setCheckerIsRun] = useState(false)

    const _FORCE_UPDATE_ONCE = ForceUpdaterOnce();

    if (!checkerIsRun) {
        setInterval(() => {
            props.authentification.isAuthed && !props.authentification.isChecking ? _FORCE_UPDATE_ONCE(true) : _FORCE_UPDATE_ONCE(false)
        }, 15)
        setCheckerIsRun(true)
    }

    useEffect(() => {
        props.checkAuth()
    }, [])

    return (
        <NavigationContainer>
            {!props.authentification.isChecking ?
                <drawer.Navigator initialRouteName={"Photos"} drawerContent={(p) => <DrawerContent dContainer={p} checkAuth={props.checkAuth} authentification={props.authentification} redirected={redirected} setRedirected={setRedirected} />}>
                    {props.authentification.isAuthed ? (
                        <>
                            <drawer.Screen name={"Photos"} component={HomeStack} />
                            <drawer.Screen name={"Albums"} component={AlbumsStack} />
                            <drawer.Screen name={"About"} component={AboutStack} />
                            <drawer.Screen  name={"Account"} component={AccountStack} />
                        </>
                    ) :
                        <drawer.Screen options={{ swipeEnabled: props.authentification.isAuthed }} name={"Auth"} component={AuthStack} />
                    }
                </drawer.Navigator>
                : <ActivityIndicator style={ActivityIndStyle.AuthIndicator} size="large" color="#000000" />}
        </NavigationContainer>
    )
}

export default AppDrawer