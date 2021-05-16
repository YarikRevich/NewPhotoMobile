import React from "react";
import { Text, View, Linking } from "react-native"
import AboutStyle from "./../../constants/About"

const About = () => {
    return (
        <View style={AboutStyle.aboutContainer}>
            <View style={AboutStyle.aboutBox}>
                <Text style={AboutStyle.textAuthor}>Created by <Text onPress={() => Linking.openURL("http://google.com")}>@Yaroslav</Text></Text>
                <Text style={AboutStyle.textReserved}>©All rights reserved</Text>
            </View>
        </View>
    )
}

export default About