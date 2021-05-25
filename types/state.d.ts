declare namespace RecievedData {
    type Photos = { file: string, id: string }[];
    type Albums = { name: string; latestphoto: string }[];

    type EqualAlbumPhotosInfo = {
        photo: string
        extension: string
    }
    type EqualAlbumVideosInfo = {
        video: string
        extension: string
    }
    type EqualAlbumInfoTaged = {
        uri: string
        extension: string
    }
    type EqualAlbum<T> = T[];

    type AlbumInfo = {
        media_num: number
    }
}

declare namespace SentData {
    type SignUp = {
        data: {
            login: string
            firstname: string;
            secondname: string;
            password1: string;
            password2: string;
        }
    }
    type SignIn = {
        data: {
            login: string;
            password: string;
        }
    }
    type FileInfo = {
        file: string;
        id: string;
        date: number,
        extension: string,
        size: number
        uri?: string
    }
    type LocalPhotos<T> = T[];
    type LocalVideos<T> = T[]
}

declare namespace StateComponents {

    interface Authentification {
        isAuthed: boolean;
        isLocallyAuthed: boolean;
        isChecking: boolean
    }

    interface Header {
        avatar: string
    }

    interface AccountPage {
        result: {
            firstname: string;
            secondname: string;
            storage: number;
        }
        avatar: string
    }

    interface MediaPage {
        photos: {
            result: SentData.LocalPhotos<SentData.FileInfo>
        }
        videos: {
            result: SentData.LocalVideos<SentData.FileInfo>
        }
        isFetching: boolean
        isBackuping: boolean
        isAnimating: boolean
        isListening: boolean
        isReset: boolean

    }

    interface AlbumsPage {
        result: RecievedData.Albums
    }

    interface EqualAlbumPage {
        photos: {
            result: RecievedData.EqualAlbum<RecievedData.EqualAlbumInfoTaged>
        }
        videos: {
            result: RecievedData.EqualAlbum<RecievedData.EqualAlbumInfoTaged>
        }
        info: RecievedData.AlbumInfo
        isReset: boolean
        isFetching: boolean
    }

    interface System {
        isConnected: boolean;
        isAppActive: boolean;
        isLocalAuthentication: boolean;
        LocalAuthenticationType: 1 | 2;
        LocalAuthenticationStatus: "failed" | "try_again" | "nominal"
    }
}

declare interface State {
    authentification: StateComponents.Authentification;
    mediaPage: StateComponents.MediaPage;
    accountPage: StateComponents.AccountPage;
    albumsPage: StateComponents.AlbumsPage;
    equalAlbumPage: StateComponents.EqualAlbumPage;
    header: StateComponents.Header;
    system: StateComponents.System;
}