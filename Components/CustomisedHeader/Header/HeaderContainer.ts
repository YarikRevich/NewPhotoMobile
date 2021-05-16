import { Dispatch } from "react";
import { connect } from "react-redux";
import { createGetAvatar } from "../../../redux/account-reducer";

import Header from "./Header"

const mapStateToProps = (state: State) => {
    return ({
        header: state.header,
        authentification: state.authentification,
        accountPage: state.accountPage
    })
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        getAvatar: () => {
            dispatch(createGetAvatar())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)