import React, { useState } from "react"
import { Text, View, FlatList } from "react-native"

//Types ...

import { PhotosType } from "./../../types/components/Photos"

//Styles ...

import PhotosStyle from "./../../constants/Photos"

const Photos = (props: PhotosType) => {
    const [cheked, setChecked] = useState(false);

    if (!cheked) {
        props.getPhotos(setChecked)
    }

    return (
        <View>
            {props.photoPage != undefined ?
                (<FlatList
                    keyExtractor={(_, n) => n.toString()}
                    data={props.photoPage.result}
                    renderItem={(props) => { return <Text>{props.item.tags}</Text> }}
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