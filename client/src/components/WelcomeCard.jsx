import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

function WelcomeCard({ name }) {
  const { navigate } = useNavigation()

  return (
    <View style={styles.boxContainer}>
      <Text style={styles.userText}>Hello, {name}</Text>
      <View style={styles.actionArea}>
        <Text style={styles.hintText}>Manage your accounts below</Text>
        <TouchableOpacity onPress={() => navigate('Form')}>
          <MaterialIcons name="add-box" size={20} color="#fafafa" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boxContainer: {
    width: 350,
    height: 155,
    backgroundColor: '#69F0AE',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  userText: {
    color: '#fafafa',
    fontSize: 24,
    paddingLeft: 20,
    paddingTop: 40,
    fontWeight: '700',
  },
  actionArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 50,
  },
  hintText: {
    color: '#fafafa',
    fontSize: 14,
    fontWeight: '100',
  },
})

export default WelcomeCard
