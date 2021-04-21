import React, { useState, useRef, useEffect } from "react";
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native"
import { TextInput } from "react-native-gesture-handler";

import { AccountType } from "./../../types/components/Account"

import AccountStyle from "./../../constants/Account"

const Account = (props: AccountType) => {

    const [press, setPress] = useState(false)

    const [signout, setSignout] = useState(false)


    // useEffect(() => {
    //     if (signin && props.authentification.isAuthed) {
    //         props.navigation.navigation.navigate("Home")
    //     }
    // })

    return (
        <View style={AccountStyle.account}>
            <View>
                <TouchableOpacity activeOpacity={1} style={press ? AccountStyle.touchableOpacityPress : null} onPressOut={() => setPress(false)} onPressIn={() => setPress(true)} onPress={() => props.signOut(setSignout.bind(this))} >
                    <View style={AccountStyle.confirmButton}>
                        <Text style={AccountStyle.confirmButtonText}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Account