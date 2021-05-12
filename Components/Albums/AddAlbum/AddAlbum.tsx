import React, { useState } from "react"
import { Button, View, Text } from "react-native"

import type { Components } from "./../../../types/components"
import { Formik } from "formik"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"

import FormStyles from "../../../constants/Forms"

const AddAlbum = (props: Components.AddAlbumType) => {
    const [press, setPress] = useState(false);

    return (
        <Formik
            initialValues={{ name: "", }}
            onSubmit={(values, actions) => {
                actions.resetForm()
                props.addAlbum(values.name)
                setTimeout(() => {
                    props.onClose()
                    props.onUpdate()
                }, 100)
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => {
                return (
                    <View style={{ ...FormStyles.block, marginTop: 170 }} >
                        <TextInput
                            style={FormStyles.inputText}
                            placeholder={"Ex: My trip"}
                            onChangeText={handleChange("name")}
                            onBlur={handleBlur("name")}
                            value={values.name}
                        />
                        <TouchableOpacity activeOpacity={1} style={press ? FormStyles.buttonPress : null} onPressOut={() => setPress(false)} onPressIn={() => setPress(true)} onPress={() => handleSubmit()}>
                            <View style={{ ...FormStyles.button, alignSelf: "center", marginTop: 20 }}>
                                <Text style={FormStyles.buttonText}>Confirm!</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            }}

        </Formik>)
}

export default AddAlbum