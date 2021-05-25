import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    AuthIndicator: {
        alignSelf: "center",
        marginTop: 120
    },
    PhotoLoadingIndicator: {
        alignSelf: "center",
        marginTop: Dimensions.get("window").height / 100 * 10,
    },
    BackupIndicator: {
        height: Dimensions.get("window").height / 100 * 2.5,
        backgroundColor: "grey"
    },
})