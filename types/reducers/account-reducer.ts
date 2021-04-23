export declare interface IAccountAction{
    type: string;
    data?: any;
    updater?: Function;
}

export const GET_ACCOUNT_INFO_SUCCESS = "GET-ACCOUNT-INFO-SUCCESS";
export const GET_ACCOUNT_INFO_ERROR = "GET-ACCOUNT-INFO-ERROR";
