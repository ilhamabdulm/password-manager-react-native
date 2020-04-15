import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

function DetailText({ title, subtitle, action, type }) {
  const [border, setBorder] = useState(0)
  const [borderColor, setColor] = useState('')

  const onFocus = () => {
    setBorder(1)
    setColor('#fafafa')
  }

  const onBlur = () => {
    setBorder(0), setColor('')
  }

  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput
        defaultValue={subtitle}
        style={{
          ...styles.subtitleText,
          borderColor: borderColor,
          borderWidth: border,
        }}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        onChangeText={(text) => {
          action(type, text)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    color: '#fafafa',
    fontWeight: '700',
    paddingHorizontal: 5,
  },
  subtitleText: {
    fontSize: 18,
    color: '#fafafa',
    fontWeight: '200',
    paddingHorizontal: 5,
  },
})

export default DetailText
