import React from 'react'
import { View, Text, Button } from 'react-native'
import { global } from '../styles/global'

const Task = ({ navigation, route }) => {
    const goToHome = () => {
        // navigation.goBack()
        navigation.pop()
    }

    const taskState = (route.params.done) ? "Finished" : "Unfinished"
    const colorState = (route.params.done) ? "green" : "red"

    return (
        <View style={global.container}>
            <Text style={{marginVertical: 20, fontWeight: "bold", fontSize: 20, textAlign: "center"}}>{route.params.task}</Text>

            <Text style={{
                marginVertical: 20,
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
                color: colorState
            }}>{taskState}</Text>

            <Button title="Back to Home" onPress={goToHome} />
        </View>
    )
}

export default Task
