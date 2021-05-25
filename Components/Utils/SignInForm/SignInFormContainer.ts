import { Dispatch } from "react"
import { connect } from "react-redux"
import { createSignInInner, createSignInOuter } from "../../../redux/auth-reducer"
import { createSetLocalAuthenticationStatusTryAgain } from "../../../redux/system-reducer"
import SignInForm from "./SignInForm"

const mapStateToProps = (state: State) => {
    return {
        isLocalAuthentication: state.system.isLocalAuthentication,
        LocalAuthenticationType: state.system.LocalAuthenticationType,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        signInInner: (d: SentData.SignIn) => {
            dispatch(createSignInInner(d))
        },
        signInOuter: (d: SentData.SignIn) => {
            console.log("i ")
            dispatch(createSignInOuter(d))
        },
        setLocalAuthenticationStatusTryAgain: () => {
            dispatch(createSetLocalAuthenticationStatusTryAgain())
        },
  
        // setLocalAuthenticationStatus: () => {
        //     dispatch(createSetLocalAuthenticationStatusTryAgain())
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)