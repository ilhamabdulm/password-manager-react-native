import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function ProfileBtn() {
  const { navigate } = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigate('Profile')}>
      <MaterialIcons
        name="account-circle"
        size={28}
        color="#fafafa"
        style={{ marginRight: 20 }}
      />
    </TouchableOpacity>
  )
}
