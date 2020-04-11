import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import ScreenNavigator from './src/navigations/ScreenNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <ScreenNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
