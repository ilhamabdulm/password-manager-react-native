import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function DetailText({ title, subtitle }) {
  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.subtitleText}>{subtitle}</Text>
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
