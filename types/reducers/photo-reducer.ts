export declare interface IPhotoAction{
    type: string
    updater?: Function
    data?: any
    photosNum?: number
}


export const GET_LOCAL_PHOTOS_SUCCESS = "GET-LOCAL-PHOTOS-SUCCESS";
export const GET_LOCAL_PHOTOS_ERROR = "GET-LOCAL-PHOTOS-ERROR"

export const BACKUP_SUCCESS = "BACKUP-SUCCESS"
export const BACKUP_ERROR = "BACKUP-ERROR"

export const PHOTOS_NUM = "PHOTOS-NUM"