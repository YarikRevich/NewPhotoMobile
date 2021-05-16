/// <reference path="./../../types/components.ts" />

import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Animated, Image, Dimensions } from "react-native"
import { openMediaPicker } from "./../../Helpers/account"

import type { Components } from "./../../types/components"

import AccountStyle from "./../../constants/Account"

const Account = (props: Components.AccountType) => {
    const [press, setPress] = useState(false)

    useEffect(() => {
        props.getAccountInfo()
        props.getAvatar()
    }, [])

    const addButtonAnimation = new Animated.Value(0)

    const handleAddAvatar = () => {
        Animated.sequence([
            Animated.timing(addButtonAnimation, {
                toValue: 1,
                duration: 10,
                useNativeDriver: false,
            }),
            Animated.timing(addButtonAnimation, {
                toValue: 0,
                duration: 5000,
                useNativeDriver: false,
            })
        ]).start()

        props.setAvatar()
    }

    const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

    return (
        <View style={AccountStyle.account}>
            <View>
                <AnimatedTouchableOpacity activeOpacity={0} style={{ ...AccountStyle.avatarCover, opacity: addButtonAnimation }} onPress={() => handleAddAvatar()}>
                    <Image source={require("./../../assets/images/addplus.png")} />
                </AnimatedTouchableOpacity>
                {/* <View style={AccountStyle.avatarView}> */}
                <Image style={AccountStyle.avatar} width={Dimensions.get("window").width / 100 * 35} height={Dimensions.get("window").width / 100 * 35} source={(props.accountPage.avatar.length ? { uri: `data:image/jpeg;image/png;base64,${props.accountPage.avatar}` } : require("./../../assets/images/unidentified.png"))} />
                {/* </View> */}
            </View>
            <View style={AccountStyle.accountInfo}>
                <View style={AccountStyle.accountInfoRow}>
                    <Text style={AccountStyle.accountInfoRowTextPlaceholder}>Firstname: </Text>
                    <Text style={AccountStyle.accountInfoRowText}>{props.accountPage.result.firstname}</Text>
                </View>
                <View style={AccountStyle.accountInfoRow}>
                    <Text style={AccountStyle.accountInfoRowTextPlaceholder}>Secondname: </Text>
                    <Text style={AccountStyle.accountInfoRowText}>{props.accountPage.result.secondname}</Text>
                </View>
                <View style={AccountStyle.accountInfoRow}>
                    <Text style={AccountStyle.accountInfoRowTextPlaceholder}>Storage: </Text>
                    <Text style={AccountStyle.accountInfoRowText}>{props.accountPage.result.storage} gb</Text>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={1} style={press ? AccountStyle.touchableOpacityPress : null} onPressOut={() => setPress(false)} onPressIn={() => setPress(true)} onPress={() => props.signOut()} >
                        <View style={AccountStyle.confirmButton}>
                            <Text style={AccountStyle.confirmButtonText}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Account