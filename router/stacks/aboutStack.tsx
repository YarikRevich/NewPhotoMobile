//ExternalLibraries ...

import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

//Components ...

import About from "./../../Components/About/About"
import HeaderContainer from "./../../Components/CustomisedHeader/Header/HeaderContainer"
import Banner from "./../../Components/CustomisedHeader/Banner/Banner"


const Stack = createStackNavigator()


export const AboutStack = (props: Stack) => {

    return (
        <Stack.Navigator initialRouteName={"About"}>
            <Stack.Screen options={{
                headerTitle: () => (
                    <>
                        <HeaderContainer navigation={props.navigation} title={"About"} type={"drawer"}/>
                        <Banner />
                    </>
                )
            }} name={"About"} component={About} />
        </Stack.Navigator>
    )
}
