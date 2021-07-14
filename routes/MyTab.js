import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AboutStack, HomeStack } from './MyStack'
import {AntDesign, Ionicons} from "@expo/vector-icons";
const MyTab = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        return <AntDesign name="home" size={16} color="black"/>;


                    } else if (route.name === 'Done') {
                        return <Ionicons name="checkmark-done" size={16} color="black" />;
                    }
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Done" component={AboutStack} />
        </Tab.Navigator>
    )
}

export default MyTab
