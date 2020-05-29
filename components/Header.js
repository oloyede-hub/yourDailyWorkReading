import React from 'react'
import {View  , Text } from "react-native"

export default function Header({datatitle}) {
  return (
   <View>
     <Text>{datatitle}</Text>
   </View>
  );
}
