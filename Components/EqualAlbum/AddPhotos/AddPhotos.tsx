import React, { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"

import ImageBrowserContainer from "./../../ImageBrowser/ImageBrowserContainer"
import FormStyles from "./../../../constants/Forms"
import type { Components } from "./../../../types/components"

const AddPhotos = (props: Components.AddPhotosType) => {
    const [press, setPress] = useState(false);
    const [openBrowser, setOpenBrowser] = useState(false);
    const [photos, setPhotos] = useState([[] as SentData.LocalPhotos, [] as string[]]);

    const getPhotosToDelete = (): string[] => {
        if (photos[0].length == 0) return photos[1] as string[]
        let r: string[] = photos[1] as string[];
        for (let p of photos[0]) {
            if (typeof p != "string") {
                let d = photos[1] as string[]
                if (d.includes(p.file)) {
                    r.splice(d.indexOf(p.file), 1)
                }
            }
        }
        return r
    }

    const handleSubmit = () => {
        props.onClose()
        setTimeout(props.onUpdate, 100)

        const toDelete = getPhotosToDelete()

        const data = photos[0] as SentData.LocalPhotos
        props.addPhotos(props.albumName, data, toDelete)
    }

    return (
        <View>
            <ImageBrowserContainer visible={openBrowser} onClose={() => setOpenBrowser(false)} onDone={(data: SentData.LocalPhotos, toDelete: string[]) => setPhotos([data, toDelete])} />
            <View style={{ ...FormStyles.block, marginTop: 170 }} >
                <TouchableOpacity onPress={() => setOpenBrowser(true)}>
                    <Text style={FormStyles.inputText}>Chose photo</Text>
                </TouchableOpacity>
                <Text>{photos[0].length}: chosen photos</Text>
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