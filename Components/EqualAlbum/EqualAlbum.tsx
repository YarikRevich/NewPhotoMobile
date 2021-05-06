/// <reference path="./../../types/components.ts" />

import messagepublisher from "messagepublisher";
import React, { useEffect } from "react";
import { Text } from "react-native"

import type { Components } from "./../../types/components"

const EqualAlbum = (props: Components.EqualAlbumType) => {

    useEffect(() => {
        if (!props.navigator.route.params) {
            messagepublisher.add("The name of the album is empty")
            return
        }

        const albumName = Object.assign(props.navigator.route.params)["albumName"];
        props.getEqualAlbum(albumName);
    }, [])

    console.log(props.equalAlbumPage)

    return <Text></Text>
}

export default EqualAlbum