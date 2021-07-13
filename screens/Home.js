import React, {useState} from 'react'
import {View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import {global} from '../styles/global'
import {useSelector, useDispatch} from 'react-redux'
import {addTask, deleteTask, didTask, undidTask} from '../store/taskAction'
import Button from "../components/Button";

const Home = ({navigation}) => {
    const dispatch = useDispatch()
    /**
     * Obtenemos las tareas desde el store.
     */
    const tasks = useSelector(state => state.tasks)
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }
    const submitTask = (text) => dispatch(addTask(text))
    const removeTask = id => dispatch(deleteTask(id))
    const finishTask = id => dispatch(didTask(id))
    const unfinishTask = id => dispatch(undidTask(id))

    return (
        <View style={global.container}>
            <View style={{marginBottom: 10}}>
                <TextInput
                    style={styles.input}
                    placeholder="Add new task"
                    onChangeText={changeHandler}
                />
                <Button title="add task" color="blueviolet" onPress={() => submitTask(text)}/>
            </View>

            <FlatList
                data={tasks}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={global.item}
                        onPress={() => navigation.navigate("Task", item)}>

                        {(item.done) ?
                            <Text onPress={() => unfinishTask(item.id)}>
                                <Text>
                                    {item.task} - <Text style={{color: "green"}}>Finished</Text>
                                </Text>
                            </Text>
                            :
                            <Text onPress={() => finishTask(item.id)}
                                  style={{fontWeight: 'bold'}}>
                                <Text>
                                    {item.task}
                                </Text>
                            </Text>
                        }

                        <Button onPress={() => removeTask(item.id)}
                                title="delete" backgroundColor={"#FD785D"} fontSize={10}/>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        margin: 10,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'

    }
})

export default Home
