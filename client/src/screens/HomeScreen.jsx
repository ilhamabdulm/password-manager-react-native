import React from 'react'
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native'

import WelcomeCard from '../components/WelcomeCard'
import AccountCard from '../components/AccountCard'
import { ScrollView } from 'react-native-gesture-handler'

function HomeScreen() {
  return (
    <ImageBackground
      source={require('../../assets/home-bg.png')}
      style={styles.imageBackground}
    >
      <View style={styles.welcomeCard}>
        <WelcomeCard />
      </View>
      <ScrollView
        style={styles.accountList}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {/* <Text>There are no account stored here</Text> */}
        <AccountCard />
        <AccountCard />
        <AccountCard />
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  welcomeCard: {
    marginTop: 70,
  },
  accountList: {
    marginVertical: 20,
    width: Dimensions.get('window').width,
  },
})

export default HomeScreen
