import React, { useState } from "react"
import { Button, View, Text } from "react-native"

import type { Components } from "../../../../types/components"
import { Formik } from "formik"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"

import FormStyles from "./../../../../constants/Forms"
import ErrorsStyle from "./../../../../constants/Errors"

const AddAlbum = (props: Components.AddAlbumType) => {
    const [press, setPress] = useState(false);

    return (
        <Formik
            initialValues={{ name: "", }}
            validate={(values) => {
                const errors: any = {}

                const _alreadyHasAlbum = (name: string): boolean => {
                    for (let i of props.albums) {
                        if (i.name == name) {
                            return true
                        }
                    }
                    return false
                }

                if (!values.name.length) {
                    errors.name = "Required"
                } else if (_alreadyHasAlbum(values.name)) {
                    errors.name = "The name should be unique"
                }
                return errors
            }
            }
            onSubmit={(values, actions) => {
                actions.resetForm()
                props.addAlbum(values.name)
                setTimeout(() => {
                    props.onClose()
                    props.onUpdate()
                }, 100)
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, errors, values }) => {
                return (
                    <View style={{ ...FormStyles.block, marginTop: 170 }} >
                        <TextInput
                            autoCapitalize={"none"}
                            style={FormStyles.inputText}
                            placeholder={"Ex: My trip"}
                            onChangeText={handleChange("name")}
                            onBlur={handleBlur("name")}
                            value={values.name}
                        />
                        <View style={ErrorsStyle.body}><Text style={ErrorsStyle.text}>{errors.name}</Text></View>
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