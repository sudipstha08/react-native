import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomStack} from './stack/bottom';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BottomStack />
    </NavigationContainer>
  );
};
