import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import { NavigationContainerRef, DrawerActions } from "@react-navigation/native";

const Header = (props: { navigator: React.RefObject<NavigationContainerRef>, ready: boolean }) => {

    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        if (props.ready) {
            if (openMenu) {
                props.navigator.current?.dispatch(DrawerActions.openDrawer)
            } else {
                props.navigator.current?.dispatch(DrawerActions.closeDrawer)
            }
        }
    })

    return (
        <View >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => openMenu ? setOpenMenu(false) : setOpenMenu(true)}>
                    <Image style={styles.menuImage} source={{ uri: "https://img.icons8.com/android/50/000000/menu.png" }} />
                </TouchableOpacity>
                <Text style={styles.title}>NewPhotoMobile</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        height: 80,
        width: "100%",
        backgroundColor: "aliceblue",
    },
    title: {
        fontSize: 21,
        fontWeight: "bold",
        padding: 40,
        marginTop: 15,
    },
    menuImage: {
        width: 20,
        height: 20,
        marginTop: 20,
    },
    navBar: {
        width: "50%",
        height: "93%",
        backgroundColor: "black",
        zIndex: 2000,
    },
    hooks: {
        color: "white",
    }
})

export default Header