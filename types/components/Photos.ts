import { PhotoPage } from "./../../types/state/state"

export declare interface PhotosType {
    photosPage: PhotoPage
    getLocalPhotos(updater: Function): void
    backupPhotos(updater: Function): void
}