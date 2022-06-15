import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native';

export const Loading = () => {
  return (
    <View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator
        size={50}
        color="red"
        />
        <Text style={{color: 'red'}}>Loading...</Text>
      </View>
    </View>
  )
}
