import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    body: {
        height: "100%",
    },
    // photosCover: {
    //     zIndex: 3000,
    //     position: "absolute",
    //     height: "100%",
    //     width: "100%",
    //     backgroundColor: "rgba(0, 0, 0, 0.4)"
    // },
    photos: {
        zIndex: 1000,
        // position: "relative",
        marginTop: Dimensions.get("window").height / 100 * 3,
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