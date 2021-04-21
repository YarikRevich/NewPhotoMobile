export declare interface SignInType {
    readonly navigation: {
        reset: Function
    }

    signIn(d: any, updater: Function): void
}