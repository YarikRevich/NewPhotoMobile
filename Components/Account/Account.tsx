import React, { useState, useRef, useEffect } from "react";
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native"
import { TextInput } from "react-native-gesture-handler";

import { AccountType } from "./../../types/components/Account"

import AccountStyle from "./../../constants/Account"

const Account = (props: AccountType) => {

    const [press, setPress] = useState(false)
    const [signout, setSignout] = useState(false)
    const [checked, setChecked] = useState(false);

    if (!checked) {
        props.getAccountInfo(setChecked)
    }

    return (
        <View style={AccountStyle.account}>
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
                    <TouchableOpacity activeOpacity={1} style={press ? AccountStyle.touchableOpacityPress : null} onPressOut={() => setPress(false)} onPressIn={() => setPress(true)} onPress={() => props.signOut(setSignout.bind(this))} >
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