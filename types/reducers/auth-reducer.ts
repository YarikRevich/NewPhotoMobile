export declare interface IAuthAction{
    type: string;
    message?: string;
    updater?: Function;
    token?: string;
    d?: any;
}

export const RETRIEVE_TOKEN = "RETRIEVE-TOKEN"

//Check auth actions ...
export const CHECK_AUTH_SUCCESS = "CHECK-AUTH-SUCCESS"
export const CHECK_AUTH_ERROR = "CHECK-AUTH-ERROR"

//Sign in actions ...
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS"
export const SIGN_IN_ERROR = "SIGN_IN_ERROR"

//Sign out actions ...
export const SIGN_OUT_SUCCESS = "SIGN-OUT-SUCCESS"
export const SIGN_OUT_ERROR = "SIGN-OUT-ERROR"
