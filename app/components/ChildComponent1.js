import { View, Text } from 'react-native'
import React from 'react'
import ChildComponent2 from './ChildComponent2'

const ChildComponent1 = ( { msg}) => {
  return (
    <View>
       <ChildComponent2 msg = {msg} ></ChildComponent2>
    </View>
  )
}

export default ChildComponent1