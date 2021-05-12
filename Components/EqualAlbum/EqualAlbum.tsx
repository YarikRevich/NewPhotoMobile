/// <reference path="./../../types/components.ts" />

import messagepublisher from "messagepublisher";
import React, { useEffect, useState } from "react";
import { Modal, View, FlatList, Image, Text, Dimensions, TouchableOpacity } from "react-native"

import AddCross from "./../AddCross/AddCross"
import CloseCross from "./../CloseCross/CloseCross"
import AddPhotosContainer from "./AddPhotos/AddPhotosContainer"
import DetailedPhotoView from "./../DetailedPhotoView/DetailedPhotoView"

import type { Components } from "./../../types/components"

import EqualAlbumStyle from "./../../constants/EqualAlbum"

const EqualAlbum = (props: Components.EqualAlbumType) => {
    const [openAddPanel, setOpenAddPanel] = useState(false);
    const [reset, setReset] = useState(0);
    const [detailed, setDetailed] = useState({ show: false, photo: "" });

    if (!props.navigator.route.params) {
        messagepublisher.add("The name of the album is empty")
        return <></>
    }
    const albumName = Object.assign(props.navigator.route.params)["albumName"];

    useEffect(() => {
        props.getEqualAlbum(albumName);
    }, [reset])

    const width = Dimensions.get("window").width;
    const numColumns = 3
    const size = width / numColumns

    return (
        <View>
            <DetailedPhotoView visible={detailed.show} photo={detailed.photo} onPress={() => setDetailed({ show: false, photo: "" })} />
            <View style={EqualAlbumStyle.panel}>
                <AddCross onPress={() => setOpenAddPanel(true)} />
                <Modal animationType={"slide"} visible={openAddPanel}>
                    <CloseCross onPress={() => setOpenAddPanel(false)} />
                    <AddPhotosContainer albumName={albumName} onClose={() => setOpenAddPanel(false)} onUpdate={() => setReset(reset + 1)} />
                </Modal>
            </View>
            {props.equalAlbumPage.result ?
                <FlatList
                    numColumns={numColumns}
                    keyExtractor={(item, index) => index.toString()}
                    data={props.equalAlbumPage.result}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                setDetailed({ show: true, photo: item.photo })
                            }}>
                                <Image style={{ width: size, height: size }} source={{ uri: `data:image/jpeg;image/png;base64,${item.photo}` }} />
                            </TouchableOpacity>
                        )
                    }}
                >
                </FlatList>
                : null
                    // <View style={EqualAlbumStyle.announcementContainer}>
                    //     <Text style={EqualAlbumStyle.announcementText}>There are no photos!</Text>
                    // </View>
            }
        </View>
    )
}

export default EqualAlbum