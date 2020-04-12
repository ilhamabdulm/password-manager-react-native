import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, AsyncStorage } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import {
  fetchDetails,
  clearDetails,
  removeAccount,
  editAccount,
} from '../store/actions/accountActions'
import DetailText from '../components/DetailText'
import ActionButton from '../components/ActionButton'

function DetailsScreen({ route, navigator }) {
  const [url, setUrl] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const accountId = route.params.id
  const { accountData, accountList } = useSelector(
    (state) => state.accountReducers
  )
  const dispatch = useDispatch()
  const { navigate } = useNavigation()

  useEffect(() => {
    getDetails()
    return () => {
      dispatch(clearDetails())
    }
  }, [])

  useEffect(() => {
    const isAvalaible = accountList.findIndex((acc) => acc._id === accountId)
    if (isAvalaible < 0) {
      navigate('Home')
    }
  }, [accountList])

  const getDetails = async () => {
    try {
      const token = await AsyncStorage.getItem('token')
      dispatch(fetchDetails(accountId, token))
    } catch (err) {
      console.log(err)
    }
  }

  const deleteAccount = async () => {
    try {
      const token = await AsyncStorage.getItem('token')
      dispatch(removeAccount(accountId, token))
    } catch (err) {
      console.log(err)
    }
  }

  const handleEdit = async () => {
    try {
      const inputData = {
        url,
        username,
        password,
      }
      console.log(inputData)
      const token = await AsyncStorage.getItem('token')
      dispatch(editAccount(token, inputData, accountId))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topElement}>
        <Text style={styles.titleText}>Account Details</Text>
        <View style={styles.detailsBox}>
          <DetailText
            title="URL"
            subtitle={accountData.url}
            action={(text) => setUrl(text)}
          />
          <DetailText
            title="Username or Email"
            subtitle={accountData.username}
            action={(text) => setUsername(text)}
          />
          <DetailText
            title="Password"
            subtitle={accountData.password}
            action={(text) => setPassword(text)}
          />
        </View>
      </View>
      <View style={styles.bottomElement}>
        <ActionButton name="Edit" action={() => handleEdit()} color="#FD9D44" />
        <ActionButton
          name="Delete"
          action={() => deleteAccount()}
          color="#ED5454"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  topElement: {
    marginTop: 50,
    height: 400,
  },
  bottomElement: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 0,
    marginTop: Dimensions.get('window').height - 660,
    backgroundColor: '#3B89FE',
    height: 100,
    width: Dimensions.get('window').width,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  actionButton: {
    color: '#fafafa',
    fontSize: 18,
    letterSpacing: 2,
    width: 163,
    height: 37,
    textAlign: 'center',
    borderRadius: 20,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleText: {
    textAlign: 'center',
    color: '#3B89FE',
    fontSize: 28,
    fontWeight: '700',
  },
  detailsBox: {
    backgroundColor: '#69F0AE',
    width: 358,
    height: 349,
    marginVertical: 40,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
})

export default DetailsScreen
