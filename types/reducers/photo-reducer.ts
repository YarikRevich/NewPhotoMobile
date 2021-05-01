export declare interface IPhotoAction{
    type: string
    updater?: Function
    data?: Function
}


export const GET_PHOTOS_SUCCESS = "GET-PHOTOS-SUCCESS";
export const GET_PHOTOS_ERROR = "GET-PHOTOS-ERROR"

export const BACKUP_SUCCESS = "BACKUP-SUCCESS"
export const BACKUP_ERROR = "BACKUP-ERROR"