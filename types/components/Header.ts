import {Authentification} from "./../state/state"
import { DrawerContentComponentProps, DrawerContentOptions } from "@react-navigation/drawer"

export declare interface HeaderType {
    readonly navigation: {
        toggleDrawer: Function
    }
    readonly type: "drawer" | "stack"
    readonly title: string;
    readonly authentification: Authentification
}