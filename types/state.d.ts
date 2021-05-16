declare namespace RecievedData {
    type Photos = { file: string, id: string }[];
    type Albums = { name: string; latestphoto: string }[];
    type EqualAlbum = { photo: string }[];
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
        result: RecievedData.EqualAlbum
    }
}

declare interface State {
    authentification: StateComponents.Authentification;
    mediaPage: StateComponents.MediaPage;
    accountPage: StateComponents.AccountPage;
    albumsPage: StateComponents.AlbumsPage;
    equalAlbumPage: StateComponents.EqualAlbumPage;
    header: StateComponents.Header;
}