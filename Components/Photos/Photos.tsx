import React, { useEffect, useState } from "react"
import { Text, View, FlatList, Image, Dimensions, ActivityIndicator, Animated, ViewStyle, StyleSheet, Alert, Modal } from "react-native"

//Types ...

import { PhotosType } from "./../../types/components/Photos"

//Styles ...

import PhotosStyle from "./../../constants/Photos"
import ActivityIndStyle from "./../../constants/ActivityIndicator"
import { TouchableOpacity } from "react-native-gesture-handler"

const Photos = (props: PhotosType) => {
    const [checked, setChecked] = useState(false);
    const [backup, setBackup] = useState(false)
    const [loadingStart, setLoadingStart] = useState(false);
    const [loadingEnd, setLoadingEnd] = useState(false);
    const [gapClosed, setGapClosed] = useState(false);
    const [detailed, setDetailed] = useState({ show: false, photo: "" });
    const [newPhotosTrackerStarted, setNewPhotosTrackerStarted] = useState(false);
    const [resetPage, setResetPage] = useState(false);

    let loadingStart_ = false
    let loadingEnd_ = false
    let gapClosed_ = false

    if (resetPage) {
        setLoadingStart(false)
        setLoadingEnd(false)
        setGapClosed(false);
        setBackup(false)
        setChecked(false)
        setResetPage(false)
    }

    if (!checked) {
        props.getLocalPhotos(setChecked)
    }

    if (!backup && checked) {
        props.backupPhotos(setBackup)
    }

    const screenWith = Dimensions.get("window").width
    const numColumns = 3
    const size = screenWith / numColumns

    const backupStartAnimation = new Animated.Value(0);

    const backupStart = backupStartAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 200]
    })

    const backupEndAnimation = new Animated.Value(0);

    const backupEnd = backupEndAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [200, 400]
    })

    const gapHeightAnimation = new Animated.Value(0);

    const gapHeight = gapHeightAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [22, 0]
    })

    useEffect((() => {
        const interval1 = setInterval(() => {
            if (loadingStart_ && (checked && backup)) {
                setLoadingStart(true)
                clearInterval(interval1)
            }
        }, 3000)
        const interval2 = setInterval(() => {
            if (loadingEnd_ && (checked && backup)) {
                setLoadingEnd(true)
                clearInterval(interval2)
            }
        }, 2000)
        const interval3 = setInterval(() => {
            if (gapClosed_ && (checked && backup)) {
                setGapClosed(true)
                clearInterval(interval3)
            }
        }, 500)

        if ((checked && backup) && !newPhotosTrackerStarted) {
            setInterval(() => {
                props.getPhotosNum(setResetPage)
            }, 10000)
            setNewPhotosTrackerStarted(true)
        }

        return () => {
            clearInterval(interval1)
            clearInterval(interval2)
            clearInterval(interval3)
        }
    }))

    if (!loadingStart) {
        Animated.timing(backupStartAnimation, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false,
        }).start(() => loadingStart_ = true)
    }

    if (loadingStart) {
        Animated.timing(backupEndAnimation, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: false,
        }).start(() => loadingEnd_ = true)
    }

    if (loadingEnd) {
        Animated.timing(gapHeightAnimation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }).start(() => gapClosed_ = true)
    }

    if (!checked) {
        return <ActivityIndicator style={ActivityIndStyle.PhotoLoadingIndicator} size="large" color="#000000" />
    }

    return (
        <View style={PhotosStyle.body}>
            {!loadingEnd ?
                <Animated.View
                    style={StyleSheet.flatten([ActivityIndStyle.BackupIndicator, { width: (!backup ? backupStart : backupEnd) }])}>
                </Animated.View>
                :
                (
                    !gapClosed ?
                        <Animated.View style={{ height: gapHeight }}></Animated.View>
                        :
                        null
                )
            }
            {detailed.show ? (
                <View style={PhotosStyle.detailedPhotoView}>
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
                </View>
            ) : null}
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
                                        if (gapClosed) {
                                            setDetailed({ show: true, photo: item.file })
                                            clearInterval(interval)
                                        }
                                    }, 10)
                                    if (!gapClosed) {
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