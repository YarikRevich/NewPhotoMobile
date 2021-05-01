export declare interface SignInType {
    readonly navigation: {
        push: Function
    }

    signIn(d: any, updater: Function): void
}