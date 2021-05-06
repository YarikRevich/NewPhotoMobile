//ExternalLibraries ...

import React from "react";
import { DrawerContentOptions} from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"

//Components ...

import AccountContiner from "../../Components/Account/AccountContainer"
import HeaderContainer from "../../Components/CustomisedHeader/Header/HeaderContainer"
import Banner from "./../../Components/CustomisedHeader/Banner/Banner"

const Stack = createStackNavigator()

export const AccountStack = (props: Stack) => {

    return (
        <Stack.Navigator initialRouteName={"Account"}>
            <Stack.Screen options={{
                headerTitle: () => (
                    <>
                        <HeaderContainer navigation={props.navigation} title={"Account"} type={"drawer"} />
                        <Banner />
                    </>
                )
            }} name={"Account"} component={AccountContiner} />
        </Stack.Navigator>
    )
}