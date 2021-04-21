import EqualAlbum from "./../Components/EqualAlbum/EqualAlbum"

import { createDrawerNavigator } from "react-navigation-drawer"

const screens = {
    EqualAlbumPage: {
		screen: EqualAlbum,
	},
}

export default createDrawerNavigator(screens)