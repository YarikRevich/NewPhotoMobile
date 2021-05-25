import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    body: {
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        zIndex: 20000,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, .8)"

    },
    text: {
        color: "white",
        fontSize: Dimensions.get("window").fontScale * 17,
        alignSelf: "center",
        textAlign: "center",
    }
})