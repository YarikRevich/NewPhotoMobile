import {Dimensions, StyleSheet} from "react-native"

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
        width: Dimensions.get("window").width / 100 * 90,
        height: Dimensions.get("window").height / 100 * 35,
        borderRadius: Dimensions.get("window").width / 100 * 10,
        borderWidth: 2,
        borderColor: "#000000",
        backgroundColor: "aliceblue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    textAuthor: {
        fontSize: Dimensions.get("window").width / 100 * 6,
    },
    textReserved: {
        marginTop: Dimensions.get("window").height / 100 * 2,
        fontSize: Dimensions.get("window").width / 100 * 5,
    },
})