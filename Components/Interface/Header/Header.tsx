import React, { useEffect, useState } from "react"
import { Text, View, Image, TouchableOpacity, Dimensions } from "react-native"

//Styles ...

import HeaderStyles from "../../../constants/CustomisedHeader"
import { Components } from "../../../types/components"

const Header = (props: Components.HeaderType) => {

    const handleMenuButton = () => {
        props.navigation.toggleDrawer()
    }

    return (
        <View style={props.type == "drawer" ? (props.authentification.isAuthed ? HeaderStyles.headerDrawerAuthed : HeaderStyles.headerDrawerNotAuthed) : HeaderStyles.headerStack}>
            {props.type == "drawer" && props.authentification.isAuthed ?
                (<TouchableOpacity onPress={handleMenuButton}>
                    <Image style={HeaderStyles.menuImage} source={{ uri: "https://img.icons8.com/android/50/000000/menu.png" }} />
                </TouchableOpacity>)
                :
                null
            }
            <View style={HeaderStyles.titleContainer}>
                <Text style={HeaderStyles.title}>{props.title}</Text>
            </View>
            {props.type == "drawer" && props.authentification.isAuthed && props.avatar ?
                <Image style={HeaderStyles.avatar} width={Dimensions.get("window").width / 100 * 12} height={Dimensions.get("window").width / 100 * 12} source={(props.accountPage.avatar ? { uri: `data:image/jpeg;image/png;base64,${props.accountPage.avatar}` } : require("./../../../assets/images/unidentified.png"))} />
                : null
            }
        </View>
    )
}

export default Header