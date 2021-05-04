import React, { useEffect, useState } from "react";
import { View, Keyboard, TouchableWithoutFeedback, TouchableOpacity, Text, TextInput } from "react-native"

//Types ...


import { SignInType } from "./../../../types/components/SignIn"

//Constants ...

// import SignInStyle from "./../../../constants/SignIn"
import FormsStyle from "./../../../constants/Forms"


const SignIn = (props: SignInType) => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [press, setPress] = useState(false)

    const [signin, setSignin] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={FormsStyle.body} >
                <View style={FormsStyle.block}>
                    <View style={FormsStyle.form}>
                        <View style={FormsStyle.input}>
                            <Text style={FormsStyle.inputLabel}>Login: </Text>
                            <TextInput onChangeText={(v) => {
                                setLogin(v)
                            }} autoCapitalize='none' textContentType="username" style={FormsStyle.inputText} placeholder="eg. Yaroslav"></TextInput>
                        </View>
                        <View style={FormsStyle.input}>
                            <Text style={FormsStyle.inputLabel}>Password: </Text>
                            <TextInput onChangeText={(v) => {
                                setPassword(v)
                            }} autoCapitalize='none' secureTextEntry={true} textContentType="newPassword" style={FormsStyle.inputText} placeholder="eg. abc123"></TextInput>
                        </View>
                        <TouchableOpacity activeOpacity={1} style={press ? FormsStyle.buttonPress : null} onPressOut={() => setPress(false)} onPressIn={() => setPress(true)} onPress={() => props.signIn({ data: {login: login, password: password }}, setSignin)} >
                            <View style={FormsStyle.button}>
                                <Text style={FormsStyle.buttonText}>Confirm!</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.push("SignUp")} >
                            <Text style={{fontSize: 16, color: "grey", textAlign: "center", marginTop: 10}}>Not signed up?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SignIn