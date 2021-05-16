import { Dimensions, StyleSheet } from "react-native";

const PhotoListStyle = StyleSheet.create({
    photoList: {
        zIndex: 10000,
        position: "relative",
        alignSelf: "center",
    }
})

const ImageStyle = StyleSheet.create({
    image: {
        alignItems: "center",
        justifyContent: "center",
    }
})

const AlbumTitleStyle = StyleSheet.create({
    title: {
        color: "black",
        fontSize: Dimensions.get("window").height / 100 * 2,
        fontWeight: "500",
    },
    titleWraper: {
        backgroundColor: "aliceblue",
        width: Dimensions.get("window").width / 100 * 24,
        height: Dimensions.get("window").height / 100 * 4,
        borderColor: "black",
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,

        
        alignSelf: "center",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
})

const AnnouncementStyle = StyleSheet.create({
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




export default StyleSheet.create({
    ...PhotoListStyle,
    ...ImageStyle,
    ...AlbumTitleStyle,
    ...AnnouncementStyle,
})