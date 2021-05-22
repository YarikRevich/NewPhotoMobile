import React, { useState } from "react";
import { Modal, Image, TouchableOpacity, Share } from "react-native"

import type { Components } from "./../../types/components"

import CloseCross from "./../CloseCross/CloseCross"
import DetailedPhotoViewStyle from "./../../constants/DetailedPhotoView"
import { getRandomFileName } from "../../Helpers/utils";

const DetailedPhotoView = (props: Components.DetailedPhotoViewType) => {
    const [canOpen, setCanOpen] = useState(false);

    if (canOpen) {
        setCanOpen(false)
        Share.share({ url: props.uri, title: getRandomFileName() + "." + props.extension })
    }

    return (
        <Modal animationType={"slide"} visible={props.visible} style={DetailedPhotoViewStyle.detailedPhotoView}>
            <CloseCross onPress={props.onPress} />
            <Image style={DetailedPhotoViewStyle.detailedPhoto} source={{ uri: props.uri }}></Image>
            <TouchableOpacity onPress={() => setCanOpen(true)}>
                <Image style={DetailedPhotoViewStyle.shareIcon} source={require("./../../assets/images/share.png")} />
            </TouchableOpacity>
        </Modal>
    )
}

export default DetailedPhotoView