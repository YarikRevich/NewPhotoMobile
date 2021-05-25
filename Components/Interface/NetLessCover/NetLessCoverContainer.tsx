import { connect } from "react-redux"

import NetLessCover from "./NetLessCover"

const mapStateToProps = (state: State) => {
    return {
        isConnected: state.system.isConnected
    }
}

export default connect(mapStateToProps, {})(NetLessCover)