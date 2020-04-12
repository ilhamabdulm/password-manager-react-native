import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import store from './src/store'
import ScreenNavigator from './src/navigations/ScreenNavigator'

export default function App() {
  console.disableYellowBox = true
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ScreenNavigator />
      </NavigationContainer>
    </Provider>
  )
}
