import { RouteProp } from "@react-navigation/native"
import { AccountPage, Authentification } from "./../state/state"
import { DrawerContentComponentProps, DrawerContentOptions } from "@react-navigation/drawer"

export declare interface AccountType {
    readonly navigation: DrawerContentComponentProps<DrawerContentOptions>
    readonly authentification: Authentification
    readonly accountPage: AccountPage

    signIn(d: any, updater: Function): void
    signOut(updater: Function): void
    getAccountInfo(updater: Function): void
}