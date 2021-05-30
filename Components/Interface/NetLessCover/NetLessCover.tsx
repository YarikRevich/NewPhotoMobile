import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { Components } from "../../../types/components"

import CoverStyle from "../../../constants/NetLessCover"

const Cover = (props: Components.NetLessCoverType) => {
    const [show, setShow] = useState(true)

    return !props.isConnected ? (
        <View style={{ ...CoverStyle.body, display: (show ? "flex" : "none") }}>
            <TouchableOpacity onPress={() => setShow(false)}>
                <Image style={CoverStyle.closeCross} source={require("./../../../assets/images/miniclosecross.png")} />
            </TouchableOpacity>
            <Text style={CoverStyle.text}>It seems that there is no connection to the Internet </Text>
        </View>
    )
        : null
}

export default Cover