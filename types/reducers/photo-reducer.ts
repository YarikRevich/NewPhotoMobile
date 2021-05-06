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

export const TOOGLE_FETCHING = "TOOGLE-FETCHING"
export const TOOGLE_BACKUPING = "TOOGLE-BACKUPING"

export const TURNON_LISTENING = "TURNON-LISTENING"
export const STOP_ANIMATION = "STOP-ANIMATION"
export const START_ANIMATION = "START-ANIMATION"

export const TURNON_RESET = "TURNON-RESET"
export const TURNOFF_RESET = "TURNOFF-RESET"