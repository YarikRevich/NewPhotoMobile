import { StyleSheet } from "react-native";

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
        fontSize: 15,
        fontWeight: "500",
        marginLeft: 3,
    },
    titleWraper: {
        marginTop: 90, 
        marginLeft: 30,
        backgroundColor: "aliceblue",
        width: 90,
        height: 35,
        borderColor: "black",
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderTopLeftRadius: 20,
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