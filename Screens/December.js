import React from 'react'
import {FlatList , SafeAreaView} from "react-native";
import List from "../components/List"
import dataDecember from "../components/dataDecember"


export default function December({navigation}) {

 const navigateToReading =(index) => {
   navigation.navigate("Reading" , {index })
 }
  
const navigateToPassItem= (item) =>{
  navigation.navigate("Reading" , {item })
}

const realTimeNavigation =(item , index)=>{
  navigateToReading(index);
  navigateToPassItem(item);
}

  return (
    <SafeAreaView>
    <FlatList
    data={dataDecember}
    renderItem={({item , index})=>(
      <List  title={item.title} onPress={() => realTimeNavigation(index , item )} item={item} chapter={item.chapter} reading={item.reading} />
    )}
    />
  </SafeAreaView>
);
}
