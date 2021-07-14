import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {AboutStack} from './MyStack';
import MyTab from './MyTab';
import {AntDesign, Ionicons} from "@expo/vector-icons";

const MyDrawer = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={MyTab}
                           options={{
                               title: 'Home',
                               drawerIcon: ({focused, size}) => (
                                   <AntDesign name="home" size={16} color="black"/>
                               ),
                           }}/>
            <Drawer.Screen name="Done" component={MyTab}
                           options={{
                               title: 'Home',
                               drawerIcon: ({focused, size}) => (
                                   <Ionicons name="checkmark-done" size={16} color="black" />
                               ),
                           }}/>
        </Drawer.Navigator>
    )
}

export default MyDrawer
