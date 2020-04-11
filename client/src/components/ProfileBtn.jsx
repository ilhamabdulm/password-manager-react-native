import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

export default function ProfileBtn() {
  return (
    <TouchableOpacity>
      <MaterialIcons
        name="account-circle"
        size={28}
        color="#fafafa"
        style={{ marginRight: 20 }}
      />
    </TouchableOpacity>
  )
}
