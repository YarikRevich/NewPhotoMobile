import { StyleSheet, Dimensions } from "react-native"

export default StyleSheet.create({
    header: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        height: 80,
        minWidth: "100%",
        backgroundColor: "aliceblue",
    },
    title: {
        fontSize: 21,
        fontWeight: "bold",
        padding: 30,
        marginTop: 10,
    },
    titleContainer: {
        width: 250,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    menuImage: {
        width: 20,
        height: 20,
        position: "absolute"
    },
    message: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        minHeight: 70,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        marginTop: 100,
        alignSelf: "center",
        backgroundColor: "aliceblue",
        position: "absolute",
    },
    messageContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    messageText: {
        fontSize: 15,
        fontWeight: "600",
        textAlign: "center",
    }
})