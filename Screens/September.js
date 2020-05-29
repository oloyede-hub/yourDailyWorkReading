import React from 'react'
import { FlatList, SafeAreaView} from "react-native"
import List from "../components/List";
import dataSeptember from "../components/dataSeptember"



export default function September({navigation}) {

  const navigateToReading =(index ) => {
    navigation.navigate("Reading" , {index} )
  }

    return (
      <SafeAreaView>
      <FlatList
      data={dataSeptember}
      renderItem={({item , index})=>(
        <List  title={item.title} onPress={() => navigateToReading(index)} item={item} chapter={item.chapter} reading={item.reading} />
      )}
      />
    </SafeAreaView>
  )
}
