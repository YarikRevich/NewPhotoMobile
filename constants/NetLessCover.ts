import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    body: {
        display: "flex",
        bottom: Dimensions.get("window").height / 100 * 50,
        left: 0,
        justifyContent: "center",
        position: "absolute",
        zIndex: 20000,
        width: "40%",
        height: "15%",
        borderBottomRightRadius: 20,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "rgba(255, 204, 0, .95)"

    },
    text: {
        color: "white",
        fontSize: Dimensions.get("window").fontScale * 15,
        alignSelf: "center",
        textAlign: "center",
        fontWeight: "bold",
    },
    closeCross: {
        alignSelf: "flex-end",
        width: Dimensions.get("window").width / 100 * 6,
        height: Dimensions.get("window").height / 100 * 3.5,
        marginBottom: Dimensions.get("window").width / 100 *2,
        marginRight: Dimensions.get("window").width / 100 *2,
    }
})