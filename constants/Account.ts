import { Dimensions, StyleSheet } from "react-native"

const avatarStyles = StyleSheet.create({
    avatarCover: {
        zIndex: 3000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get("window").width / 100 * 35,
        height: Dimensions.get("window").width / 100 * 35,
        borderRadius: 80,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    avatar: {
        width: Dimensions.get("window").width / 100 * 35,
        height: Dimensions.get("window").width / 100 * 35,
        borderRadius: 70,
        alignSelf: "center",
        position: "absolute",
    },
})

const accountInfoStyles = StyleSheet.create({
    accountInfo: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        width: Dimensions.get("window").width / 100 * 85,
        height: Dimensions.get("window").width / 100 * 85,
        backgroundColor: "aliceblue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: Dimensions.get("window").height / 100 * 20,
    },
    accountInfoRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get("window").width / 100 * 70,
        height: Dimensions.get("window").width / 100 * 14,
        borderWidth: 1.2,
        borderColor: "black",
        borderRadius: 23,
    },
    accountInfoRowText: {
        flex: 2.25,
        textAlign: "center",
        fontSize: Dimensions.get("window").width / 100 * 5,
        fontWeight: "600",
    },
    accountInfoRowTextPlaceholder: {
        flex: 2.5,
        color: "grey",
        marginLeft: Dimensions.get("window").width / 100 * 5,
        textAlign: "left",
        fontSize: Dimensions.get("window").width / 100 * 5,
        fontWeight: "600",
    },
})

const bodyStyles = StyleSheet.create({
    account: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: Dimensions.get("window").height,
    },
})

export default StyleSheet.create({
    ...avatarStyles,
    ...accountInfoStyles,
    ...bodyStyles,

    block: {
        width: Dimensions.get("window").width / 100 * 30,
        height: Dimensions.get("window").width / 100 * 30,
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
        width: Dimensions.get("window").width / 100 * 35,
        height: Dimensions.get("window").width / 100 * 14,
        borderRadius: 20,
        borderWidth: 1.2,
        borderColor: "blue",
        backgroundColor: "aliceblue"
    },
    confirmButtonText: {
        fontSize: Dimensions.get("window").width / 100 * 6.5,
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
    },

})