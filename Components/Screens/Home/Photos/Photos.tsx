/// <reference path="./../../types/components.ts" />

import React, { useEffect, useState } from "react"
import { Text, View, FlatList, Image, Dimensions, ActivityIndicator, Animated, Alert, TouchableOpacity } from "react-native"

import DetailedPhotoView from "../../../Utils/DetailedPhotoView/DetailedPhotoView"

import type { Components } from "../../../../types/components"


//Styles ...

import PhotosStyle from "../../../../constants/Photos"
import ActivityIndStyle from "../../../../constants/ActivityIndicator"

const Photos = (props: Components.PhotosType) => {
    const [detailed, setDetailed] = useState({ show: false, uri: "", extension: "" });
    const [newPhotosTrackerStarted, setNewPhotosTrackerStarted] = useState(false);

    useEffect((() => {
        props.backupMedia()

        if (props.mediaPage) {
            props.turnOffReset()
        }

        if (!props.mediaPage.isFetching && !props.mediaPage.isBackuping && !newPhotosTrackerStarted) {
            setInterval(() => {
                props.checkForNewMedia()
            }, 10000)
            setNewPhotosTrackerStarted(true)
        }
    }), [props.mediaPage.isReset])

    const numColumns = 3
    const size = {
        width: Dimensions.get("window").width / numColumns,
        height: Dimensions.get("window").height / numColumns
    }

    const backupAnimation = new Animated.Value(0);
    const gapAnimation = new Animated.Value(0);


    gapAnimation.addListener(({ value }) => {
        if (value == -Dimensions.get("window").height / 100 * 6) {
            props.stopAnimation()
        }
    })

    if (props.mediaPage.isAnimating) {
        if (props.mediaPage.isBackuping) {
            Animated.timing(backupAnimation, {
                toValue: 200,
                duration: 2000,
                useNativeDriver: false,
            }).start()
        } else {
            Animated.sequence([
                Animated.timing(backupAnimation, {
                    toValue: 400,
                    duration: 3000,
                    useNativeDriver: false,
                }),
                Animated.timing(backupAnimation, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: false
                }),
                Animated.timing(gapAnimation, {
                    toValue: -22,
                    duration: 2000,
                    useNativeDriver: false,
                }),
            ]).start()
        }
    }

    if (props.mediaPage.isFetching) {
        return <ActivityIndicator style={ActivityIndStyle.PhotoLoadingIndicator} size="large" color="#000000" />
    }

    return (
        <View style={PhotosStyle.body}>
            <Animated.View
                style={{ ...ActivityIndStyle.BackupIndicator, width: backupAnimation }}>
            </Animated.View>
            <Animated.View style={{ marginBottom: (props.mediaPage.isAnimating ? gapAnimation : -Dimensions.get("window").height / 100 * 6) }}></Animated.View>
            <DetailedPhotoView visible={detailed.show} uri={detailed.uri} extension={detailed.extension} onPress={() => setDetailed({ show: false, uri: "", extension: "" })} />
            {props.mediaPage.photos.result != undefined ?
                (<FlatList
                    style={PhotosStyle.photos}
                    numColumns={numColumns}
                    data={props.mediaPage.photos.result}
                    renderItem={({ item, index }) => (
                        <View style={{ width: size.width, height: size.height }}>
                            <TouchableOpacity
                                onPress={() => {
                                    const interval = setInterval(() => {
                                        if (!props.mediaPage.isAnimating && item.uri) {
                                            setDetailed({ show: true, uri: item.uri, extension: item.extension })
                                            clearInterval(interval)
                                        }
                                    }, 10)
                                    if (props.mediaPage.isAnimating) {
                                        return Alert.alert("Notification", "Wait!")
                                    }
                                }}>
                                <Image style={{ width: size.width - 10, height: size.height - 10, alignSelf: "center" }} key={index} source={{ uri: `data:image/png;image/jpeg;base64,${item.file}` }} />
                            </TouchableOpacity>
                        </View>
                    )}
                />)
                : (
                    <View style={PhotosStyle.announcementContainer}>
                        <Text style={PhotosStyle.announcementText}>There are no photos!</Text>
                    </View>
                )
            }
        </View>
    )
}

export default Photos