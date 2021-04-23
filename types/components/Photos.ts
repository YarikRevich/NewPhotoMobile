import { PhotoPage } from "./../../types/state/state"

export declare interface PhotosType {
    photoPage: PhotoPage
    getPhotos(updater: Function): void
}