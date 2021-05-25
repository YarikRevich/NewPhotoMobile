import { Dimensions, StyleSheet } from "react-native"

const AddPanelStyle = StyleSheet.create({
    panel: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: -Dimensions.get("window").height / 100 * 4,
    },
    menuKebab: {
        width: Dimensions.get("window").width / 100 * 10,
        height: Dimensions.get("window").height / 100 * 10,
        marginTop: Dimensions.get("window").height / 100 * 5,
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