import { StyleSheet, Dimensions } from "react-native"

const standartHeader = StyleSheet.create({
    header: {
        backgroundColor: "aliceblue"
    }
})

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
        width: Dimensions.get("window").width / 100 * 90,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: Dimensions.get("window").width / 100 * 12,
        marginTop: Dimensions.get("window").height / 100 * 10,
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
        fontSize: Dimensions.get("window").width / 100 * 4,
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
        alignSelf: "center",

        height: Dimensions.get("screen").height / 100 * 10,
        width: Dimensions.get("window").width,
        backgroundColor: "aliceblue",
    },
    headerStack: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",

        height: Dimensions.get("window").height / 100 * 3.5,
        width: Dimensions.get("window").width / 100 * 29,
        marginBottom: Dimensions.get("window").height / 100 * 1,
        backgroundColor: "aliceblue",
    }
})

/**
 * @todo Creates styles for header title
 */
const headerTitleStyles = StyleSheet.create({
    title: {
        marginLeft: Dimensions.get("screen").height / 100 * 2,
        fontSize: Dimensions.get("screen").height / 100 * 3,
        fontWeight: "bold",
    },
    titleContainer: {
        width: Dimensions.get("screen").height / 100 * 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
})

/**
 * @todo Creates styles for header menu image
 */
const headerMenuImageStyles = StyleSheet.create({
    menuImage: {
        width: Dimensions.get("window").width / 100 * 6,
        height: Dimensions.get("window").width / 100 * 6,
    },
})


const stackHeaderStyle = StyleSheet.create({
    headerStackStyle: {
        backgroundColor: "aliceblue",
    },
    headerStackTitleStyle: {
        fontSize: 20,
        fontWeight: "700",
    }
})

const avatarStyle = StyleSheet.create({
    avatarCover: {
        height: Dimensions.get("screen").height / 100 * 9,
        borderRadius: 50,
    },
    avatar: {
        alignSelf: "center",
        width: Dimensions.get("screen").height / 100 * 12,
        height: Dimensions.get("screen").height / 100 * 12,
        borderRadius: 50,
    }
})


export default StyleSheet.create({
    ...exceptableHeaderStyles,
    ...messageHeaderBannerStyle,
    ...headerTypesStyles,
    ...headerTitleStyles,
    ...headerMenuImageStyles,
    ...stackHeaderStyle,
    ...avatarStyle,
    ...standartHeader
})