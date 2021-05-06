import React from "react";
import { Modal, Image } from "react-native"

import type { Components } from "./../../types/components"

import CloseCross from "./../CloseCross/CloseCross"

import DetailedPhotoViewStyle from "./../../constants/DetailedPhotoView"

const DetailedPhotoView = (props: Components.DetailedPhotoViewType) => {
    return (
        <Modal animationType={"slide"} visible={props.visible} style={DetailedPhotoViewStyle.detailedPhotoView}>
            <CloseCross onPress={props.onPress} />
            <Image style={DetailedPhotoViewStyle.detailedPhoto} source={{ uri: `data:image/png;image/jpeg;base64,${props.photo}` }}></Image>
        </Modal>
    )
}

export default DetailedPhotoView