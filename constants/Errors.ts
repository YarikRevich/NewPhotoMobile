import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    body: {
        alignSelf: "center",
        marginTop: Dimensions.get("window").height / 100 * .7,
        width: Dimensions.get("window").width / 100 * 65,
    },
    text: {
        color: "red",
        fontWeight: "600",
        fontSize: Dimensions.get("window").fontScale * 15
    }
})