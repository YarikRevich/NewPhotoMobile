export declare interface SignUpType {
    readonly navigation: {
        goBack: Function
    }

    signUp(d: {login: string; firstname: string; secondname: string; password1: string; password2: string}, updater: Function): void
}