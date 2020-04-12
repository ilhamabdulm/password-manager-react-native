import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import FormScreen from '../screens/FormScreen'

import ProfileBtn from '../components/ProfileBtn'
import { useSelector } from 'react-redux'

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
  const { statusLogin } = useSelector((state) => state.userReducers)

  return (
    <Stack.Navigator initialRouteName={statusLogin ? 'Home' : 'Login'}>
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
      <Stack.Screen
        name="Form"
        component={FormScreen}
        options={headerOptions}
      />
    </Stack.Navigator>
  )
}

export default ScreenNavigator
