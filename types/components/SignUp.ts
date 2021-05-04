import { SignUpData } from "./../../types/reducers/auth-reducer"

export declare interface SignUpType {
    readonly navigation: {
        goBack: Function
    }

    signUp(d: SignUpData, updater: Function): void
}