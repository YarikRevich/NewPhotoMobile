import Albums from "./../Components/Albums/Albums"

import { createDrawerNavigator } from "react-navigation-drawer"

const screens = {
    AlbumsPage: {
		screen: Albums,
	},
}

export default createDrawerNavigator(screens)