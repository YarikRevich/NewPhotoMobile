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
        getAlbumInfo(albumName: string): void
        deleteAlbum(albumName: string): void
        turnOffReset(): void
    }

    export interface EqualAlbumRendererType {
        albumViewType: "Photo" | "Video"
        size: {
            width: number
            height: number
        }
        uri: string
        extension: string
        setDetailed(f: { show: boolean, uri: string, extension: string }): void
    }

    export interface EqualAlbumTooltipType {
        albumName: string
        tooltip: any
        navigator: StackScreenProps<ParamListBase>
        deleteAlbum(albumName: string): void
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
        uri?: string
        extension: string
        size: {
            width: number
            height: number
        };
    }

    export interface SignInType {
        readonly navigation: {
            push: Function
        }
        signInInner(d: SentData.SignIn): void
    }

    export interface SignInFormType {
        readonly navigation?: {
            push: Function
        }
        readonly isLocalAuthentication: boolean
        readonly LocalAuthenticationType: 1 | 2
        readonly type: "inner" | "outer"
        signInInner?(d: SentData.SignIn): void
        signInOuter?(d: SentData.SignIn): void
        setLocalAuthenticationStatusTryAgain(): void
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
        system: StateComponents.System
        checkAuth(): void
        getAvatar(): void
    }

    interface DetailedView {
        visible: boolean;
        uri: string;
        extension: string;
        onPress: () => void;
    }

    export interface DetailedPhotoViewType extends DetailedView { }

    export interface DetailedVideoViewType extends DetailedView { }

    export interface AddCrossType {
        onPress: () => void
    }

    export interface CloseCrossType {
        onPress: () => void
    }

    export interface AddAlbumType {
        albums: RecievedData.Albums
        addAlbum(albumName: string): void
        onClose: () => void
        onUpdate: () => void
    }

    export interface AddPhotosType {
        albumName: string;
        albumViewType: "Photo" | "Video";
        changeMedia(t: "photos" | "videos", albumName: string, photos: SentData.LocalPhotos<SentData.FileInfo>, videos: SentData.LocalVideos<SentData.FileInfo>, toDelete: string[]): void
        onClose: () => void
        onUpdate: () => void
    }

    export interface ImageBrowserType {
        mediaPage: StateComponents.MediaPage
        equalAlbumPage: StateComponents.EqualAlbumPage
        albumViewType: "Photo" | "Video";
        visible: boolean
        onClose: () => void
        onDone: (photos: SentData.LocalPhotos<SentData.FileInfo>, videos: SentData.LocalVideos<SentData.FileInfo>, toDelete: string[]) => void
    }

    export interface ImageBrowserRendererType {
        albumViewType: "Photo" | "Video"

        chosenMedia: number[]
        toDelete: string[]
        size: {
            width: number,
            height: number
        }
        index: number
        file: string
        uri?: string
        handlePress(index: number): void
        handlePressOnAddedOne(f: string): void
        equalAlbumPageHasSuchMedia(f: string): boolean
    }

    export interface withListenersType {
        readonly isAuthed: boolean
        turnOnConnect(): void
        turnOffConnect(): void
        getAvatar(): void
        setAppActive(): void
        setAppInActive(): void
        setLocalAuthenticationActive(): void
        setLocalAuthenticationInActive(): void
        setLocalAuthenticationType(l: 1 | 2): void
    }

    export interface NetLessCoverType {
        isConnected: boolean
    }

    export interface ActivityCoverType {
        isAppActive: boolean
    }

    export interface LocalAuthCoverType {
        readonly authentication: StateComponents.Authentification,
        readonly isLocalAuthentication: boolean
        readonly localAuthenticationType: 1 | 2
        readonly LocalAuthenticationStatus: "try_again" | "failed" | "nominal"
        signInOuter(d: SentData.SignIn): void
        setLocalAuthenticationStatusFailed(): void
        setLocalAuthenticationStatusNominal(): void

    }
}

