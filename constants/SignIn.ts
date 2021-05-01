import { StyleSheet } from "react-native"

export default StyleSheet.create({
    account: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        height: "100%",
        backgroundColor: "white"
    },
    title: {
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    titleText: {
        fontWeight: "500",
        fontSize: 24,
    },
    block: {
        width: 300,
        height: 370,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#000000",
        backgroundColor: "aliceblue",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 23
    },
    input: {
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        marginTop: 10,
        paddingBottom: 20,
        width: 150,
    },
    inputText: {
        marginTop: 5,
        alignSelf: "center",
        width: 200,
        padding: 10,
        fontSize: 26,
        borderWidth: 1.2,
        borderRadius: 15,
        borderColor: "grey",
    },
    confirmButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 130,
        height: 50,
        borderRadius: 20,
        borderWidth: 1.2,
        borderColor: "blue",
        backgroundColor: "aliceblue"
    },
    confirmButtonText: {
        fontSize: 23,
        fontWeight: "600",
    },
    touchableOpacityPress: {
        shadowColor: "rgb(70, 83, 254)",
        shadowOpacity: 2,
        shadowOffset: {
            height: 5,
            width: 5,
        },
        shadowRadius: 0,
    }
})