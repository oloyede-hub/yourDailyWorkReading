import React from 'react';
// import { StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import December from "./Screens/December";
import November from "./Screens/November";
import October from "./Screens/October";
import September from "./Screens/September";
import WelcomeScreen from "./Screens/WelcomeScreen"
import Reading from "./Screens/Reading"




const Stack = createStackNavigator();

export default function App() {




  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={({navigation}) =><WelcomeScreen navigation={navigation} />} />
        <Stack.Screen name="September" component={({navigation})=><September navigation={navigation} />} />
        <Stack.Screen name="October" component={({navigation})=><October navigation={navigation} />} />
        <Stack.Screen name="November" component={({navigation}) => <November navigation={navigation} />} />
        <Stack.Screen name="December" component={({navigation}) => <December navigation={navigation} />} />
        <Stack.Screen name="Reading" component={props =><Reading {...props}  />} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
