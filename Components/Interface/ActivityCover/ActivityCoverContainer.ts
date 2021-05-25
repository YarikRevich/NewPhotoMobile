import { connect } from "react-redux"
import ActivityCover from "./ActivityCover"

const mapStateToProps = (state: State) => {
    return {
        isAppActive: state.system.isAppActive
    }
}

export default connect(mapStateToProps, {})(ActivityCover)