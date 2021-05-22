import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    fullImage: {
        alignSelf: "flex-end",
        width: Dimensions.get("window").width / 100 * 7,
        height: Dimensions.get("window").height / 100 * 4,
    },
    fullVideo: {
        alignSelf: "center",
        width: Dimensions.get("window").width / 100 * 95,
        height: Dimensions.get("window").height / 100 * 75,
        marginTop: Dimensions.get("window").width / 100 * 95 / 100 * 10,
    },
    fullCover: {
        alignSelf: "center",
    },
    shareIcon: {
        width: Dimensions.get("window").width / 100 * 10,
        height: Dimensions.get("window").height / 100 * 4.5,
        marginTop: -Dimensions.get("window").height / 100 * 2,
        marginLeft: Dimensions.get("window").width / 100 * 2,
    }
})