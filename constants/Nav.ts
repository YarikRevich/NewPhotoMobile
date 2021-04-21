import { StyleSheet } from "react-native"

export default StyleSheet.create({
    buttonContainer: {
        marginTop: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "aliceblue",
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        height: 35,
        marginTop: 25,
    },
    buttonFont: {
        fontSize: 20,
    }
})