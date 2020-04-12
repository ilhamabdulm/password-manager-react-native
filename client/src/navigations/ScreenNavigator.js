import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import ProfileScreen from '../screens/ProfileScreen'

import ProfileBtn from '../components/ProfileBtn'

const Stack = createStackNavigator()

const headerOptions = {
  title: 'Password Manager',
  headerStyle: {
    backgroundColor: '#3B89FE',
    shadowColor: 'none',
  },
  headerTintColor: '#fafafa',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center',
  headerRight: () => {
    return <ProfileBtn />
  },
}

function ScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ ...headerOptions, headerLeft: null }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={headerOptions}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={headerOptions}
      />
    </Stack.Navigator>
  )
}

export default ScreenNavigator
