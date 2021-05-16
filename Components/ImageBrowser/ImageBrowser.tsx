import React, { useState } from "react";
import { Button, Modal, Text, View, Image, Dimensions, TouchableOpacity } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { Components } from "../../types/components";

import ImageBrowserStyles from "./../../constants/ImageBrowser"

const ImageBrowser = (props: Components.ImageBrowserType) => {
    const [chosenImages, setChosenImages] = useState([] as number[]);
    const [toDelete, setToDelete] = useState([] as string[]);

    const width = Dimensions.get("window").width
    const numColumns = 3
    const size = width / numColumns;

    const handlePress = (index: number, file: string) => {
        let n: number[] = Array.from(chosenImages);
        if (n.includes(index)) {
            n.splice(chosenImages.indexOf(index), 1)
        } else {
            n.push(index)
        }
        setChosenImages(n)
    }

    const handlePressOnAddedOne = (file: string) => {
        setToDelete([...toDelete, file])
    }

    const handleDone = () => {
        let r: SentData.LocalPhotos<SentData.FileInfo> = [];
        for (let i of chosenImages) {
            r.push(props.mediaPage.photos.result[i])
        }
        setTimeout(() => {
            props.onClose()
            setTimeout(() => {
                setChosenImages([])
            }, 100)
        }, 150)
        props.onDone(r, toDelete)
    }

    const equalAlbumPageHasSuchPhoto = (f: string): boolean => {
        for (let i of props.equalAlbumPage.result) {
            if (i.photo === f) {
                return true
            }
        }
        return false
    }

    return (
        <Modal animationType={"fade"} visible={props.visible}>
            <View style={ImageBrowserStyles.panel}>
                <View style={ImageBrowserStyles.cancel}>
                    <Button onPress={() => props.onClose()} title={"Cancel"}></Button>
                </View>
                <View style={ImageBrowserStyles.done}>
                    <Button onPress={() => handleDone()} title={"Done"}></Button>
                </View>
            </View>
            <View>
                <FlatList
                    numColumns={numColumns}
                    data={props.mediaPage.photos.result}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ width: size, height: size }} key={index}>
                                <TouchableOpacity onPress={() => {
                                    if (equalAlbumPageHasSuchPhoto(item.file) && !toDelete.includes(item.file)) {
                                        handlePressOnAddedOne(item.file)
                                    } else {
                                        handlePress(index, item.file)
                                    }
                                }}>
                                    <Image style={{ width: size - 20, height: size - 20, alignSelf: "center" }} width={size - 10} height={size - 10} source={{ uri: `data:image/jpeg;image/png;base64,${item.file}` }} />
                                    <View style={{ ...ImageBrowserStyles.cover, opacity: (equalAlbumPageHasSuchPhoto(item.file) && !toDelete.includes(item.file) ? 1 : 0) }}>
                                        <View style={ImageBrowserStyles.chosen}>
                                            <Text style={ImageBrowserStyles.text}>✓</Text>
                                        </View>
                                    </View>
                                    <View style={{ ...ImageBrowserStyles.chosen, opacity: chosenImages.includes(index) ? 1 : 0 }}><Text style={ImageBrowserStyles.text}>{chosenImages.indexOf(index) + 1}</Text></View>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                >
                </FlatList>
            </View>
        </Modal >
    )
}

export default ImageBrowser