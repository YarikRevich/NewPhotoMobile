import React, { useEffect, useState } from "react"
import { Text, View, FlatList, Image, Dimensions, ActivityIndicator, Animated, Alert, Modal } from "react-native"

//Types ...

import { PhotosType } from "./../../types/components/Photos"

//Styles ...

import PhotosStyle from "./../../constants/Photos"
import ActivityIndStyle from "./../../constants/ActivityIndicator"
import { TouchableOpacity } from "react-native-gesture-handler"
import { ForceUpdater } from "../../Helpers/utils"

const Photos = (props: PhotosType) => {

    const [detailed, setDetailed] = useState({ show: false, photo: "" });
    const [newPhotosTrackerStarted, setNewPhotosTrackerStarted] = useState(false);

    useEffect((() => {
        props.getLocalPhotos()

        props.backupPhotos()

        if (props.photosPage.isReset) {
            props.turnOffReset()
        }

        if (!props.photosPage.isFetching && !props.photosPage.isBackuping && !newPhotosTrackerStarted) {
            setInterval(() => {
                props.checkForNewPhotos()
            }, 10000)
            setNewPhotosTrackerStarted(true)
        }
    }), [props.photosPage.isReset])

    const screenWith = Dimensions.get("window").width
    const numColumns = 3
    const size = screenWith / numColumns

    const backupAnimation = new Animated.Value(0);
    const gapAnimation = new Animated.Value(0);


    gapAnimation.addListener(({ value }) => {
        if (value == -22) {
            props.stopAnimation()
        }
    })

    if (props.photosPage.isAnimating) {
        if (props.photosPage.isBackuping) {
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
            ]).start(() => { })
        }
    }

    if (props.photosPage.isFetching) {
        return <ActivityIndicator style={ActivityIndStyle.PhotoLoadingIndicator} size="large" color="#000000" />
    }

    return (
        <View style={PhotosStyle.body}>
            <Animated.View
                style={{ ...ActivityIndStyle.BackupIndicator, width: backupAnimation }}>
            </Animated.View>
            <Animated.View style={{ marginBottom: (props.photosPage.isAnimating ? gapAnimation : -22) }}></Animated.View>
            <Modal animationType={"slide"} visible={detailed.show} style={PhotosStyle.detailedPhotoView}>
                <View style={PhotosStyle.detailedPhotoCover}>
                    <TouchableOpacity
                        style={PhotosStyle.detailedPhotoCloseCrossOpacity}
                        onPress={() => {
                            setDetailed({ show: false, photo: "" })
                        }}>
                        <Image style={PhotosStyle.detailedPhotoCloseCross} source={require("./../../assets/images/closecross.png")} />
                    </TouchableOpacity>
                </View>
                <Image style={PhotosStyle.detailedPhoto} source={{ uri: `data:image/png;image/jpeg;base64,${detailed.photo}` }}></Image>
            </Modal>
            {props.photosPage.result != undefined ?
                (<FlatList
                    style={PhotosStyle.photos}
                    numColumns={numColumns}
                    data={props.photosPage.result}
                    renderItem={({ item, index }) => (
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    const interval = setInterval(() => {
                                        if (!props.photosPage.isAnimating) {
                                            setDetailed({ show: true, photo: item.file })
                                            clearInterval(interval)
                                        }
                                    }, 10)
                                    if (props.photosPage.isAnimating) {
                                        return Alert.alert("Notification", "Wait!")
                                    }
                                }}>
                                <Image style={{ width: size, height: size }} key={index} source={{ uri: `data:image/png;image/jpeg;base64,${item.file}` }} />
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