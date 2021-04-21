import { IHeaderAction } from "../types/reducers/header-reducer";
import { Header, serviceI } from "../types/state/state"
import axios from "axios"

const initialState: Header = {
    title: "",
}

const headerReducer = (state = initialState, action: IHeaderAction) => {
    return state
}

export default headerReducer