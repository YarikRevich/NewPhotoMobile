import { createStore, combineReducers, Reducer, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import mediaReducer from "./media-reducer"
import authReducer from "./auth-reducer"
import accountReducer from "./account-reducer"
import albumsReducer from "./albums-reducer";
import equalAlbumReducer from "./equalalbum-reducer";

const reducers = combineReducers<any>({
    authentification: authReducer,
    mediaPage: mediaReducer,
    albumsPage: albumsReducer,
    equalAlbumPage: equalAlbumReducer,
    accountPage: accountReducer,
})

const middlewares = applyMiddleware(thunk)

export const store = createStore(reducers, middlewares)