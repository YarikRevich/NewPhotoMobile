import { Dimensions, StyleSheet } from "react-native"

const AddPanelStyle = StyleSheet.create({
    panel: {
        marginTop: -15,
    }
})

const AnnouncementStyle = StyleSheet.create({
    announcementContainer: {
        marginTop: Dimensions.get("window").height / 100 * 20,
    },
    announcementText: {
        textAlign: "center",
        fontSize: Dimensions.get("window").fontScale * 15,
        fontWeight: "600",
    },
})

export default StyleSheet.create({
    ...AddPanelStyle,
    ...AnnouncementStyle,
})