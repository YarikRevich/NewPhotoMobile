import {StyleSheet} from "react-native"

export default StyleSheet.create({
    aboutContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    aboutBox: {
        width: 300,
        height: 300,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#000000",
        backgroundColor: "aliceblue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    textAuthor: {
        fontSize: 22,
    },
    textReserved: {
        marginTop: 8,
        fontSize: 22,
    },
})