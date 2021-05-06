import React, { useEffect } from "react";
import { Text, Button, View } from "react-native"
import { AlbumsType } from "../../types/components/Albums"

const Albums = (props: AlbumsType) => {

    useEffect(() => {
        props.test()
    }, [])

    return (
        <View style={{ marginTop: 120 }}>
            <Button title={"Test"} onPress={() => props.test()}></Button>
        </View>
    )
}

export default Albums