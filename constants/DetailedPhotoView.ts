import { Dimensions, StyleSheet } from "react-native"

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
        marginTop: Dimensions.get("window").height / 100 * 13,
        width: Dimensions.get("window").width / 100 * 90,
        height: Dimensions.get("window").height / 100 * 55,
        alignSelf: "center",
    },
    shareIcon: {
        width: Dimensions.get("window").width / 100 * 10,
        height: Dimensions.get("window").height / 100 * 4.5,
        marginTop: Dimensions.get("window").height / 100 * 14,
        marginLeft: Dimensions.get("window").width / 100 * 2,
    }
})