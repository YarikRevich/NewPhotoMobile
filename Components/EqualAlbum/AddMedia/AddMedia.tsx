import React, { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"

import ImageBrowserContainer from "../../ImageBrowser/ImageBrowserContainer"
import FormStyles from "../../../constants/Forms"
import type { Components } from "../../../types/components"

const AddPhotos = (props: Components.AddPhotosType) => {
    const [press, setPress] = useState(false);
    const [openBrowser, setOpenBrowser] = useState(false);
    const [toDelete, setToDelete] = useState([] as string[])
    const [photos, setPhotos] = useState([] as SentData.LocalPhotos<SentData.FileInfo>)
    const [videos, setVideos] = useState([] as SentData.LocalVideos<SentData.FileInfo>)

    const getMediaToDelete = (): string[] => {
        if (photos.length === 0 && videos.length === 0) return toDelete
        let r = Array.from(toDelete)
        for (let p of photos) {
            if (toDelete.includes(p.file)) {
                r.splice(toDelete.indexOf(p.file), 1)
            }
        }
        for (let p of videos) {
            if (toDelete.includes(p.file)) {
                r.splice(toDelete.indexOf(p.file), 1)
            }
        }
        return r
    }


    const handleSubmit = () => {
        props.onClose()

        const toDelete = getMediaToDelete()
        props.changeMedia((props.albumViewType == "Photo" ? "photos" : "videos"), props.albumName, photos, videos, toDelete)
    }

    return (
        <View>
            <ImageBrowserContainer
                albumViewType={props.albumViewType}
                visible={openBrowser}
                onClose={() => setOpenBrowser(false)}
                onDone={(photos: SentData.LocalPhotos<SentData.FileInfo>, videos: SentData.LocalVideos<SentData.FileInfo>, toDelete: string[]) => {
                    setPhotos(photos)
                    setVideos(videos)
                    setToDelete(toDelete)
                }}
            />
            <View style={{ ...FormStyles.block, marginTop: 170 }} >
                <TouchableOpacity onPress={() => setOpenBrowser(true)}>
                    <Text style={FormStyles.inputText}>Chose {props.albumViewType == "Photo" ? "photo" : "video"}</Text>
                </TouchableOpacity>
                <Text>{props.albumViewType == "Photo" ? photos.length : videos.length}: chosen {props.albumViewType == "Photo" ? "photos" : "videos"}</Text>
                <TouchableOpacity activeOpacity={1} style={press ? FormStyles.buttonPress : null} onPressOut={() => setPress(false)} onPressIn={() => setPress(true)} onPress={() => handleSubmit()}>
                    <View style={{ ...FormStyles.button, alignSelf: "center", marginTop: 20 }}>
                        <Text style={FormStyles.buttonText}>Confirm!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default AddPhotos