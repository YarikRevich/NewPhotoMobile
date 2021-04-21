import {RouteProp} from "@react-navigation/native"
import {Authentification} from "./../state/state"
import { DrawerContentComponentProps, DrawerContentOptions } from "@react-navigation/drawer"

export declare interface AccountType {
    readonly navigation: DrawerContentComponentProps<DrawerContentOptions>
    readonly authentification: Authentification
    
    signIn(d: any, updater: Function): void
    signOut(updater: Function): void
}