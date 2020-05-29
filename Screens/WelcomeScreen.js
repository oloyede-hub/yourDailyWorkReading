import React from 'react';
import {View , Text,TouchableOpacity}  from "react-native";

export default function WelcomeScreen({navigation}) {

const goToSep =()=>{
    navigation.navigate("September")
}
const goToNov =()=>{
    navigation.navigate("November")
}
const goToDec =()=>{
    navigation.navigate("December")
}
const goToOct =()=>{
    navigation.navigate("October")
}

  return (


   <View>
       <View><Text>Welcome To Your Daily Work with the Master</Text></View>
       <TouchableOpacity onPress={goToSep}><Text>September</Text></TouchableOpacity>
       <TouchableOpacity onPress={goToOct}><Text>Octomber</Text></TouchableOpacity>
       <TouchableOpacity onPress={goToNov}><Text>November</Text></TouchableOpacity>
       <TouchableOpacity onPress={goToDec}><Text>December</Text></TouchableOpacity>
   </View>
  )
}
