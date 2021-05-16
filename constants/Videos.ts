import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    body: {
        marginTop: Dimensions.get("window").height / 100 * 3,
    },
    imageCover: {
        backgroundColor: "black",
        width: Dimensions.get("window").width / 100 * 10,
        height: Dimensions.get("window").height / 100 * 10,
    },
    image: {
        width: Dimensions.get("window").width / 100 * 7,
        height: Dimensions.get("window").height / 100 * 4,
        position: "absolute",
        bottom: 0,
        right: 0,
    },
    fullImage: {
        alignSelf: "flex-end",
        width: Dimensions.get("window").width / 100 * 7,
        height: Dimensions.get("window").height / 100 * 4,
    },
    video: {
        alignSelf: "center",
    },
    fullCover: {
        alignSelf: "center",
    }
})