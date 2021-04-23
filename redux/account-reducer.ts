import { Dispatch } from "react"
import messagePublusher from "messagepublisher"
import { getAccountInfo_ } from "./../Helpers/account"
import { getAccountInfo, setAccountInfo } from "./../Helpers/storage"
import { IAccountAction, GET_ACCOUNT_INFO_ERROR, GET_ACCOUNT_INFO_SUCCESS } from "./../types/reducers/account-reducer"


const initialState = {
    result: {
        firstname: "",
        secondname: "",
        storage: 0,
    }
}

const accountReducer = (state = initialState, action: IAccountAction) => {
    switch (action.type) {
        case GET_ACCOUNT_INFO_SUCCESS:
            setTimeout(() => {
                if (action.updater) {
                    action.updater(true)
                }
            }, 5)
            if (action.data) {
                return { result: action.data }
            }
            break
        case GET_ACCOUNT_INFO_ERROR:
            setTimeout(() => {
                if (action.updater) {
                    action.updater(true)
                }
            }, 5)
            messagePublusher.add("Something went wrong!")
            break
    }
    return state
}

//Creates getAccountInfo action ...

export const createGetAccountInfo = (updater: Function) => (dispatch: Dispatch<any>) => {
    return getAccountInfo()
        .then((d: string | null) => {
            if (d === null) {
                getAccountInfo_()
                    .then(data => {
                        if (data.service.ok) {
                            setAccountInfo(JSON.stringify(data.result))
                                .then(() => {
                                    dispatch(createGetAccountInfoSuccess(data.result, updater))
                                })
                        } else {
                            dispatch(createGetAccountInfoError(updater))
                        }
                    })
            } else {
                dispatch(createGetAccountInfoSuccess(JSON.parse(d), updater))
            }
        })
}

const createGetAccountInfoSuccess = (data: any, updater: Function) => {
    return { type: GET_ACCOUNT_INFO_SUCCESS, data: data, updater: updater }
}

const createGetAccountInfoError = (updater: Function) => {
    return { type: GET_ACCOUNT_INFO_ERROR, updater: updater }
}

export default accountReducer