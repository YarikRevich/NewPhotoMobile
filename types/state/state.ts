export declare interface Authentification {
    isAuthed: boolean;
    signIn: {
        message: string;
    }
    signOut: {
        message: string;
    }
}

export declare interface serviceI {
    ok: boolean;
    message: string;
}

export declare interface Header {
    title: string;
}

export declare interface PhotoPage {
    result: {
        file: string
        id: string
    }[];
    isFetching: boolean
    isBackuping: boolean
    isAnimating: boolean
    isListening: boolean
    isReset: boolean
}

export declare interface AccountPage {
    result: {
        firstname: string;
        secondname: string;
        storage: number;
    }
}

export declare interface AlbumsPage {
    num: number;
}

export declare interface State {
    authentification: Authentification;
    photosPage: PhotoPage;
    accountPage: AccountPage;
    albumsPage: AlbumsPage;
    header: Header;
}