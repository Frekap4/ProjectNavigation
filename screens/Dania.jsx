import React, { Component } from 'react'
import { Text, Touchable, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Dania extends Component {
    state = {
        danie:"parówki"

        
    }
    zmiendanie() {
        if (this.state.danie == 'parówki'){
            this.setState({danie:'kotlet'})
        }
        else {this.setState({danie:'parówki '})}
    }

     
        
    


    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity onPress={()=> this.zmiendanie()} style = {{width:100, height:100,borderRadius:60, justifyContent:'center', alignItems:'center', backgroundColor:'#3333cc'}}>
                    <Text style={{color:'white', fontSize: 20}}>
                        Danie
                    </Text>
                </TouchableOpacity>
            <Text style= {{fontSize:30}}>
               {this.state.danie}
            </Text>
            </View>
        )
    }
}
