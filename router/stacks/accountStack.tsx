//ExternalLibraries ...

import React from "react";
import { DrawerContentOptions} from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"

//Components ...

import AccountContiner from "../../Components/Screens/Account/AccountContainer"
import HeaderContainer from "../../Components/Interface/Header/HeaderContainer"
import Banner from "../../Components/Interface/Banner/Banner"
import HeaderStyle from "./../../constants/CustomisedHeader"

const Stack = createStackNavigator()

export const AccountStack = (props: Stack) => {

    return (
        <Stack.Navigator initialRouteName={"Account"}>
            <Stack.Screen options={{
                   headerStyle: HeaderStyle.header,
                headerTitle: () => (
                    <>
                        <HeaderContainer navigation={props.navigation} title={"Account"} type={"drawer"} avatar={false} />
                        <Banner />
                    </>
                )
            }} name={"Account"} component={AccountContiner} />
        </Stack.Navigator>
    )
}