import { StyleSheet } from "react-native"

const PanelStyle = StyleSheet.create({
    panel: {
        height: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cancel: {
        marginLeft: 10,
    },
    done: {
        marginRight: 10,
    }
})

const ChosenPhotoStyle = StyleSheet.create({
    chosen: {
        width: 20,
        height: 20,
        marginTop: 90,
        marginLeft: 95,
        borderRadius: 20,
        position: "absolute",
        backgroundColor: "blue",
    },
    text: {
        marginTop: 1,
        textAlign: "center",
        color: "white",
    },
    cover: {
        position: 'absolute',
        backgroundColor: "rgba(0,0,0, .2)",
        width: "95%",
        height: "100%",
        alignSelf: "center",
    }
})

export default StyleSheet.create({
    ...PanelStyle,
    ...ChosenPhotoStyle,
})