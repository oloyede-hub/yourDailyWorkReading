import React from 'react'
import { FlatList , SafeAreaView } from "react-native";
import List from "../components/List";
import dataOctomber from "../components/dataOctomber"

export default function October({navigation}) {
    

  const navigateToReading =(index ) => {
    navigation.navigate("Reading" , {index })
  }

  return (
    <SafeAreaView>
    <FlatList
    data={dataOctomber}
    renderItem={({item , index})=>(
      <List  title={item.title} onPress={() => navigateToReading(index)} item={item} chapter={item.chapter} reading={item.reading} />
    )}
    />
  </SafeAreaView>
)
}
