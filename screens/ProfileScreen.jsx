import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class ProfileScreen extends Component {
   
    render() { 
        const { params } = this.props.route 

        this.props.navigation.setOptions({
            headerTitle:params.imie
        })
        
        return (
            <View style= {{flex:1, alignItems:'center'}}>
                
                    <Image source={{uri: params.profilePic}}
                    style={{width:350,height:350, borderRadius:180,margin:10}}
                    />
            
            

                
            
                <View style={{width:'90%', flex:1, backgroundColor:'white', borderRadius:20, padding:20, alignItems:'center'}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:22, fontWeight:'bold'}}>Imie: </Text>
                        <Text style={{color:'blue',fontSize:22, fontWeight:'bold'}}>{params.imie}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:22, fontWeight:'bold'}}>Wiek: </Text>
                        <Text style={{color:'blue', fontSize:22, fontWeight:'bold'}}>{params.wiek}</Text>
                    </View>

                </View>
            </View>
        )
    }
}
