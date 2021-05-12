import { createStore, combineReducers, Reducer, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import photoPage from "./photo-reducer"
import authReducer from "./auth-reducer"
import accountReducer from "./account-reducer"
import albumsPage from "./albums-reducer";
import equalAlbumPage from "./equalalbum-reducer";

const reducers = combineReducers<any>({
    authentification: authReducer,
    photosPage: photoPage,
    albumsPage: albumsPage,
    equalAlbumPage: equalAlbumPage,
    accountPage: accountReducer,
    // aboutPage: {},
})

const middlewares = applyMiddleware(thunk)

export const store = createStore(reducers, middlewares)