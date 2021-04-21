//External libraries ...

import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import messagePublisher from "messagepublisher"

//Types ...

import { HeaderType } from "../../types/components/Header"

//Styles ...

import HeaderStyles from "./../../constants/Header"
import { ForceUpdater } from "../../Helpers/utils";

const Header = (props: HeaderType) => {
    const _FORCE_UPDATE = ForceUpdater();

    useEffect((): any => {
        let mounted = true
        setTimeout(() => {
            messagePublisher.cleanUp()
            if (mounted) {
                _FORCE_UPDATE()
            }
        }, 2000)
        return () => mounted = false
    })

    const handleMenuButton = () => {
        props.navigation.toggleDrawer()
    }

    const messages = messagePublisher.get()

    if (!props.authentification.isAuthed) {
        return (
            <View >
                <View style={messages.length != 0 ? HeaderStyles.message : null}>
                    {messages.map(el => {
                        return (
                            <View style={HeaderStyles.messageContainer}>
                                <Text style={HeaderStyles.messageText}>{messages}</Text>
                            </View>
                        )
                    })}
                </View>
                <View style={HeaderStyles.header}>
                    <View style={HeaderStyles.titleContainer}>
                        <Text style={HeaderStyles.title}>{props.title}</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View >
            <View style={messages.length != 0 ? HeaderStyles.message : null}>
                {messages.map(el => {
                    return (
                        <View style={HeaderStyles.messageContainer}>
                            <Text style={HeaderStyles.messageText}>{messages}</Text>
                        </View>
                    )
                })}
            </View>
            <View style={HeaderStyles.header}>
                <TouchableOpacity onPress={handleMenuButton}>
                    <Image style={HeaderStyles.menuImage} source={{ uri: "https://img.icons8.com/android/50/000000/menu.png" }} />
                </TouchableOpacity>
                <View style={HeaderStyles.titleContainer}>
                    <Text style={HeaderStyles.title}>{props.title}</Text>
                </View>
            </View>
        </View>
    )
}

export default Header