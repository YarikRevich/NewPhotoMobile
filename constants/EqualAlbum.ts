import { StyleSheet } from "react-native"

const AddPanelStyle = StyleSheet.create({
    panel: {
        marginTop: -15,
    }
})

const AnnouncementStyle = StyleSheet.create({
    announcementContainer: {
        marginTop: 100,
        // width: 300,
        // height: 100,
        // marginTop: -200,
        // alignSelf: "center",
        // justifyContent: "center",
        // position: "absolute",
    },
    announcementText: {
        textAlign: "center",
        fontSize: 40,
        fontWeight: "600",
    },
})

export default StyleSheet.create({
    ...AddPanelStyle,  
    ...AnnouncementStyle,
})