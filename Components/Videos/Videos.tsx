import React, { useRef, useState } from "react"
import { Dimensions, Image, View, TouchableOpacity, FlatList, Modal, Share } from "react-native"
import { Components } from "../../types/components";
import { Video } from "expo-av"
import CloseCross from "./../CloseCross/CloseCross"

import VideoStyles from "./../../constants/Videos"
import { getRandomFileName } from "../../Helpers/utils";

const EqualVideo = (props: Components.EqualVideoType) => {
    const video: React.MutableRefObject<Video> = useRef(null as any)
    const fullVideo: React.MutableRefObject<Video> = useRef(null as any);
    const [full, setFull] = useState(false);
    const [fullState, setFullState] = useState(false);
    const [canOpen, setCanOpen] = useState(false);
    const [state, setState] = useState(false);
    const [click, setClick] = useState({ lastClick: Date.now(), clicks: 0 });

    if (!props.item.uri) return <></>

    if (canOpen) {
        setCanOpen(false)
        Share.share({ url: props.item.uri, title: getRandomFileName() + "." + props.item.extension })
    }

    return (
        <View>
            <Modal animationType={"slide"} visible={full}>
                <CloseCross onPress={() => setFull(false)} />
                <TouchableOpacity activeOpacity={1} onPress={() => {
                    fullState ? fullVideo.current.pauseAsync() : fullVideo.current.playAsync()
                }}>
                    <View style={VideoStyles.fullCover}>
                        <Video
                            ref={fullVideo}
                            useNativeControls={false}
                            resizeMode={"cover"}
                            isLooping={true}
                            style={{ ...VideoStyles.video, marginTop: props.fullSize.width / 100 * 10, width: props.fullSize.width, height: props.fullSize.height }}
                            source={{ uri: props.item.uri }}
                            onPlaybackStatusUpdate={(v: any) => setFullState(v.isPlaying)}
                        />
                        <Image style={VideoStyles.fullImage}
                            width={VideoStyles.fullImage.width}
                            height={VideoStyles.fullImage.height}
                            source={(fullState ? require("./../../assets/images/pausebutton.png") : require("./../../assets/images/playbutton.png"))} />
                    </View>
                    <TouchableOpacity onPress={() => setCanOpen(true)}>
                        <Image style={VideoStyles.shareIcon} source={require("./../../assets/images/share.png")} />
                    </TouchableOpacity>

                </TouchableOpacity>
            </Modal>
            <View style={{ width: props.size.width, height: props.size.height }}>
                <TouchableOpacity activeOpacity={1} onPress={() => {
                    if (Date.now() - click.lastClick <= 600 && click.clicks == 1) {
                        setFull(true)
                        setClick({ ...click, clicks: 0 })
                        video.current.pauseAsync()
                    }

                    setClick({ lastClick: Date.now(), clicks: click.clicks + 1 })

                    if (click.clicks == 1) {
                        setClick({ ...click, clicks: 0 })
                    }

                    state && !full ? video.current.pauseAsync() : video.current.playAsync()
                }}>
                    <Video
                        ref={video}
                        useNativeControls={false}
                        isLooping={true}
                        resizeMode={"cover"}
                        style={{ ...VideoStyles.video, width: props.size.width - 10, height: props.size.height - 10 }}
                        source={{ uri: props.item.uri }}
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

    const fullSize = {
        width: Dimensions.get("window").width / 100 * 95,
        height: Dimensions.get("window").height / 100 * 75,
    }

    return props.mediaPage.videos.result ? (
        <FlatList
            style={VideoStyles.body}
            numColumns={numColumns}
            data={props.mediaPage.videos.result}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <EqualVideo item={item} size={size} fullSize={fullSize} />}
        ></FlatList>
    ) : null
}

export default Videos