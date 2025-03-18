import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { HooksContext } from './HooksExample'

const ChildComponent2 = ( { msg}) => {
  const value = useContext(HooksContext)
  return (
    <View>
      <Text>pass value with props is : {msg}</Text>
      <Text>pass value with usecontext is : {value}</Text>
    </View>
  )
}

export default ChildComponent2