import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  ProfileScreen,
  MessageScreen,
  NotificationScreen,
  BookmarkScreen,
} from '../screens';

const BottomTabNav = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <BottomTabNav.Navigator
      backBehavior="history"
      initialRouteName="Posts"
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTabNav.Screen name="Home" component={HomeScreen} />
      <BottomTabNav.Screen name="Profile" component={ProfileScreen} />
      <BottomTabNav.Screen name="Message" component={MessageScreen} />
      <BottomTabNav.Screen name="Notification" component={NotificationScreen} />
      <BottomTabNav.Screen name="Bookmark" component={BookmarkScreen} />
    </BottomTabNav.Navigator>
  );
};
