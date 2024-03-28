import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../theme/globalStyles'

const AppLoading = () => {
  return (
    <View style={[globalStyles.containerBG, globalStyles.alignJC]}>
    <ActivityIndicator size={'small'}  />
    </View>
  )
}

export default AppLoading
