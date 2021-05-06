import React from "react"
import { View, TouchableOpacity, Image } from "react-native"

import type { Components } from "./../../types/components"

import CloseCrossStyle from "./../../constants/CloseCross"

const CloseCross = (props: Components.CloseCrossType) => {
    return (
        <View style={CloseCrossStyle.closeCrossCover}>
            <TouchableOpacity
                style={CloseCrossStyle.closeCrossPhotoOpacity}
                onPress={props.onPress}>
                <Image style={CloseCrossStyle.closeCrossPhoto} source={require("./../../assets/images/closecross.png")} />
            </TouchableOpacity>
        </View>
    )
}

export default CloseCross