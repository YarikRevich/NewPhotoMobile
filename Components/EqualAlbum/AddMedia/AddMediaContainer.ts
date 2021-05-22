import { Dispatch } from "react";
import { connect } from "react-redux";

import AddPhotos from "./AddMedia"

import { createChangeMedia } from "../../../redux/equalalbum-reducer"

import type { EqualAlbumReducer } from "../../../types/reducers"

const mapDispatchToProps = (dispatch: Dispatch<EqualAlbumReducer.IEqualAlbumAction | any>) => {
    return {
        changeMedia: (t: "photos" | "videos", albumName: string, photos: SentData.LocalPhotos<SentData.FileInfo>, videos: SentData.LocalVideos<SentData.FileInfo>, toDelete: string[]) => {
            dispatch(createChangeMedia(t, albumName, photos, videos, toDelete))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddPhotos)