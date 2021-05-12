import { connect } from "react-redux"
import ImageBrowser from "./ImageBrowser";

const mapStateToProps = (state: State) => {
    return {
        photoPage: state.photosPage,
        equalAlbumPage: state.equalAlbumPage,
    }
}

export default connect(mapStateToProps, {})(ImageBrowser)