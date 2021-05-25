import { Dimensions, StyleSheet } from "react-native"

const ButtonStyles = StyleSheet.create({
    button: {
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get("window").width / 100 * 30,
        height: Dimensions.get("window").height / 100 * 5,
        backgroundColor: "aliceblue",
        borderWidth: 1.4,
        borderColor: "black",
        shadowRadius: 20,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "600",
    }
})

export default StyleSheet.create({
    ...ButtonStyles
})