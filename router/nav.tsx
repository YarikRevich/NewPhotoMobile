import React, { useState } from "react";
import { View, Button } from "react-native"

import Photos from "./../Components/Photos/Photos"
import Header from "./../Components/Header/Header"

import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer"

const drawer = createDrawerNavigator()

const DrawerContent = (props: any) => {
    console.log(props)
    return (
        <Button title="Photos" onPress={() => console.log("it works")}></Button>
    )
} 

const AppDrawer = () => {

    const nagivatorRef: React.RefObject<NavigationContainerRef> = React.useRef(null);
    const [isReady, setReady] = useState(false)

    return (
        <NavigationContainer ref={nagivatorRef} onReady={() => {
            setReady(true)
        }}>
            <Header navigator={nagivatorRef} ready={isReady} />
            <drawer.Navigator drawerContent={(props) => <DrawerContent {...props}/>} initialRouteName="Home">
                    <drawer.Screen options={{ title: "Photos" }} name={"Home"} component={Photos} />
            </drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppDrawer