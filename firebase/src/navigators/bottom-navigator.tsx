/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
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
      <BottomTabNav.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Icon name="bank" size={30} />
            ) : (
              <Icon name="ios-person" size={30} />
            );
          },
        }}
      />
      <BottomTabNav.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Icon name="bank" size={30} />
            ) : (
              <Icon name="user" size={30} />
            );
          },
        }}
      />
      <BottomTabNav.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <MaterialIcon name="email-box" size={30} />
            ) : (
              <MaterialIcon name="email-box" size={30} />
            );
          },
        }}
      />
      <BottomTabNav.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Icon name="bell" size={30} />
            ) : (
              <Icon name="bell" size={30} color="#999" />
            );
          },
        }}
      />
      <BottomTabNav.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Icon name="bookmark" size={30} />
            ) : (
              <Icon name="bookmark" size={30} />
            );
          },
        }}
      />
    </BottomTabNav.Navigator>
  );
};
