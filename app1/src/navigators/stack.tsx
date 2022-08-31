import React from 'react'
import {View, Text} from 'react-native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { HomeScreen } from '../screens'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen}/>
          </Stack.Group>
        </Stack.Navigator>
    )
}

export {StackNavigator}