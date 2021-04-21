import { Authentification } from "./../../types/state/state"

export declare interface AppDrawerType {
    authentification: Authentification
    checkAuth(updater: Function): void
    retrieveToken(updater: Function): void
}