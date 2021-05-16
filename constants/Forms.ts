import { Dimensions, StyleSheet } from "react-native"

/**
 * @todo Creates styles for form inputs 
 */
const formInputStyles = StyleSheet.create({
    input: {
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        marginTop: Dimensions.get("window").height / 100 * 4,
        paddingBottom: Dimensions.get("window").height / 100 * 4,
        width: Dimensions.get("window").width / 100 * 60,
    },
    inputLabel: {
        fontSize: Dimensions.get("window").height / 100 * 3.3,
        width: Dimensions.get("window").width / 100 * 40,
        alignSelf: "flex-start"
    },
    inputText: {
        marginTop: Dimensions.get("window").height / 100 * 1,
        alignSelf: "center",
        width: Dimensions.get("window").width / 100 * 67,
        padding: Dimensions.get("window").height / 100 * 1.5,
        fontSize: Dimensions.get("window").height / 100 * 4,
        borderWidth: 1.2,
        borderRadius: Dimensions.get("window").width / 100 * 8,
        borderColor: "grey",
    },
})

/**
 * @todo Creates form body styles ...
 */
const formBodyStyles = StyleSheet.create({
    body: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "white"
    },
    block: {
        paddingTop: Dimensions.get("window").height / 100 * 4,
        paddingBottom: Dimensions.get("window").height / 100 * 4,
        paddingLeft: Dimensions.get("window").width / 100 * 15,
        paddingRight: Dimensions.get("window").width / 100 * 15,
        borderRadius: 20,
        borderWidth: 2,
        margin: Dimensions.get("window").width / 100 * 14,
        borderColor: "#000000",
        backgroundColor: "aliceblue",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
})

/**
 * @todo Creates form button styles 
 */
const formButtonStyles = StyleSheet.create({
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get("window").width / 100 * 35,
        height: Dimensions.get("window").height / 100 * 7.5,
        borderRadius: Dimensions.get("window").height / 100 * 10,
        borderWidth: 1.2,
        borderColor: "blue",
        backgroundColor: "aliceblue"
    },
    buttonText: {
        fontSize: Dimensions.get("window").width / 100 * 5,
        fontWeight: "600",
    },
    buttonPress: {
        shadowColor: "rgb(70, 83, 254)",
        shadowOpacity: 2,
        shadowOffset: {
            height: 5,
            width: 5,
        },
        shadowRadius: 0,
    }
})


export default StyleSheet.create({
    ...formInputStyles,
    ...formBodyStyles,
    ...formButtonStyles
})