import type { DrawerContentComponentProps, DrawerContentOptions } from "@react-navigation/drawer"
import { ParamListBase } from "@react-navigation/routers"
import type { StackScreenProps } from "@react-navigation/stack"

export namespace Components {

    export interface AccountType {
        readonly navigation: DrawerContentComponentProps<DrawerContentOptions>
        readonly authentification: StateComponents.Authentification
        readonly accountPage: StateComponents.AccountPage
        signIn(d: any, updater: Function): void
        signOut(): void
        getAccountInfo(): void
        setAvatar(): void
        getAvatar(): void
    }

    export interface AlbumsType {
        readonly navigator: StackScreenProps<ParamListBase>
        albumsPage: StateComponents.AlbumsPage
        getAlbums(): void
    }

    export interface EqualAlbumType {
        equalAlbumPage: StateComponents.EqualAlbumPage
        navigator: StackScreenProps<ParamListBase>
        getEqualAlbum(albumName: string): void
    }

    export interface PhotosType {
        mediaPage: StateComponents.MediaPage
        getLocalMedia(): void
        backupMedia(): void
        checkForNewMedia(): void
        stopAnimation(): void
        startAnimation(): void
        turnOffReset(): void
        turnOnListening(): void

    }

    export interface VideosType {
        mediaPage: StateComponents.MediaPage
    }

    export interface EqualVideoType {
        item: SentData.FileInfo;
        size: {
            width: number
            height: number
        };
        fullSize: {
            width: number
            height: number
        }
    }

    export interface SignInType {
        readonly navigation: {
            push: Function
        }
        signIn(d: SentData.SignIn, updater: Function): void
    }

    export interface SignUpType {
        readonly navigation: {
            goBack: Function
        }
        signUp(d: SentData.SignUp, updater: Function): void
    }

    export interface HeaderType {
        readonly navigation: {
            toggleDrawer: Function
        }
        readonly type: "drawer" | "stack"
        readonly avatar?: boolean
        readonly title: string;
        readonly authentification: StateComponents.Authentification
        readonly accountPage: StateComponents.AccountPage
        getAvatar(): void
    }

    export interface AppDrawerType {
        authentification: StateComponents.Authentification
        checkAuth(): void
        getAvatar(): void
    }

    export interface DetailedPhotoViewType {
        visible: boolean
        photo: string;
        onPress: () => void
    }

    export interface AddCrossType {
        onPress: () => void
    }

    export interface CloseCrossType {
        onPress: () => void
    }

    export interface AddAlbumType {
        addAlbum(albumName: string): void
        onClose: () => void
        onUpdate: () => void
    }

    export interface AddPhotosType {
        albumName: string;
        addPhotos(albumName: string, data: SentData.LocalPhotos<SentData.FileInfo>, toDelete: string[]): void
        onClose: () => void
        onUpdate: () => void
    }

    export interface ImageBrowserType {
        mediaPage: StateComponents.MediaPage
        equalAlbumPage: StateComponents.EqualAlbumPage
        visible: boolean
        onClose: () => void
        onDone: (data: SentData.LocalPhotos<SentData.FileInfo>, toDelete: string[]) => void
    }


}

