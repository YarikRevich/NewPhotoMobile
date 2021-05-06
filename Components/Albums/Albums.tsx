/// <reference path="./../../types/components.ts" />

import React, { useEffect, useState } from "react";
import { Text, View, Image, Dimensions, Modal } from "react-native"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import type { Components } from "./../../types/components"

import AddCross from "./../AddCross/AddCross"
import CloseCross from "./../CloseCross/CloseCross"

//Styles ...

import AlbumsStyle from "./../../constants/Albums";

const Albums = (props: Components.AlbumsType) => {
    const [openAddPanel, setOpenAddPanel] = useState(false);

    useEffect(() => {
        props.getAlbums()
    }, [])

    const width = Dimensions.get("window").width;
    const numColumns = 3;
    const size = width / numColumns;

    return (
        <View>
            <AddCross onPress={() => setOpenAddPanel(true)}/>
            <Modal animationType={"slide"} visible={openAddPanel}>
                <CloseCross onPress={() => setOpenAddPanel(false)}/>
            </Modal>
            {props.albumsPage.result.length != 0 ?
                <FlatList
                    style={AlbumsStyle.photoList}
                    numColumns={numColumns}
                    keyExtractor={(item, index) => index.toString()}
                    data={props.albumsPage.result}
                    renderItem={({ item }) => {

                        return (
                            <View>
                                <TouchableOpacity onPress={() => props.navigator.navigation.push("EqualAlbum", { "albumName": item.name })}>
                                    {item.latestPhoto ?
                                        <Image style={{ width: size, height: size }} source={{ uri: `data:image/jpg;image/png;base64,${item.latestPhoto}` }} />
                                        :
                                        <View style={{ width: size, height: size, ...AlbumsStyle.image }}>
                                            <Image source={require("../../assets/images/notfound.png")} width={48} height={48} />
                                        </View>
                                    }
                                    <Text style={AlbumsStyle.title}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                ></FlatList>
                : null
            }
        </View >
    )
}

export default Albums