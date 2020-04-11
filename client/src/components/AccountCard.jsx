import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

function AccountCard() {
  return (
    <TouchableOpacity>
      <View style={styles.containerBox}>
        <Image
          source={require('../../assets/google-logo.png')}
          style={styles.imageLogo}
        />
        <Text style={styles.urlText}>https://google.com</Text>
        <TouchableOpacity>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={30}
            color="#3B89FE"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containerBox: {
    backgroundColor: '#fafafa',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 70,
    width: 369,
    marginVertical: 7,
  },
  urlText: {
    fontSize: 18,
    color: '#3B89FE',
    fontWeight: '700',
  },
  imageLogo: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
})

export default AccountCard
