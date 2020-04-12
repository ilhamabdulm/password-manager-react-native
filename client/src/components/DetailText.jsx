import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

function DetailText({ title, subtitle, action }) {
  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput
        style={styles.subtitleText}
        defaultValue={subtitle}
        onChangeText={(text) => action(text ? text : subtitle)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    color: '#fafafa',
    fontWeight: '700',
  },
  subtitleText: {
    fontSize: 18,
    color: '#fafafa',
    fontWeight: '200',
  },
})

export default DetailText
