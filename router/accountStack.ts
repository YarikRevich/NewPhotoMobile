import Account from "./../Components/Account/Account"

import { createDrawerNavigator } from "react-navigation-drawer"

const screens = {
    AccountPage: {
		screen: Account,
	},
}

export default createDrawerNavigator(screens)