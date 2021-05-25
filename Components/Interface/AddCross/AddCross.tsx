import React, { useRef } from "react"
import { Animated, TouchableOpacity } from "react-native"

import type { Components } from "../../../types/components"

import AddCrossStyle from "../../../constants/AddCross"

const AddCross = (props: Components.AddCrossType) => {
    const rotationAnimation = useRef(new Animated.Value(0))

    rotationAnimation.current.removeAllListeners()
    rotationAnimation.current.addListener(({ value }) => {
        if (value == 4) {
            props.onPress()
        }
    })

    const runAddPlusAnimation = () => {
        rotationAnimation.current.setValue(0)
        Animated.sequence([
            Animated.timing(rotationAnimation.current, {
                toValue: 1,
                duration: 250,
                useNativeDriver: false,
            }),
            Animated.timing(rotationAnimation.current, {
                delay: 100,
                toValue: 2,
                duration: 250,
                useNativeDriver: false,
            }),
            Animated.timing(rotationAnimation.current, {
                delay: 100,
                toValue: 3,
                duration: 200,
                useNativeDriver: false,
            }),
            Animated.timing(rotationAnimation.current, {
                toValue: 4,
                duration: 200,
                useNativeDriver: false,
            }),
        ]).start(() => console.log("stop"))
    }

    const rotation = rotationAnimation.current.interpolate({
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
                <Animated.Image style={{ ...AddCrossStyle.button, ...animatedRotationStyle }} source={require("./../../../assets/images/addplus.png")} />
            </TouchableOpacity>
        </Animated.View>
    )
}

export default AddCross