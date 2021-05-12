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
    type LocalPhotos = {
        file: string;
        id: string;
        date: number,
        extension: string,
        size: number
    }[]
}

declare namespace StateComponents {

    interface Authentification {
        isAuthed: boolean;
        isChecking: boolean
    }

    interface Header {
        title: string;
    }

    interface AccountPage {
        result: {
            firstname: string;
            secondname: string;
            storage: number;
        }
    }

    interface PhotoPage {
        result: SentData.LocalPhotos
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
    photosPage: StateComponents.PhotoPage;
    accountPage: StateComponents.AccountPage;
    albumsPage: StateComponents.AlbumsPage;
    equalAlbumPage: StateComponents.EqualAlbumPage;
    header: StateComponents.Header;
}
