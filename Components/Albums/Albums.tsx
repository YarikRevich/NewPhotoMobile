/// <reference path="./../../types/components.ts" />

import React, { useEffect, useState } from "react";
import { Text, View, Image, Dimensions, Modal } from "react-native"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import type { Components } from "./../../types/components"

import AddCross from "./../AddCross/AddCross"
import CloseCross from "./../CloseCross/CloseCross"
import AddAlbumContainer from "./AddAlbum/AddAlbumContainer"

//Styles ...

import AlbumsStyle from "./../../constants/Albums";

const Albums = (props: Components.AlbumsType) => {
    const [openAddPanel, setOpenAddPanel] = useState(false);
    const [reset, setReset] = useState(0);



    useEffect(() => {
        props.getAlbums()
        
        props.navigator.navigation.addListener("state", (v) => {
            const data = v.data as any
            if (data.state.index == 0){
                props.navigator.navigation.removeListener("state", () => {})
                setReset(reset + 1)
            }
        })
    }, [reset])

    const width = Dimensions.get("window").width;
    const numColumns = 3;
    const size = width / numColumns;

    return (
        <View>
            <AddCross onPress={() => setOpenAddPanel(true)} />
            <Modal animationType={"slide"} visible={openAddPanel}>
                <CloseCross onPress={() => setOpenAddPanel(false)} />
                <AddAlbumContainer onClose={() => setOpenAddPanel(false)} onUpdate={() => setReset(reset + 1)} />
            </Modal>
            {props.albumsPage.result ?
                <FlatList
                    style={AlbumsStyle.photoList}
                    numColumns={numColumns}
                    keyExtractor={(item, index) => index.toString()}
                    data={props.albumsPage.result}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <TouchableOpacity onPress={() => {
                                    props.navigator.navigation.push("EqualAlbum", { "albumName": item.name })
                                }}>
                                    {item.latestphoto ?
                                        <View>
                                            <Image style={{ width: size, height: size }} width={size} height={size} source={{ uri: "data:image/jpeg;image/png;base64," + item.latestphoto }} />
                                        </View>
                                        :
                                        <View style={{ width: size, height: size, ...AlbumsStyle.image }}>
                                            <Image source={require("../../assets/images/notfound.png")} width={48} height={48} />
                                        </View>
                                    }
                                    <View style={AlbumsStyle.titleWraper}>
                                        <Text style={AlbumsStyle.title}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                ></FlatList >
                : (
                    <View style={AlbumsStyle.announcementContainer}>
                        <Text style={AlbumsStyle.announcementText}>There are no albums!</Text>
                    </View>
                )
            }
        </View >
    )
}

export default Albums