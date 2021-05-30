export namespace AuthReducer {

    export type IAuthAction = {
        type: string;
        message?: string;
        updater?: Function;
        token?: string;
        d?: any;
    }

    export const TOOGLE_CHECKING = "TOOGLE-CHECKING";
    export const CHECK_AUTH_SUCCESS = "CHECK-AUTH-SUCCESS"
    export const CHECK_AUTH_ERROR = "CHECK-AUTH-ERROR"
    export const SIGN_IN_INNER_SUCCESS = "SIGN-IN-INNER-SUCCESS"
    export const SIGN_IN_INNER_ERROR = "SIGN-IN-INNER-ERROR"
    export const SIGN_IN_OUTER_SUCCESS = "SIGN_IN_OUTER_SUCCESS"
    export const SIGN_IN_OUTER_ERROR = "SIGN_IN_OUTER_ERROR"
    export const SIGN_UP_SUCCESS = "SIGN-UP-SUCCESS"
    export const SIGN_UP_ERROR = "SIGN-UP-ERROR"
    export const SIGN_OUT_SUCCESS = "SIGN-OUT-SUCCESS"
    export const SIGN_OUT_ERROR = "SIGN-OUT-ERROR"
}

export namespace AccountReducer {

    export type IAccountAction = {
        type: string;
        data?: any;
        updater?: Function;
        avatar?: string;
    }

    export const GET_ACCOUNT_INFO_SUCCESS = "GET-ACCOUNT-INFO-SUCCESS";
    export const GET_ACCOUNT_INFO_ERROR = "GET-ACCOUNT-INFO-ERROR";
    export const GET_AVATAR_SUCCESS = "GET-AVATAR-SUCCESS";
    export const GET_AVATAR_ERROR = "GET-AVATAR-ERROR";
    export const SET_AVATAR_SUCCESS = "SET-AVATAR-SUCCESS";
    export const SET_AVATAR_ERROR = "SET-AVATAR-ERROR";

}

export namespace AlbumsReducer {

    export interface IAlbumsAction {
        type: string;
        data?: RecievedData.Albums;
    }

    export const GET_ALBUMS_SUCCESS = "GET-ALBUMS-SUCCESS"
    export const GET_ALBUMS_ERROR = "GET-ALBUMS-ERROR"
    export const ADD_ALBUM_SUCCESS = "ADD-ALBUM-SUCCESS";
    export const ADD_ALBUM_ERROR = "ADD-ALBUM-ERROR";
    export const CLEAN_ALBUM = "CLEAN-ALBUM"
}

export namespace EqualAlbumReducer {

    export interface IEqualAlbumAction {
        type: string
        data?: [RecievedData.EqualAlbum<RecievedData.EqualAlbumInfoTaged>, RecievedData.EqualAlbum<RecievedData.EqualAlbumInfoTaged>]
        info?: RecievedData.AlbumInfo
    }

    export const GET_EQUAL_ALBUM_SUCCESS = "GET-EQUAL-ALBUM-SUCCESS"
    export const GET_EQUAL_ALBUM_ERROR = "GET-EQUAL-ALBUM-ERROR"
    export const CHANGE_MEDIA_SUCCESS = "CHANGE-MEDIA-SUCCESS"
    export const CHANGE_MEDIA_ERROR = "CHANGE-MEDIA-ERROR"
    export const CLEAN_EQUAL_ALBUM = "CLEAN-EQUAL-ALBUM";
    export const GET_ALBUM_INFO_SUCCESS = "GET-ALBUM-INFO-SUCCESS"
    export const GET_ALBUM_INFO_ERROR = "GET-ALBUM-INFO-ERROR"
    export const TOOGLE_FETCHING = "TOOGLE-FETCHING"
    export const TURN_ON_RESET = "TURN-ON-RESET"
    export const TURN_OFF_RESET = "TURN-OFF-RESET"
    export const DELETE_ALBUM_SUCCESS = "DELETE-ALBUM-SUCCESS";
    export const DELETE_ALBUM_ERROR = "DELETE-ALBUM-ERROR";
}

export namespace HeaderReducer {
    export interface IHeaderAction {
        type: string
    }
}

export namespace MediaReducer {
    export interface IMediaAction {
        type: string
        data?: [SentData.LocalPhotos<SentData.FileInfo>, SentData.LocalVideos<SentData.FileInfo>]
    }

    export const TOOGLE_FETCHING = "TOOGLE-FETCHING"
    export const GET_LOCAL_MEDIA_SUCCESS = "GET-LOCAL-MEDIA-SUCCESS";
    export const GET_LOCAL_MEDIA_ERROR = "GET-LOCAL-MEDIA-ERROR"
    export const BACKUP_ERROR = "BACKUP-ERROR"
    export const PHOTOS_NUM = "PHOTOS-NUM"
    export const TOOGLE_BACKUPING = "TOOGLE-BACKUPING"
    export const TURNON_LISTENING = "TURNON-LISTENING"
    export const STOP_ANIMATION = "STOP-ANIMATION"
    export const START_ANIMATION = "START-ANIMATION"
    export const TURNON_RESET = "TURNON-RESET"
    export const TURNOFF_RESET = "TURNOFF-RESET"
}

export namespace SystemReducer {
    export interface ISystemReducer {
        type: string
        localAuthenticationType?: 1 | 2
    }

    export const TURN_ON_CONNECT = "TURN-ON-CONNECT";
    export const TURN_OFF_CONNECT = "TURN-OFF-CONNECT";
    export const SET_APP_ACTIVE = "SET-APP-ACTIVE";
    export const SET_APP_INACTIVE = "SET-APP-INACTIVE";
    export const SET_LOCAL_AUTHENTICATION_ACTIVE = "SET-LOCAL-AUTHENTICATION-ACTIVE"
    export const SET_LOCAL_AUTHENTICATION_INACTIVE = "SET-LOCAL-AUTHENTICATION-INACTIVE"
    export const SET_LOCAL_AUTHENTICATION_TYPE = "SET-LOCAL-AUTHENTICATION-TYPE"
    export const SET_LOCAL_AUTHENTICATION_STATUS_TRY_AGAIN = "SET-LOCAL-AUTHENTICATION-STATUS-TRY-AGAIN"
    export const SET_LOCAL_AUTHENTICATION_STATUS_FAILED = "SET-LOCAL-AUTHENTICATION-STATUS-FAILED"
    export const SET_LOCAL_AUTHENTICATION_STATUS_NOMINAL = "SET-LOCAL-AUTHENTICATION-STATUS-NOMINAL"
}
