import * as React from 'react';
import { View, Text , TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/core'


import FirstComponent from '../components/FirstComponent'
import SecondComponent from '../components/SecondComponent';
export default function HomeScreen() {

    const navigation = useNavigation()

    return (
      <View style={{ flex: 1, alignItems: 'center',justifyContent:'center'  }}>
        <Text style={{fontSize:45, fontWeight:'bold',}}>Home Screen</Text>
        <TouchableOpacity style={{height:80,width:250, margin: 9,backgroundColor:"green",borderRadius:20,justifyContent:'center', alignItems:'center'}} onPress={()=>navigation.navigate("Post")}>
          <Text style = {{color: "white", fontSize:22}}>Change screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:80,width:250, margin: 9 ,backgroundColor:"red",borderRadius:20,justifyContent:'center', alignItems:'center'}} onPress={()=>navigation.navigate("List")}>
          <Text style = {{color: "white", fontSize:22}}>Go to user list</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{height:80,width:250, margin: 9 ,backgroundColor:"orange",borderRadius:20,justifyContent:'center', alignItems:'center'}}onPress={()=>navigation.navigate("Testy")}>
          <Text style ={{color: "white", fontSize:22}}>Testy bazy danych</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{height:80,width:250, margin: 9 ,backgroundColor:"lightblue",borderRadius:20,justifyContent:'center', alignItems:'center'}}onPress={()=>navigation.navigate("Dania")}>
          <Text style ={{color: "white", fontSize:22}}>Dania</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{height:80,width:250, margin: 9 ,backgroundColor:"purple",borderRadius:20,justifyContent:'center', alignItems:'center'}}onPress={()=>navigation.navigate("Funkcyjny")}>
          <Text style ={{color: "white", fontSize:22}}>Funkcyjny</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{height:80,width:250, margin: 9 ,backgroundColor:"#3333cc",borderRadius:20,justifyContent:'center', alignItems:'center'}}onPress={()=>navigation.navigate("Zdjecia")}>
          <Text style ={{color: "white", fontSize:22}}>Zdjecia</Text>
        </TouchableOpacity>

      </View>
    
    );
  }