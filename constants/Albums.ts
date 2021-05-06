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
        fontSize: 15,
        fontWeight: "500",
        alignSelf: "center"
    }
})




export default StyleSheet.create({
    ...PhotoListStyle,
    ...ImageStyle,
    ...AlbumTitleStyle,
})