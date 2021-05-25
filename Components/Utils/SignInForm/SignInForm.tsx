import React, { useState } from "react"
import { View, Keyboard, TouchableWithoutFeedback, TouchableOpacity, Text, TextInput, Image } from "react-native"

import { Formik } from "formik"
import type { Components } from "./../../../types/components"

import FormsStyle from "./../../../constants/Forms"


const SignInForm = (props: Components.SignInFormType) => {
    const [press, setPress] = useState(false)

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <Formik
                initialValues={{ login: "", password: "" }}
                onSubmit={(values, actions) => {
                    actions.resetForm()
                    if (props.type == "outer") {
                        if (props.signInOuter) {
                            props.signInOuter({ data: { login: values.login, password: values.password } })
                        }
                    } else {
                        if (props.signInInner) {
                            props.signInInner({ data: { login: values.login, password: values.password } })
                        }
                    }
                }}
            >
                {({ handleSubmit, handleChange, values, errors }) => {
                    return (
                        <View style={FormsStyle.body} >
                            <View style={FormsStyle.block}>
                                <View style={FormsStyle.form}>
                                    <View style={FormsStyle.input}>
                                        <Text style={FormsStyle.inputLabel}>Login: </Text>
                                        <TextInput
                                            onChangeText={handleChange("login")}
                                            autoCapitalize='none'
                                            textContentType="username"
                                            style={FormsStyle.inputText}
                                            placeholder="eg. Yaroslav"
                                        />
                                    </View>
                                    <View style={FormsStyle.input}>
                                        <Text style={FormsStyle.inputLabel}>Password: </Text>
                                        <TextInput
                                            onChangeText={handleChange("password")}
                                            autoCapitalize='none'
                                            secureTextEntry={true}
                                            textContentType="newPassword"
                                            style={FormsStyle.inputText}
                                            placeholder="eg. abc123"
                                        />
                                    </View>
                                    <TouchableOpacity onPress={props.setLocalAuthenticationStatusTryAgain}>
                                        {props.type == "inner" ? <Image source={props.LocalAuthenticationType === 1 ? require("./../../../assets/images/touchid.png") : require("./../../../assets/images/faceid.png")} /> : null}
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={press ? FormsStyle.buttonPress : null}
                                        onPressOut={() => setPress(false)}
                                        onPressIn={() => setPress(true)}
                                        onPress={() => handleSubmit()}
                                    >
                                        <View style={FormsStyle.button}>
                                            <Text style={FormsStyle.buttonText}>Confirm!</Text>
                                        </View>
                                    </TouchableOpacity>
                                    {props.type == "outer" ?
                                        <TouchableOpacity onPress={() => {
                                            if (props.navigation) {
                                                props.navigation.push("SignUp")
                                            }
                                        }} >
                                            <Text style={FormsStyle.redirectButton}>Not signed up?</Text>
                                        </TouchableOpacity>
                                        : null
                                    }
                                </View>
                            </View>
                        </View>
                    )
                }}
            </Formik>

        </TouchableWithoutFeedback>
    )
}

export default SignInForm