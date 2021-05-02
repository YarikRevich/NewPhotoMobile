import React, { useEffect, useState } from "react"
import { Text, View, FlatList, Image, Dimensions, ActivityIndicator } from "react-native"

//Types ...

import { PhotosType } from "./../../types/components/Photos"

//Styles ...

import PhotosStyle from "./../../constants/Photos"
import ActivityIndStyle from "./../../constants/ActivityIndicator"
import { TouchableOpacity } from "react-native-gesture-handler"

const Photos = (props: PhotosType) => {
    const [checked, setChecked] = useState(false);
    const [backup, setBackup] = useState(false)
    const [detailed, setDetailed] = useState({ show: false, photo: "" });

    if (!checked) {
        props.getLocalPhotos(setChecked)
    }

    if (!backup) {
        props.backupPhotos(setBackup)
    }

    const screenWith = Dimensions.get("window").width
    const numColumns = 3
    const size = screenWith / numColumns

    if (!checked) {
        return <ActivityIndicator style={ActivityIndStyle.Indicator} size="large" color="#000000" />
    }

    return (
        <View style={PhotosStyle.body}>
            {detailed.show ? (
                <View style={PhotosStyle.detailedPhotoView}>
                    <View style={PhotosStyle.detailedPhotoCover}>
                        <TouchableOpacity style={PhotosStyle.detailedPhotoCloseCrossOpacity} onPress={() => setDetailed({show: false, photo: ""})}>
                            <Image style={PhotosStyle.detailedPhotoCloseCross} source={require("./../../assets/images/closecross.png")} />
                        </TouchableOpacity>
                    </View>
                    <Image style={PhotosStyle.detailedPhoto} source={{ uri: `data:image/png;image/jpeg;base64,${detailed.photo}` }}></Image>
                </View>
            ) : null}
            {props.photosPage.result != undefined ?
                (<FlatList
                    style={PhotosStyle.photos}
                    numColumns={numColumns}
                    data={props.photosPage.result}
                    renderItem={({ item, index }) => (
                        <View>
                            <TouchableOpacity onPress={() => setDetailed({ show: true, photo: item.photo })}>
                                <Image style={{ width: size, height: size }} key={index} source={{ uri: `data:image/png;image/jpeg;base64,${item.photo}` }} />
                            </TouchableOpacity>
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