import { RouteProp } from '@react-navigation/native'
import { DrawerContentComponentProps, DrawerContentOptions } from "@react-navigation/drawer"

// HomeStack ...

export declare interface IHomeStack {
    navigation: {
        toggleDrawer: Function
    }
}

// AlbumsStack ...

export declare interface IAlbumsStack {
    navigation: {
        toggleDrawer: Function
    }
}

// AboutStack ...

export declare interface IAboutStack {
    navigation: {
        toggleDrawer: Function
    }
}

// AccountStack ...


export declare interface IAcountStack {
    navigation: {
        toggleDrawer: Function
    }
}

// AuthStack ...


export declare interface IAuthStack {
    navigation: {
        toggleDrawer: Function
    }
    route: RouteProp<any, "params">
}

