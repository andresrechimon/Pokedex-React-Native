import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigator } from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './TabsNavigator2';
const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
        backgroundColor: 'white'
    }}
    screenOptions={{ 
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        },
        tabBarActiveTintColor: 'red',
        tabBarStyle: { 
            position: 'absolute',
            backgroundColor: 'rgba(255,255,255,0.82)', 
            // paddingBottom: 10, //( Platform.OS === 'ios') ? 0 : 10, 
            borderWidth: 0,
            elevation: 0,
            height: 60,//( Platform.OS === 'ios') ? 70 : 80,
        }
    }}
    >
      <Tab.Screen 
      name="StackNavigator" 
      component={StackNavigator} 
      options={{
        tabBarLabel: "List",
        tabBarIcon: ({color}) => <Icon color={color} size={30} name="list-outline"/>
      }}
      />
      <Tab.Screen 
      name="SearchScreen" 
      component={Tab2Screen} 
      options={{
        tabBarLabel: "Search",
        tabBarIcon: ({color}) => <Icon color={color} size={30} name="search-outline"/>
      }}
      />
    </Tab.Navigator>
  );
}