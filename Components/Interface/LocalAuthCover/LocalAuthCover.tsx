import React, { useEffect, useState } from "react"
import { Components } from "../../../types/components"
import * as LocalAuthentication from "expo-local-authentication"
import { View } from "react-native"
import SignInFormContainer from "./../../Utils/SignInForm/SignInFormContainer"

const LocalAuthCover = (props: Components.LocalAuthCoverType) => {
    const [size, setSize] = useState(100)

    useEffect(() => {
        const f = async () => {
            if (props.isLocalAuthentication) {
                const r = await LocalAuthentication.authenticateAsync({ cancelLabel: "Be a loser" })
                if (r.success) {
                    setSize(0)
                } else if (r.error == "user_cancel") {
                    props.setLocalAuthenticationStatusFailed()
                }
            } else {
                setSize(0)
            }
        }
        if (props.LocalAuthenticationStatus == "try_again" || props.LocalAuthenticationStatus == "nominal" && !props.authentication.isLocallyAuthed) {
            f()
        }
    }, [props.isLocalAuthentication, props.LocalAuthenticationStatus])

    useEffect(() => {
        if (props.authentication.isLocallyAuthed) {
            setSize(0)
            props.setLocalAuthenticationStatusNominal()
        }
    }, [props.authentication.isLocallyAuthed])

    if (props.LocalAuthenticationStatus == "failed") {
        return <SignInFormContainer type={"inner"} />
    }

    return <View style={{ width: `${size}%`, height: `${size}%` }}></View >
}

export default LocalAuthCover