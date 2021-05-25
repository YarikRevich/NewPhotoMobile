import React from "react"
import { View } from "react-native"
import { Components } from "../../../types/components"
import { BlurView } from "expo-blur"

import ActivityCoverStyle from "./../../../constants/ActivityCover"

const ActivityCover = (props: Components.ActivityCoverType) => {
    return !props.isAppActive ? <BlurView intensity={100} tint={"light"} style={ActivityCoverStyle.body} /> : null
}

export default ActivityCover