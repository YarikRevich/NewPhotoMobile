import React from "react"
import { View, Text } from "react-native"
import { Components } from "../../../types/components"

import CoverStyle from "../../../constants/NetLessCover"

const Cover = (props: Components.NetLessCoverType) => {
    return !props.isConnected ? <View style={CoverStyle.body}><Text style={CoverStyle.text}>It seems that there is no connection to the Internet </Text></View> : null
}

export default Cover