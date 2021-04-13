/// <reference path="./../types/photo-reducer.d.ts" path="./../types/state.d.ts" />

import {IPhotoAction} from "./../types/photo-reducer"
import {PhotoPage, serviceI} from "./../types/state"

const initialState: PhotoPage = {
    result: [],
    service: {} as serviceI
}

const photoReducer = (state = initialState, action: IPhotoAction) => {}

export default photoReducer