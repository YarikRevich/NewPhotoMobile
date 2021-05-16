//ExternalLibraries ...

import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

//Components ...

import About from "./../../Components/About/About"
import HeaderContainer from "./../../Components/CustomisedHeader/Header/HeaderContainer"
import Banner from "./../../Components/CustomisedHeader/Banner/Banner"
import HeaderStyle from "./../../constants/CustomisedHeader"


const Stack = createStackNavigator()


export const AboutStack = (props: Stack) => {

    return (
        <Stack.Navigator initialRouteName={"About"}>
            <Stack.Screen options={{
                headerStyle: HeaderStyle.header,
                headerTitle: () => (
                    <>
                        <HeaderContainer navigation={props.navigation} title={"About"} type={"drawer"} avatar={true} />
                        <Banner />
                    </>
                )
            }} name={"About"} component={About} />
        </Stack.Navigator>
    )
}
