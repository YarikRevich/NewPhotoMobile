import React from "react"
import { Text, View, Image, TouchableOpacity } from "react-native"

//Styles ...

import HeaderStyles from "../../../constants/CustomisedHeader"
import { Components } from "../../../types/components"

const Header = (props: Components.HeaderType) => {

    const handleMenuButton = () => {
        props.navigation.toggleDrawer()
    }

    return (
        <View >
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
            </View>
        </View>
    )
}

export default Header