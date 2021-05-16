import { connect } from "react-redux"


import Videos from "./Videos"

const mapStateToProps = (state: State) => {
    return {
        mediaPage: state.mediaPage
    }
}

export default connect(mapStateToProps, {})(Videos)