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

    const getMessages = (): Array<JSX.Element> => {
        let r = Array<JSX.Element>();
        messages.map((el, n) => {
            r.push(<Text key={n} style={HeaderStyles.messageText} > {el} </Text>);
        })
        return r
    }

    return (
        <View style={messages.length != 0 ? HeaderStyles.message : null} >
            <View style={HeaderStyles.messageContainer}>
                {getMessages()}
            </View>
        </View>
    )
}

export default Banner