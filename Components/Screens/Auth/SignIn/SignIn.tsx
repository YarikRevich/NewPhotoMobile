/// <reference path="../../../../types/components.ts" />
import React from "react";
import SignInFormContainer from "./../../../Utils/SignInForm/SignInFormContainer"

import type { Components } from "../../../../types/components"

const SignIn = (props: Components.SignInType) => {
    return <SignInFormContainer navigation={props.navigation} type={"outer"} />
}

export default SignIn