import { StyleSheet } from "react-native"

/**
 * @todo Creates styles for form inputs 
 */
const formInputStyles = StyleSheet.create({
    input: {
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        marginTop: 10,
        paddingBottom: 20,
        width: 150,
    },
    inputLabel: {
        fontSize: 23
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
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 70,
        paddingRight: 70,
        borderRadius: 20,
        borderWidth: 2,
        margin: 25,
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
        width: 130,
        height: 50,
        borderRadius: 20,
        borderWidth: 1.2,
        borderColor: "blue",
        backgroundColor: "aliceblue"
    },
    buttonText: {
        fontSize: 23,
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