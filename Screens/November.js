import React from 'react'
import { FlatList , SafeAreaView} from "react-native";
import List from "../components/List";
import dataNovember from "../components/dataNovember"


export default function November({navigation}) {

  const navigateToReading =(index ) => {
    navigation.navigate("Reading" , {index })
  }
  

  return (
    <SafeAreaView>
    <FlatList
    data={dataNovember}
    renderItem={({item , index})=>(
      <List  title={item.title} onPress={() => navigateToReading(index)} item={item} chapter={item.chapter} reading={item.reading} />
    )}
    />
  </SafeAreaView>
)
}
