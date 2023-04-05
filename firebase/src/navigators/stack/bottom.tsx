import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomNavigator} from '../bottom-navigator';
import {AccountScreen} from '../../screens';

const CreateBottomStack = createNativeStackNavigator();

export const BottomStack = () => {
  return (
    <CreateBottomStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}>
      <CreateBottomStack.Screen
        name={'BottomNavigator'}
        component={BottomNavigator}
      />
      <CreateBottomStack.Screen
        name="AccountScreen"
        component={AccountScreen}
      />
    </CreateBottomStack.Navigator>
  );
};
