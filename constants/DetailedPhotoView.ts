import { StyleSheet } from "react-native"

export default StyleSheet.create({
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
    detailedPhoto: {
        marginTop: 120,
        width: 340,
        height: 340,
        alignSelf: "center",
    },
})