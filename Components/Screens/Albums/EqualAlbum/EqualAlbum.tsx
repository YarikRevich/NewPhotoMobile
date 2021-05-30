/// <reference path="./../../../../types/components.ts" />

import messagepublisher from "messagepublisher";
import React, { useEffect, useRef, useState } from "react";
import { Modal, View, FlatList, Image, Text, Dimensions, TouchableOpacity, ActivityIndicator } from "react-native"
import * as Elements from "react-native-elements"

import AddCross from "../../../Interface/AddCross/AddCross"
import CloseCross from "../../../Interface/CloseCross/CloseCross"
import AddPhotosContainer from "./AddMedia/AddMediaContainer"
import DetailedPhotoView from "../../../Utils/DetailedPhotoView/DetailedPhotoView"

import type { Components } from "../../../../types/components"

import EqualAlbumStyle from "../../../../constants/EqualAlbum"
import { EqualVideo } from "../../Home/Videos/Videos"
import DetailedVideoView from "../../../Utils/DetailedVideoView/DetailedVideoView";
import ActivityIndStyle from "../../../../constants/ActivityIndicator"
import KebabMenuStyle from "../../../../constants/KebabMenu"

declare global {
    namespace JSX {
        interface IntrinsicAttributes extends React.Attributes {
            ref?: any
        }
    }
}

const TooltipPopover = (props: Components.EqualAlbumTooltipType) => {
    return (
        <TouchableOpacity onPress={() => {
            props.tooltip.current.toggleTooltip()
            props.deleteAlbum(props.albumName)
            setTimeout(props.navigator.navigation.goBack, 500)
        }}>
            <View style={KebabMenuStyle.button}>
                <Text style={KebabMenuStyle.buttonText}>Delete</Text>
            </View>
        </TouchableOpacity>
    )

}

const Renderer = (props: Components.EqualAlbumRendererType) => {
    return (
        <View style={{ width: props.size.width, height: props.size.height }}>
            {
                props.albumViewType == "Photo" ?
                    (
                        <TouchableOpacity onPress={() => {
                            props.setDetailed({ show: true, uri: props.uri, extension: props.extension })
                        }}>
                            <Image style={{ width: props.size.width - 10, height: props.size.height - 10, alignSelf: "center" }} source={{ uri: props.uri }} />
                        </TouchableOpacity >
                    )
                    :
                    (
                        <EqualVideo uri={props.uri} extension={props.extension} size={props.size} />
                    )
            }
        </View>
    )
}

const EqualAlbum = (props: Components.EqualAlbumType) => {
    const [openAddPanel, setOpenAddPanel] = useState(false);
    const [reset, setReset] = useState(0);
    const [page, setPage] = useState(1);
    const [pos, setPos] = useState({ x: 0, y: 0 })

    const [detailed, setDetailed] = useState({ show: false, uri: "", extension: "" });
    const tooltip = useRef(null)
    const ticker = useRef(0)

    if (!props.navigator.route.params) {
        messagepublisher.add("The name of the album is empty")
        return <></>
    }
    const params = Object.assign(props.navigator.route.params)
    const albumName = params["albumName"];
    const albumViewType: "Photo" | "Video" = params["albumViewType"]

    const numColumns = 3
    const size = {
        width: Dimensions.get("window").width / numColumns,
        height: Dimensions.get("window").height / numColumns
    }

    useEffect(() => {
        props.getEqualAlbum(
            albumName,
            Dimensions.get("window").height / 100 * 80 / size.height * numColumns,
            page,
        )

        if (props.equalAlbumPage.isReset) {
            props.turnOffReset()
        }

    }, [page])


    useEffect(() => {
        clearInterval(ticker.current)
        ticker.current = setInterval(() => {

            if (!props.equalAlbumPage.isFetching) {
                props.getDetailedAlbumMediaNum(albumName)
            }
        }, 100)
        return () => clearInterval(ticker.current)
    })

    const data = (albumViewType == "Photo" ? props.equalAlbumPage.photos.result : props.equalAlbumPage.videos.result)

    if (props.equalAlbumPage.isFetching && page == 1) {
        return <ActivityIndicator style={ActivityIndStyle.PhotoLoadingIndicator} size="large" color="#000000" />
    }

    return (
        <View>
            {albumViewType == "Photo" ?
                <DetailedPhotoView visible={detailed.show} uri={detailed.uri} extension={detailed.extension} onPress={() => setDetailed({ show: false, uri: "", extension: "" })} />
                :
                <DetailedVideoView visible={detailed.show} uri={detailed.uri} extension={detailed.extension} onPress={() => setDetailed({ show: false, uri: "", extension: "" })} />
            }
            <View style={EqualAlbumStyle.panel}>
                <View>
                    <AddCross onPress={() => setOpenAddPanel(true)} />
                    <Modal animationType={"slide"} visible={openAddPanel}>
                        <CloseCross onPress={() => setOpenAddPanel(false)} />
                        <AddPhotosContainer albumViewType={albumViewType} albumName={albumName} onClose={() => setOpenAddPanel(false)} onUpdate={() => setReset(reset + 1)} />
                    </Modal>
                </View>
                <View>
                    <Elements.Tooltip ref={tooltip} withPointer={false} popover={<TooltipPopover albumName={albumName} tooltip={tooltip} navigator={props.navigator} deleteAlbum={props.deleteAlbum} />}>
                        <Elements.Image style={EqualAlbumStyle.menuKebab} source={require("./../../../../assets/images/menukebab.png")} />
                    </Elements.Tooltip>
                </View>
            </View>
            {
                data.length !== 0 ?
                    <FlatList
                        contentOffset={pos}
                        onScroll={(e) => {
                            if (e.nativeEvent.contentOffset.y != 0) {
                                setPos({
                                    x: e.nativeEvent.contentOffset.x,
                                    y: e.nativeEvent.contentOffset.y
                                })
                            }
                        }}
                        onEndReached={(e) => {
                            if (!props.equalAlbumPage.photos.last_page) setPage(page + 1)
                        }}
                        onEndReachedThreshold={0}
                        numColumns={numColumns}
                        keyExtractor={(item, index) => index.toString()}
                        data={data as any}
                        renderItem={({ item }) => {
                            return <Renderer extension={item.extension} uri={item.uri} albumViewType={albumViewType} size={size} setDetailed={setDetailed} />
                        }}
                    >
                    </FlatList>
                    :
                    < View style={EqualAlbumStyle.announcementContainer}>
                        <Text style={EqualAlbumStyle.announcementText}>{albumViewType == "Photo" ? "There are no photos!" : "There are no videos!"}</Text>
                    </View>
            }
        </View >
    )
}

export default EqualAlbum