export declare interface Authentification{
    isAuthed: boolean;
    signIn: {
        message: string;
    }
    signOut: {
        message: string;
    }
}

export declare interface serviceI{
    ok: boolean;
    message: string;
}

export declare interface Header {
    title: string;
}

export declare interface PhotoPage{
    result: {
        photo: string
        thumbnail: string
        tags: string[]
    }[];
}

export declare interface AccountPage{
    result: {
        firstname: string;
        secondname: string;
        storage: number;
    }
}

export declare interface State{
    authentification: Authentification;
    photoPage: PhotoPage;
    accountPage: AccountPage;
    header: Header;
}