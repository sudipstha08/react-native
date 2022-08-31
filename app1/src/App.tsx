import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { StackNavigator } from "./navigators"
import { StatusBar } from 'react-native'

export default function App() {
  return(
    <NavigationContainer>
      <StackNavigator />
      <StatusBar />
    </NavigationContainer>
  )
}