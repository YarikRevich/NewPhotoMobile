import { createStore, combineReducers, Reducer, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import photoPage from "./photo-reducer"
import header from "./header-reducer"
import authReducer from "./auth-reducer"
import accountReducer from "./account-reducer"

const reducers = combineReducers<Reducer>({
    authentification: authReducer,
    header: header,
    photosPage: photoPage,
    albumsPage: {},
    albumPage: {},
    accountPage: accountReducer,
    aboutPage: {},
})

const middlewares = applyMiddleware(thunk)

export const store = createStore(reducers, middlewares)