import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native'

import DetailText from '../components/DetailText'

function DetailsScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topElement}>
        <Text style={styles.titleText}>Account Details</Text>
        <View style={styles.detailsBox}>
          <DetailText title="URL" subtitle="https://google.com" />
          <DetailText
            title="Username or Email"
            subtitle="ilhamabdulmalik21@gmail.com"
          />
          <DetailText title="Password" subtitle="secret123" />
        </View>
      </View>
      <View style={styles.bottomElement}>
        <TouchableOpacity>
          <Text style={{ ...styles.actionButton, backgroundColor: '#FD9D44' }}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ ...styles.actionButton, backgroundColor: '#ED5454' }}>
            Delete
          </Text>
        </TouchableOpacity>
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
