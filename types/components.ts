import type { DrawerContentComponentProps, DrawerContentOptions } from "@react-navigation/drawer"
import { ParamListBase } from "@react-navigation/routers"
import type { StackScreenProps } from "@react-navigation/stack"

export namespace Components {

    export interface AccountType {
        readonly navigation: DrawerContentComponentProps<DrawerContentOptions>
        readonly authentification: StateComponents.Authentification
        readonly accountPage: StateComponents.AccountPage
        signIn(d: any, updater: Function): void
        signOut(updater: Function): void
        getAccountInfo(updater: Function): void
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
        photosPage: StateComponents.PhotoPage
        getLocalPhotos(): void
        backupPhotos(): void
        checkForNewPhotos(): void
        stopAnimation(): void
        startAnimation(): void
        turnOffReset(): void
        turnOnListening(): void
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
        readonly title: string;
        readonly authentification: StateComponents.Authentification
    }

    export interface AppDrawerType {
        authentification: StateComponents.Authentification
        checkAuth(): void
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
        addPhotos(albumName: string, data: SentData.LocalPhotos, toDelete: string[]): void
        onClose: () => void
        onUpdate: () => void
    }

    export interface ImageBrowserType {
        photoPage: StateComponents.PhotoPage
        equalAlbumPage: StateComponents.EqualAlbumPage
        visible: boolean
        onClose: () => void
        onDone: (data: SentData.LocalPhotos, toDelete: string[]) => void
    }
}