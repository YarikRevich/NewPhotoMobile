import { connect } from "react-redux"
import React, { Dispatch } from "react"
import { addNetListener, addAvatarListener, addAppFocusListener, addLocalAuthenticationListener } from "../Helpers/listeners"
import { createGetAvatar } from "./../redux/account-reducer"
import { createSetAppActive, createSetAppInActive, createSetLocalAuthenticationActive, createSetLocalAuthenticationInActive, createSetLocalAuthenticationType, createTurnOffConnect, createTurnOnConnect } from "./../redux/system-reducer"
import { Components } from "../types/components"

const withListeners = (Component: any) => {
    const wrapper = (props: Components.withListenersType) => {
        addLocalAuthenticationListener(props.setLocalAuthenticationActive, props.setLocalAuthenticationInActive, props.setLocalAuthenticationType)
        addAppFocusListener(props.setAppActive, props.setAppInActive)
        addAvatarListener(props.isAuthed, props.getAvatar)
        addNetListener(props.turnOnConnect, props.turnOffConnect)

        return <Component {...props} />
    }
    return connect(mapStateToProps, mapDispatchToProps)(wrapper)
}

const mapStateToProps = (state: State) => {
    return {
        isAuthed: state.authentification.isAuthed
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        turnOnConnect: () => {
            dispatch(createTurnOnConnect())
        },
        turnOffConnect: () => {
            dispatch(createTurnOffConnect())
        },
        getAvatar: () => {
            dispatch(createGetAvatar())
        },
        setAppActive: () => {
            dispatch(createSetAppActive())
        },
        setAppInActive: () => {
            dispatch(createSetAppInActive())
        },
        setLocalAuthenticationActive: () => {
            dispatch(createSetLocalAuthenticationActive())
        },
        setLocalAuthenticationInActive: () => {
            dispatch(createSetLocalAuthenticationInActive())
        },
        setLocalAuthenticationType: (l: 1 | 2) => {
            dispatch(createSetLocalAuthenticationType(l))
        }
    }
}

export default withListeners