import React,{useEffect, useState} from 'react';
import { Text, View,ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SettingsScreen from './src/components/settingsScreen/SettingsScreen';
import HomeScreen from './src/components/homeScreen/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createMaterialTopTabNavigator();

export default function App() {
const [dataJson, setDataJson] = useState({})

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@dataJsonStore')
    if(value !== null) {
    setDataJson(JSON.parse(value))
    }else{
    const resultsEmpty={myResults:{}}
    const jsonValue = JSON.stringify(resultsEmpty)
    await AsyncStorage.setItem('@dataJsonStore', jsonValue)
    setDataJson(resultsEmpty)
    }
  } catch(e) {
    alert(e) 
   }
}

useEffect(() => {
 getData()
}, [])


console.log(dataJson)
  return (
    !dataJson.myResults?(
      <View style={[styles.container]}>
      <ActivityIndicator size="large" color="#0000ff"/>
      </View>
      )
    :(
      <NavigationContainer >
      <Tab.Navigator style={{marginTop:"10%"}}> 
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" children={()=><SettingsScreen dataJson={dataJson}/>}/>
      </Tab.Navigator>
    </NavigationContainer>
    )
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center"
  }
})