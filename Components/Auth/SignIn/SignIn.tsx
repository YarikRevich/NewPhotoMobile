import React, { useEffect, useState } from "react";
import { View, Keyboard, TouchableWithoutFeedback, TouchableOpacity, Text, TextInput } from "react-native"

//Types ...


import { SignInType } from "./../../../types/components/SignIn"

//Constants ...

import SignInStyle from "./../../../constants/SignIn"


const SignIn = (props: SignInType) => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [press, setPress] = useState(false)

    const [signin, setSignin] = useState(false);


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={SignInStyle.account} >
                <View style={SignInStyle.block}>
                    <View style={SignInStyle.title}>
                        <Text style={SignInStyle.titleText}>Sign in</Text>
                    </View>
                    <View style={SignInStyle.form}>
                        <View style={SignInStyle.input}>
                            <Text style={SignInStyle.text}>Login: </Text>
                            <TextInput onChangeText={(v) => {
                                setLogin(v)
                            }} autoCapitalize='none' textContentType="username" style={SignInStyle.inputText} placeholder="eg. Yaroslav"></TextInput>
                        </View>
                        <View style={SignInStyle.input}>
                            <Text style={SignInStyle.text}>Password: </Text>
                            <TextInput onChangeText={(v) => {
                                setPassword(v)
                            }} autoCapitalize='none' secureTextEntry={true} textContentType="newPassword" style={SignInStyle.inputText} placeholder="eg. abc123"></TextInput>
                        </View>
                        <TouchableOpacity activeOpacity={1} style={press ? SignInStyle.touchableOpacityPress : null} onPressOut={() => setPress(false)} onPressIn={() => setPress(true)} onPress={() => props.signIn({ login: login, password: password }, setSignin.bind(this))} >
                            <View style={SignInStyle.confirmButton}>
                                <Text style={SignInStyle.confirmButtonText}>Confirm!</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SignIn