import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { CalendarScreen, FeedScreen, HomeScreen, NotificationScreen, ProfileScreen, SettingsScreen } from '../screens'
import { Modal } from '../components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

/**
 * https://reactnavigation.org/docs/hiding-tabbar-in-screens
 */

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();


const StackNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false}}>
       {/* Group 1 */}
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Calendar" component={CalendarScreen}/>
      </Stack.Group>
       {/* Group 2*/}
      <Stack.Group screenOptions={{ presentation:'modal' }}>
        <Stack.Screen name="Modal" component={Modal}/>
      </Stack.Group>
    </Stack.Navigator> 
  )
}

export {StackNavigator}


