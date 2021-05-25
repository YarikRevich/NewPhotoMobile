import { connect } from "react-redux"
import ImageBrowser from "./ImageBrowser";

const mapStateToProps = (state: State) => {
    return {
        mediaPage: state.mediaPage,
        equalAlbumPage: state.equalAlbumPage,
    }
}

export default connect(mapStateToProps, {})(ImageBrowser)