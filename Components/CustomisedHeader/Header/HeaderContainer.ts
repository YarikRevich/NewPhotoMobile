import { connect } from "react-redux";


import Header from "./Header"

const mapStateToProps = (state: State) => {
    return ({
        header: state.header,
        authentification: state.authentification,
    })
}

export default connect(mapStateToProps, {})(Header)