import React, { useState } from "react"
import { Animated, TouchableOpacity } from "react-native"

import type { Components } from "./../../types/components"

import AddCrossStyle from "./../../constants/AddCross"

const AddCross = (props: Components.AddCrossType) => {
    const rotationAnimation = new Animated.Value(0);

    rotationAnimation.addListener(({ value }) => {
        if (value == 4) {
            props.onPress()
        }
    })

    const runAddPlusAnimation = () => {
        rotationAnimation.setValue(0)
        Animated.sequence([
            Animated.timing(rotationAnimation, {
                toValue: 1,
                duration: 250,
                useNativeDriver: false,
            }),
            Animated.timing(rotationAnimation, {
                delay: 100,
                toValue: 2,
                duration: 250,
                useNativeDriver: false,
            }),
            Animated.timing(rotationAnimation, {
                delay: 100,
                toValue: 3,
                duration: 200,
                useNativeDriver: false,
            }),
            Animated.timing(rotationAnimation, {
                toValue: 4,
                duration: 200,
                useNativeDriver: false,
            }),
        ]).start()
    }

    const rotation = rotationAnimation.interpolate({
        inputRange: [0, 1, 2, 3, 4],
        outputRange: ["0deg", "40deg", "55deg", "45deg", "0deg"]
    })

    const animatedRotationStyle = {
        transform: [{
            rotate: rotation
        }]
    }

    return (
        <Animated.View>
            <TouchableOpacity style={AddCrossStyle.opacity} onPress={runAddPlusAnimation}>
                <Animated.Image style={{ ...AddCrossStyle.button, ...animatedRotationStyle }} source={require("../../assets/images/addplus.png")} />
            </TouchableOpacity>
        </Animated.View>
    )
}

export default AddCross