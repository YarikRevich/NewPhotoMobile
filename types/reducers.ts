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
    export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS"
    export const SIGN_IN_ERROR = "SIGN_IN_ERROR"
    export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"
    export const SIGN_UP_ERROR = "SIGN_UP_ERROR"
    export const SIGN_OUT_SUCCESS = "SIGN-OUT-SUCCESS"
    export const SIGN_OUT_ERROR = "SIGN-OUT-ERROR"
}

export namespace AccountReducer {

    export type IAccountAction = {
        type: string;
        data?: any;
        updater?: Function;
    }

    export const GET_ACCOUNT_INFO_SUCCESS = "GET-ACCOUNT-INFO-SUCCESS";
    export const GET_ACCOUNT_INFO_ERROR = "GET-ACCOUNT-INFO-ERROR";
}

export namespace AlbumsReducer {

    export interface IAlbumsAction {
        type: string;
        data?: RecievedData.Albums;
    }

    export const GET_ALBUMS_SUCCESS = "GET-ALBUMS-SUCCESS"
    export const GET_ALBUMS_ERROR = "GET-ALBUMS-ERROR"
}

export namespace EqualAlbumReducer {

    export interface IEqualAlbumAction {
        type: string
        data?: RecievedData.EqualAlbum
    }

    export const GET_EQUAL_ALBUM_SUCCESS = "GET-EQUAL-ALBUM-SUCCESS"
    export const GET_EQUAL_ALBUM_ERROR = "GET-EQUAL-ALBUM-ERROR"
}

export namespace HeaderReducer {
    export interface IHeaderAction {
        type: string
    }
}

export namespace PhotoReducer {

    export interface IPhotoAction {
        type: string
        updater?: Function
        data?: any
        photosNum?: number
    }

    export const GET_LOCAL_PHOTOS_SUCCESS = "GET-LOCAL-PHOTOS-SUCCESS";
    export const GET_LOCAL_PHOTOS_ERROR = "GET-LOCAL-PHOTOS-ERROR"
    export const BACKUP_SUCCESS = "BACKUP-SUCCESS"
    export const BACKUP_ERROR = "BACKUP-ERROR"
    export const PHOTOS_NUM = "PHOTOS-NUM"
    export const TOOGLE_FETCHING = "TOOGLE-FETCHING"
    export const TOOGLE_BACKUPING = "TOOGLE-BACKUPING"
    export const TURNON_LISTENING = "TURNON-LISTENING"
    export const STOP_ANIMATION = "STOP-ANIMATION"
    export const START_ANIMATION = "START-ANIMATION"
    export const TURNON_RESET = "TURNON-RESET"
    export const TURNOFF_RESET = "TURNOFF-RESET"
}