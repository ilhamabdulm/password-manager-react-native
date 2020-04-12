import React, { useEffect, useState } from 'react'
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  RefreshControl,
  AsyncStorage,
  Text,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import WelcomeCard from '../components/WelcomeCard'
import AccountCard from '../components/AccountCard'
import { fetchAccount } from '../store/actions/accountActions'

function HomeScreen() {
  const { userInfo, statusLogin } = useSelector((state) => state.userReducers)
  const { accountList } = useSelector((state) => state.accountReducers)
  const [refreshing, setRefreshing] = useState(false)
  const { navigate } = useNavigation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!statusLogin) {
      navigate('Login')
    }
  }, [statusLogin])

  useEffect(() => {
    console.log('HELLO')
    fetchAccountData()
  }, [])

  const fetchAccountData = async () => {
    try {
      const token = await AsyncStorage.getItem('token')
      dispatch(fetchAccount(token))
    } catch (err) {
      console.log(err)
    }
  }

  const onRefresh = () => {
    console.log('Refreshing account list')
    setRefreshing(true)
    dispatch(fetchAccountData())
    setTimeout(() => {
      setRefreshing(false)
    }, 1000)
  }

  return (
    <ImageBackground
      source={require('../../assets/home-bg.png')}
      style={styles.imageBackground}
    >
      <Text
        style={{
          color: '#fafafa',
          fontSize: 24,
          marginTop: 20,
          fontWeight: '700',
          letterSpacing: 1,
        }}
      >
        Account List
      </Text>
      <View style={styles.welcomeCard}>
        <WelcomeCard name={userInfo.name} />
      </View>
      <ScrollView
        style={styles.accountList}
        contentContainerStyle={{ alignItems: 'center' }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {accountList.length < 1 ? (
          <Text>There are no account stored here</Text>
        ) : (
          accountList.map((account, idx) => (
            <AccountCard url={account.url} id={account._id} key={idx} />
          ))
        )}
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
    marginTop: 20,
  },
  accountList: {
    marginVertical: 20,
    width: Dimensions.get('window').width,
  },
})

export default HomeScreen
