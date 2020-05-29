import React from 'react'
import {View , Text , TouchableOpacity ,StyleSheet} from 'react-native'

export default function List({title,chapter,reading , onPress}) {


  return (
   <TouchableOpacity onPress={onPress}>
     <View style={styles.container}>
       <Text style={styles.title}>{title}</Text>
       <Text style={styles.chapter}>{chapter}</Text>
   </View>
   </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-around",
    padding:10,
    borderWidth:0.4,
    marginBottom:1

  },
  title:{
    color:"red"
  },
  chapter:{
    width:50,
    color:"blue"
  }
})
