import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class SecondComponent extends Component {
    render() {
        if(this.props.typ == 'zielony')
        {
            return (
                <View>
                    <View style= {{width:100,height:100,borderRadius:60, backgroundColor:'green'}}>
                        <Text>{this.props.title}</Text>
                    </View>
                </View>
            )
        }
        if(this.props.typ == 'czerwony')
            return (
                <View>
                    <View style= {{width:100,height:100,borderRadius:60, backgroundColor:'red'}}>
                        <Text>{this.props.title}</Text>
                    </View>
                </View>
            )
            if(this.props.typ == 'niebieski')
            return (
                <View>
                    <View style= {{width:100,height:100,borderRadius:60, backgroundColor:'blue'}}>
                        <Text>{this.props.title}</Text>
                    </View>
                </View>
            )
        }
        
        
    }
        
            
        
    
    
    
    
    
