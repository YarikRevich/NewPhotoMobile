import React, { useState, useRef } from "react";
import { Modal, TouchableOpacity, Image, View, Share } from "react-native"
import { Components } from "../../../types/components";
import { Video } from "expo-av"
import CloseCross from "../../Interface/CloseCross/CloseCross"
import { getRandomFileName } from "../../../Helpers/utils";

import DetailedVideoViewStyle from "../../../constants/DetailedVideoView"

const DetailedVideoView = (props: Components.DetailedVideoViewType) => {
    const [fullState, setFullState] = useState(false);
    const [canOpen, setCanOpen] = useState(false);
    const fullVideo: React.MutableRefObject<Video> = useRef(null as any);

    if (canOpen) {
        setCanOpen(false)
        Share.share({ url: props.uri, title: getRandomFileName() + "." + props.extension })
    }

    return (
        <Modal animationType={"slide"} visible={props.visible}>
            <CloseCross onPress={props.onPress} />
            <TouchableOpacity activeOpacity={1} onPress={() => {
                fullState ? fullVideo.current.pauseAsync() : fullVideo.current.playAsync()
            }}>
                <View style={DetailedVideoViewStyle.fullCover}>
                    <Video
                        ref={fullVideo}
                        useNativeControls={false}
                        resizeMode={"cover"}
                        isLooping={true}
                        style={DetailedVideoViewStyle.fullVideo}
                        source={{ uri: props.uri }}
                        onPlaybackStatusUpdate={(v: any) => setFullState(v.isPlaying)}
                    />
                    <Image style={DetailedVideoViewStyle.fullImage}
                        width={DetailedVideoViewStyle.fullImage.width}
                        height={DetailedVideoViewStyle.fullImage.height}
                        source={(fullState ? require("./../../../assets/images/pausebutton.png") : require("./../../../assets/images/playbutton.png"))} />
                </View>
                <TouchableOpacity onPress={() => setCanOpen(true)}>
                    <Image style={DetailedVideoViewStyle.shareIcon} source={require("./../../../assets/images/share.png")} />
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    )
}

export default DetailedVideoView