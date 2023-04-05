import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { StackNavigator } from "./navigators"
import { StatusBar } from 'react-native'

/**
 * NavigationContainer should be only used once in your app at the root. 
 * You shouldn't nest multiple NavigationContainers unless you have a specific use case for them.
**/

export default function App() {
  return(
    <NavigationContainer>
      <StackNavigator />
      <StatusBar />
    </NavigationContainer>
  )
}