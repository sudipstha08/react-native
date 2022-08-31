import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {  FeedScreen, HomeScreen, NotificationScreen, ProfileScreen, SettingsScreen } from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

/**
 * https://reactnavigation.org/docs/hiding-tabbar-in-screens
 */

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
    </Tab.Navigator>
  );
}

const StackNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  )
}

export {StackNavigator}

