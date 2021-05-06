import { PhotoPage } from "./../../types/state/state"

export declare interface PhotosType {
    photosPage: PhotoPage
    getLocalPhotos(): void
    backupPhotos(): void
    checkForNewPhotos(): void
    stopAnimation(): void
    startAnimation(): void
    turnOffReset(): void
    turnOnListening(): void
}