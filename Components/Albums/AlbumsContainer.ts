import { Dispatch } from "react";
import { State } from "../../types/state/state";
import { connect } from "react-redux"
import { createTest } from "../../redux/albums-reducer";
import { IAlbumsPage } from "./../../types/reducers/albums-reducer"
import Albums from "./Albums"

const mapStateToProps = (state: State) => {
    return {
        albumsPage: state.albumsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch<IAlbumsPage>) => {
    return {
        test: () => {
            dispatch(createTest());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Albums)