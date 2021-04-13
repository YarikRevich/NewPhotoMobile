import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from "react-native"
import AppStyle from "./constants/App"
import AppDrawer from "./router/nav"

export default function App() {
	return (
		<View style={AppStyle.body}>
			<AppDrawer />
			<StatusBar style="auto" />
		</View>
	)
}
