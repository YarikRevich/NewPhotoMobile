import React, { useState, useRef } from "react";
import { Button, Modal, Text, View, Image, Dimensions, TouchableOpacity } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { Components } from "../../types/components";
import { Video } from "expo-av"

import ImageBrowserStyles from "./../../constants/ImageBrowser"

const Renderer = (props: Components.ImageBrowserRendererType) => {
    const video: React.MutableRefObject<Video> = useRef(null as any)
    const [videoStatus, setVideoStatus] = useState(false)

    if (!props.uri) return <></>

    return (
        <View style={{ width: props.size.width, height: props.size.height }} key={props.index}>
            <TouchableOpacity
                onPress={() => {
                    if (props.uri && props.equalAlbumPageHasSuchMedia(props.uri) && !props.toDelete.includes(props.file)) {
                        props.handlePressOnAddedOne(props.file)
                    } else {
                        props.handlePress(props.index)
                    }
                }}
                onLongPress={() => {
                    videoStatus ? video.current.pauseAsync() : video.current.playAsync()
                }}
            >
                {props.albumViewType == "Photo" ?
                    //If the renderer is used to chose photos

                    <Image style={{ width: props.size.width - 20, height: props.size.height - 20, alignSelf: "center" }} width={props.size.width - 10} height={props.size.height - 10} source={{ uri: props.uri }} />
                    :
                    //If the renderer is used to chose videos

                    <Video
                        ref={video}
                        style={{ ...ImageBrowserStyles.video, width: props.size.width - 10, height: props.size.height - 10 }}
                        resizeMode={"cover"}
                        source={{ uri: props.uri }}
                        onPlaybackStatusUpdate={(status: any) => setVideoStatus(status.isPlaying)}
                    />
                }
                <View style={{ ...ImageBrowserStyles.cover, opacity: (props.equalAlbumPageHasSuchMedia(props.uri) && !props.toDelete.includes(props.file) ? 1 : 0) }}>
                    <View style={ImageBrowserStyles.chosen}>
                        <Text style={ImageBrowserStyles.text}>✓</Text>
                    </View>
                </View>
                <View style={{ ...ImageBrowserStyles.chosen, opacity: props.chosenMedia.includes(props.index) ? 1 : 0 }}><Text style={ImageBrowserStyles.text}>{props.chosenMedia.indexOf(props.index) + 1}</Text></View>
            </TouchableOpacity>
        </View>
    )
}

const ImageBrowser = (props: Components.ImageBrowserType) => {
    const [chosenMedia, setChosenMedia] = useState([] as number[]);
    const [toDelete, setToDelete] = useState([] as string[]);

    const numColumns = 3
    const size = {
        width: Dimensions.get("window").width / numColumns,
        height: Dimensions.get("window").height / numColumns
    }

    const handlePress = (index: number) => {
        let n: number[] = Array.from(chosenMedia);
        if (n.includes(index)) {
            n.splice(chosenMedia.indexOf(index), 1)
        } else {
            n.push(index)
        }
        setChosenMedia(n)
    }

    const handlePressOnAddedOne = (file: string) => {
        setToDelete([...toDelete, file])
    }

    const handleDone = () => {
        let photos = [];
        let videos = [];
        for (let i of chosenMedia) {
            if (props.albumViewType == "Photo") {
                photos.push(props.mediaPage.photos.result[i])
            } else {
                videos.push(props.mediaPage.videos.result[i])
            }
        }
        setTimeout(() => {
            props.onClose()
            setTimeout(() => {
                setChosenMedia([])
            }, 100)
        }, 150)
        props.onDone(photos, videos, toDelete)
    }

    const equalAlbumPageHasSuchMedia = (f: string): boolean => {
        switch (props.albumViewType) {
            case "Photo":
                if (props.equalAlbumPage.photos.result) {
                    for (let i of props.equalAlbumPage.photos.result) {
                        if (i.uri === f) {
                            return true
                        }
                    }
                }
                break
            case "Video":
                if (props.equalAlbumPage.videos.result) {
                    for (let i of props.equalAlbumPage.videos.result) {
                        if (i.uri === f) {
                            return true
                        }
                    }
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
                    data={props.albumViewType == "Photo" ? props.mediaPage.photos.result : props.mediaPage.videos.result}
                    renderItem={({ item, index }) => (
                        <Renderer
                            albumViewType={props.albumViewType}
                            handlePressOnAddedOne={handlePressOnAddedOne}
                            handlePress={handlePress}
                            chosenMedia={chosenMedia}
                            toDelete={toDelete}
                            size={size}
                            index={index}
                            uri={item.uri}
                            file={item.file}
                            equalAlbumPageHasSuchMedia={equalAlbumPageHasSuchMedia}
                        />
                    )}
                >
                </FlatList>
            </View>
        </Modal >
    )
}

export default ImageBrowser