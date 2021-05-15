import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { pozyskajDane } from '../actions/dane.jsx'

export default class Testy extends Component {
    render() {
        return (
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
            }}>
                
                <TouchableOpacity style={{
                    padding:30,
                    backgroundColor:'blue',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:30
                    }}
                    onPress={()=>pozyskajDane()}

                    >
                    <Text style={{color:'white',fontSize:24}}>Zapytaj o dane</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
