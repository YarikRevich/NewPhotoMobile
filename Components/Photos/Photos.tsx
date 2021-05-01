import React, { useEffect, useState } from "react"
import { Text, View, FlatList, Image, Dimensions, ActivityIndicator } from "react-native"

//Types ...

import { PhotosType } from "./../../types/components/Photos"

//Styles ...

import PhotosStyle from "./../../constants/Photos"
import ActivityIndStyle from "./../../constants/ActivityIndicator"

const Photos = (props: PhotosType) => {
    const [cheked, setChecked] = useState(false);
    const [backup, setBackup] = useState(false)
    const [showDetailed, setShowDetailed] = useState(false);

    if (!cheked) {
        props.getLocalPhotos(setChecked)
    }

    if (!backup) {
        props.backupPhotos(setBackup)
    }


    const screenWith = Dimensions.get("window").width
    const numColumns = 3
    const size = screenWith / numColumns

    if (!cheked) {
        return <ActivityIndicator style={ActivityIndStyle.Indicator} size="large" color="#000000" />
    }

    return (
        <View>
            {props.photosPage.result != undefined ?
                (<FlatList

                    style={PhotosStyle.photos}
                    numColumns={numColumns}

                    data={props.photosPage.result}
                    renderItem={({ item, index }) => (
                        <View>
                            <Image style={{ width: size, height: size }} key={index} source={{ uri: `data:image/png;image/jpeg;base64,${item.photo}` }} />
                        </View>
                    )}
                />)
                : (
                    <View style={PhotosStyle.announcementContainer}>
                        <Text style={PhotosStyle.announcementText}>There are no photos!</Text>
                    </View>
                )
            }
        </View>
    )
}

export default Photos