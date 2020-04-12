import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

function ActionButton({ name, action, color }) {
  return (
    <TouchableOpacity
      style={{ ...styles.submitBtn, backgroundColor: color }}
      onPress={action}
    >
      <Text style={styles.submitText}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  submitBtn: {
    borderRadius: 20,
    width: 163,
    height: 37,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 14,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4,
    elevation: 4,
  },
  submitText: {
    color: '#fafafa',
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
  },
})

export default ActionButton
