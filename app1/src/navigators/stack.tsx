import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { CalendarScreen, HomeScreen } from '../screens'
import { Modal } from '../components'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Calendar" component={CalendarScreen}/>
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation:'modal' }}>
            <Stack.Screen name="Modal" component={Modal}/>
          </Stack.Group>
        </Stack.Navigator>
    )
}

export {StackNavigator}