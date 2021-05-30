/// <reference path="../../../../types/components.ts" />

import React, { useEffect, useState } from "react"
import { Text, TouchableWithoutFeedback, View, TextInput, TouchableOpacity, Keyboard } from "react-native"


import { Components } from "../../../../types/components"

//Styles ...

import FormsStyle from "../../../../constants/Forms"
import { ScrollView } from "react-native-gesture-handler"


const SignUp = (props: Components.SignUpType) => {

    const [login, setLogin] = useState("");
    const [firstname, setFirstname] = useState("");
    const [secondname, setSecondname] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const [press, setPress] = useState(false)

    useEffect(() => {
        let mount = true
        if (props.isSignedUp && mount) {
            props.navigation.goBack()
        }
        return () => { mount = false }
    })

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <ScrollView>
                <View style={FormsStyle.body} >
                    <View style={FormsStyle.block}>
                        <View style={FormsStyle.form}>
                            <View style={FormsStyle.input}>
                                <Text style={FormsStyle.inputLabel}>Login: </Text>
                                <TextInput onChangeText={(v) => {
                                    setLogin(v)
                                }} autoCapitalize='none' textContentType="username" style={FormsStyle.inputText} placeholder="eg. yari2204"></TextInput>
                            </View>
                            <View style={FormsStyle.input}>
                                <Text style={FormsStyle.inputLabel}>Firstname: </Text>
                                <TextInput onChangeText={(v) => {
                                    setFirstname(v)
                                }} autoCapitalize='none' textContentType="username" style={FormsStyle.inputText} placeholder="eg. Yaroslav"></TextInput>
                            </View>
                            <View style={FormsStyle.input}>
                                <Text style={FormsStyle.inputLabel}>Secondname: </Text>
                                <TextInput onChangeText={(v) => {
                                    setSecondname(v)
                                }} autoCapitalize='none' textContentType="username" style={FormsStyle.inputText} placeholder="eg. Svitlitskyi"></TextInput>
                            </View>
                            <View style={FormsStyle.input}>
                                <Text style={FormsStyle.inputLabel}>Password: </Text>
                                <TextInput onChangeText={(v) => {
                                    setPassword1(v)
                                }} autoCapitalize='none' secureTextEntry={true} textContentType="newPassword" style={FormsStyle.inputText} placeholder="eg. abc123"></TextInput>
                            </View>
                            <View style={FormsStyle.input}>
                                <Text style={FormsStyle.inputLabel}>Confirm password: </Text>
                                <TextInput onChangeText={(v) => {
                                    setPassword2(v)
                                }} autoCapitalize='none' secureTextEntry={true} textContentType="newPassword" style={FormsStyle.inputText} placeholder="eg. abc123"></TextInput>
                            </View>
                            <TouchableOpacity activeOpacity={1} style={press ? FormsStyle.buttonPress : null} onPressOut={() => setPress(false)} onPressIn={() => setPress(true)} onPress={() => props.signUp({ data: { login: login, firstname: firstname, secondname: secondname, password1: password1, password2: password2 }})}>
                                <View style={FormsStyle.button}>
                                    <Text style={FormsStyle.buttonText}>Confirm!</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

export default SignUp
