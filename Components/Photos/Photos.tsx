import React from "react"
import { Text, View, FlatList } from "react-native"

const Photos = () => {

    const list = [
        { name: "yarik" },
        { name: "yana" }
    ]

    return (
        <View>
            <FlatList
                data={list}
                renderItem={(props) => { return <Text>{props.item.name}</Text> }}
            />
        </View>
    )
}

export default Photos