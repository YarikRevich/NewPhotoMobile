import {createStore, combineReducers, Reducer} from "redux"
import photoPage from "./photo-reducer"

const reducers = combineReducers<Reducer>({
    photosPage: photoPage,
    albumsPage: {},
    albumPage: {},
    accountPage: {},
    aboutPage: {},
})

export const store = createStore(reducers)