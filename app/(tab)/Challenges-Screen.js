import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const ChallengesScreen = () => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ChallengesScreen</Text>
    </View>
  )
}

export default ChallengesScreen