import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from "react-native"
import AppStyle from "./constants/App"
import AppDrawerContainer from "./router/navContainer"
import { Provider } from "react-redux"
import { store } from "./redux/redux-store"


export default function App() {
	return (
		<Provider store={store}>
			<View style={AppStyle.body}>
				<AppDrawerContainer />
				<StatusBar style="auto" />
			</View>
		</Provider>
	)
}
