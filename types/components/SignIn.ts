import { SignInData } from "../reducers/auth-reducer";

export declare interface SignInType {
    readonly navigation: {
        push: Function
    }

    signIn(d: SignInData, updater: Function): void
}