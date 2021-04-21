//External libraries

import { Dispatch } from "react";
import { connect } from "react-redux";

//Types ...

import { IHeaderAction } from "../../types/reducers/header-reducer"
import { State } from "../../types/state/state"

//Components ...

import Header from "./Header"

const mapStateToProps = (state: State) => {
    return ({
        header: state.header,
        authentification: state.authentification,
    })
}

const mapDispatchToProps = (dispatch: Dispatch<IHeaderAction>) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)