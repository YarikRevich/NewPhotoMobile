import { StyleSheet, Dimensions } from "react-native"

/**
 * @todo Implements exceptable header styles 
 */
const exceptableHeaderStyles = StyleSheet.create({
    body: {
        backgroundColor: "aliceblue",
        height: 80
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        marginTop: 5
    }
})


/**
 * @todo Creates styles for banner messages 
*/
const messageHeaderBannerStyle = StyleSheet.create({
    message: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 5,
        paddingRight: 5,
        width: 300,
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

/**
 * @todo Creates the header types styles, namely: notAuhed and Authed ones
 */
const headerTypesStyles = StyleSheet.create({
    headerDrawerNotAuthed: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        height: 80,
        minWidth: "100%",
        backgroundColor: "aliceblue",
    },
    headerDrawerAuthed: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        height: 80,
        width: 400,
        backgroundColor: "aliceblue",
    },
    headerStack: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        height: 20,
        width: 200,
        backgroundColor: "aliceblue",
    }
})

/**
 * @todo Creates styles for header title
 */
const headerTitleStyles = StyleSheet.create({
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
})

/**
 * @todo Creates styles for header menu image
 */
const headerMenuImageStyles = StyleSheet.create({
    menuImage: {
        width: 20,
        height: 20,
        position: "absolute"
    },
})


export default StyleSheet.create({
    ...exceptableHeaderStyles,
    ...messageHeaderBannerStyle,
    ...headerTypesStyles,
    ...headerTitleStyles,
    ...headerMenuImageStyles,
})