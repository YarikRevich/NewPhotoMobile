import { Dispatch } from "react"
import { connect } from "react-redux"
import { createSetLocalAuthenticationStatusFailed, createSetLocalAuthenticationStatusNominal } from "../../../redux/system-reducer"
import LocalAuthCover from "./LocalAuthCover"

const mapStateToProps = (state: State) => {
    return ({
        authentication: state.authentification,
        isLocalAuthentication: state.system.isLocalAuthentication,
        LocalAuthenticationType: state.system.LocalAuthenticationType,
        LocalAuthenticationStatus: state.system.LocalAuthenticationStatus
    })
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        setLocalAuthenticationStatusFailed: () => {
            dispatch(createSetLocalAuthenticationStatusFailed())
        },
        setLocalAuthenticationStatusNominal: () => {
            dispatch(createSetLocalAuthenticationStatusNominal())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocalAuthCover)