import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfileScreen} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootStackParamList} from '../types/navigation';

const Tab = createBottomTabNavigator<RootStackParamList>();

const tabBarIcon =
  (route: {name: string}) =>
  ({color, size}: {color: string; size: number}) => {
    let iconName = route.name === 'Home' ? 'home' : 'person';
    return <Icon name={iconName} size={size} color={color} />;
  };

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: tabBarIcon(route),
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
