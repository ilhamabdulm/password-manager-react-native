import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

function AccountCard({ url, id }) {
  const domain = url ? url.substring(url.lastIndexOf('/') + 1) : ''
  const { navigate } = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigate('Details', { id: id })}>
      <View style={styles.containerBox}>
        <Image
          source={{
            uri: `https://logo.clearbit.com/${domain}`,
          }}
          style={styles.imageLogo}
        />
        <Text style={styles.urlText}>{url}</Text>
        <TouchableOpacity onPress={() => navigate('Details')}>
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
