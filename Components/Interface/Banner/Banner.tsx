import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"

import messagePublisher from "messagepublisher"
import { ForceUpdater } from "../../../Helpers/utils";

import HeaderStyles from "../../../constants/CustomisedHeader"

const Banner = () => {
    const _FORCE_UPDATER = ForceUpdater()

    useEffect(() => {
        let mount = true
        setTimeout(() => {
            if (mount) _FORCE_UPDATER()
        }, 3000)
        return () => { mount = false }
    })

    messagePublisher.cleanUp(1)
    const messages = messagePublisher.get();

    return (
        <View style={messages.length != 0 ? HeaderStyles.message : null} >
            <View style={HeaderStyles.messageContainer}>
                {messages.map((e, i) => {
                    return <Text key={i} style={HeaderStyles.messageText} > {e} </Text>
                })}
            </View>
        </View>
    )
}

export default Banner