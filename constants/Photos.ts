import { StyleSheet } from "react-native"

export default StyleSheet.create({
    body: {
        height: "100%",
    },
    detailedPhotoView: {
        zIndex: 10000,
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)"
    },
    detailedPhotoCover: {
        height: 90,
        width: 90,
        marginBottom: -55,
        alignSelf: "flex-end"
    },
    detailedPhoto: {
        marginTop: 120,
        width: 340,
        height: 340,
        alignSelf: "center",
    },
    detailedPhotoCloseCross: {
        marginTop: 25,
        marginBottom: -70,
        width: 60,
        height: 60,
        alignSelf: "flex-end",
    },
    detailedPhotoCloseCrossOpacity: {
        height: 100,
    },
    photosCover: {
        zIndex: 3000,
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    photos: {
        zIndex: 1000,
        position: "relative",
        alignSelf: "center",
        marginTop: 20,
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