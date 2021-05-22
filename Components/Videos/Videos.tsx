import React, { useRef, useState } from "react"
import { Dimensions, Image, View, TouchableOpacity, FlatList, PushNotification } from "react-native"
import { Components } from "../../types/components";
import { Video } from "expo-av"
import DetailedVideoView from "./../DetailedVideoView/DetailedVideoView"

import VideoStyles from "./../../constants/Videos"


export const EqualVideo = (props: Components.EqualVideoType) => {
    const video: React.MutableRefObject<Video> = useRef(null as any)
    const [openDetailedView, setOpenDetailedView] = useState(false);

    const [state, setState] = useState(false);
    const [click, setClick] = useState({ lastClick: Date.now(), clicks: 0 });

    if (!props.uri) return <></>

    return (
        <View>
            <DetailedVideoView uri={props.uri} extension={props.extension} visible={openDetailedView} onPress={() => setOpenDetailedView(false)} />
            <View style={{ width: props.size.width, height: props.size.height }}>
                <TouchableOpacity activeOpacity={1} onPress={() => {
                    if (Date.now() - click.lastClick <= 600 && click.clicks == 1) {
                        setOpenDetailedView(true)
                        setClick({ ...click, clicks: 0 })
                        video.current.pauseAsync()
                    }

                    setClick({ lastClick: Date.now(), clicks: click.clicks + 1 })

                    if (click.clicks == 1) {
                        setClick({ ...click, clicks: 0 })
                    }

                    state && !openDetailedView ? video.current.pauseAsync() : video.current.playAsync()
                }}>
                    <Video
                        ref={video}
                        useNativeControls={false}
                        isLooping={true}
                        resizeMode={"cover"}
                        style={{ ...VideoStyles.video, width: props.size.width - 10, height: props.size.height - 10 }}
                        source={{ uri: props.uri }}
                        onPlaybackStatusUpdate={(v: any) => setState(v.isPlaying)}
                    />
                    <Image style={VideoStyles.image}
                        width={VideoStyles.image.width}
                        height={VideoStyles.image.height}
                        source={(state ? require("./../../assets/images/pausebutton.png") : require("./../../assets/images/playbutton.png"))} />
                </TouchableOpacity>
            </View>
        </View>)
}

const Videos = (props: Components.VideosType) => {
    const numColumns = 3
    const size = {
        width: Dimensions.get("window").width / numColumns,
        height: Dimensions.get("window").height / numColumns,
    }

    return props.mediaPage.videos.result ? (
        <FlatList
            style={VideoStyles.body}
            numColumns={numColumns}
            data={props.mediaPage.videos.result}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <EqualVideo uri={item.uri} extension={item.extension} size={size} />}
        ></FlatList>
    ) : null
}

export default Videos