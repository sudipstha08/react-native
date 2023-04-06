import React from 'react'
import { Button } from 'react-native'

export const ButtonComponent = ({ title, onPress}) => {
  return (
    <Button title={title} onPress={onPress}></Button>
  )
}

ButtonComponent.defaultProps = {
    title: "Press Me"
}