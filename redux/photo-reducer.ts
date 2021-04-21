import { IPhotoAction } from "../types/reducers/photo-reducer"
import { PhotoPage, serviceI } from "../types/state/state"

const initialState: PhotoPage = {
    result: [],
    service: {} as serviceI
}

const photoReducer = (state = initialState, action: IPhotoAction) => { 
    return state
}

export default photoReducer