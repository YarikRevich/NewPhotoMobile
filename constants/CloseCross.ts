import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    closeCrossCover: {
        height: Dimensions.get("window").height / 100 * 10,
        width: Dimensions.get("window").height / 100 * 10,
        marginTop: Dimensions.get("window").height / 100 * 2,
        marginRight: Dimensions.get("window").height / 100 * 1,
        alignSelf: "flex-end",
        zIndex: 1000
    },
    closeCrossPhoto: {
        marginTop: 25,
        marginBottom: -70,
        width: 60,
        height: 60,
        alignSelf: "flex-end",
    },
    closeCrossPhotoOpacity: {
        height: 100,
    },
})