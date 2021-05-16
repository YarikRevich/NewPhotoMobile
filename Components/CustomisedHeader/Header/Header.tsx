import React, { useEffect, useState } from "react"
import { Text, View, Image, TouchableOpacity, Dimensions } from "react-native"

//Styles ...

import HeaderStyles from "../../../constants/CustomisedHeader"
import { ForceUpdater } from "../../../Helpers/utils"
import { Components } from "../../../types/components"

const Header = (props: Components.HeaderType) => {
    const [ran, setRan] = useState(false)

    useEffect(() => props.getAvatar(), [])

    useEffect(() => {
        let mount = true

        setTimeout(() => {
            if (mount) {
                if (props.authentification.isAuthed) {
                    props.getAvatar()
                    setRan(false)
                }
            }
        }, 5000)

        setRan(true)
        return () => { mount = false }
    }, [ran])

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