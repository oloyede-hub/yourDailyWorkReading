import React from 'react';
import {View , Text} from "react-native"




export default function Reading(props) {

const index = props.route.params.index;
const item = props.route.params.item[index];

  return (
    <View>
        <Text>{reading}</Text>
    </View>
  )
}
