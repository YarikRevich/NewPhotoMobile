import React, { useEffect, useState } from "react"
import { Text, TouchableWithoutFeedback, View, TextInput, TouchableOpacity, Keyboard } from "react-native"

import Banner from "./../../CustomisedHeader/Banner/Banner"

//Types ...

import { SignUpType } from "./../../../types/components/SignUp"

//Styles ...

import FormsStyle from "./../../../constants/Forms"
import { ScrollView } from "react-native-gesture-handler"

const SignUp = (props: SignUpType) => {

    const [login, setLogin] = useState("");
    const [firstname, setFirstname] = useState("");
    const [secondname, setSecondname] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const [press, setPress] = useState(false)

    const [signup, setSignup] = useState({ ok: false, checked: false });

    useEffect(() => {
        if (signup.checked && signup.ok) {
            props.navigation.goBack()
        }
    })

    console.log("I MA")

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
                            <TouchableOpacity activeOpacity={1} style={press ? FormsStyle.buttonPress : null} onPressOut={() => setPress(false)} onPressIn={() => setPress(true)} onPress={() => props.signUp({ login: login, firstname: firstname, secondname: secondname, password1: password1, password2: password2 }, setSignup)} >
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