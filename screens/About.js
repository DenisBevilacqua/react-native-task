import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {global} from '../styles/global'
import {useSelector} from 'react-redux'

/**
 * Screen que muestra tareas finalizadas.
 * @param navigation
 * @returns {JSX.Element}
 * @constructor
 */
const About = ({navigation}) => {
    /**
     * Obtenemos desde el store las tareas
     */
    const tasks = useSelector(state => state.tasks)
    /**
     * Filtramos las tareas que están finalizadas
     */
    const taskDone = tasks.filter(item => item.done === true)
    return (
        <View style={global.container}>
            <Text>Task that has done</Text>
            {(taskDone.length > 0)
            ?
                <FlatList
                    data={taskDone}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            style={global.item}
                            onPress={() => navigation.navigate("Task", item)}>
                            <Text style={item.done ? null : {fontWeight: 'bold'}}>{item.task}</Text>

                        </TouchableOpacity>
                    )}
                />
                : <Text style={{marginVertical: 20, fontWeight: "bold"}}>There are no completed tasks</Text>
            }

        </View>
    )
}

export default About
