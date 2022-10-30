import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { FeedScreen, HomeScreen, NotificationScreen, ProfileScreen, SettingsScreen ,CalendarScreen} from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

/**
 * https://reactnavigation.org/docs/hiding-tabbar-in-screens
*/

MIcon.loadFont();

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
}

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;
}


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      // tabBarIcon: ({ focused, color, size }) => {
      //   let iconName;
      //   if (route.name === 'Home') {
      //     iconName = focused
      //       ? 'ios-information-circle'
      //       : 'ios-information-circle-outline';
      //   } else if (route.name === 'Notifications') {
      //     iconName = focused ? 'ios-list-box' : 'ios-list';
      //   }
      //   return <MIcon name={iconName} size={size} color={color} />;
      // },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: () => {return <MIcon name={"home"} size={22} color={"blue"}/>},
        }} />

      <Tab.Screen name="Feed" component={FeedScreen} 
      options={{
        tabBarIcon: () => <MIcon name={"gamepad-circle"} size={18} color={"blue"} />
      }}
      />
      
      <Tab.Screen 
        name="Notifications" 
        component={NotificationScreen} 
        options={{ tabBarBadge: 3, tabBarIcon: () => <MIcon name={"bell-outline"} size={18} color={"blue"} /> }}
      
      />
    </Tab.Navigator>
  );
}

const StackNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  )
}

export {StackNavigator}

