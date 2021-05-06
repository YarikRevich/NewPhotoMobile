import { State } from "../types/state/state"
import { IAlbumsPage, TEST } from "../types/reducers/albums-reducer"

const initialState = {
    num: 0
}

const albumsPage = (state = initialState, action: IAlbumsPage) => {
    switch (action.type) {
        case TEST:
            return { ...state, num: state.num += 1 }
    }
    return state
}

export default albumsPage


export const createTest = () => {
    console.log("Reducer")
    return { type: TEST }
}