import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    body: {
        height: "100%",
    },
    photos: {
        zIndex: 1000,
        // position: "relative",
        marginTop: Dimensions.get("window").height / 100 * 5,
    },
    announcementContainer: {
        width: 300,
        height: 100,
        marginTop: 120,
        alignSelf: "center",
        justifyContent: "center",
        position: "absolute",
    },
    announcementText: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "600",
    },
})