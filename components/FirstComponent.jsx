import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class FirstComponent extends Component {
    render() {
        if(this.props.typ == 'kolo')
        {
            return (
                <View>
                    <View style= {{width:100,height:100,borderRadius:60, backgroundColor:'green'}}>
                        <Text>{this.props.title}</Text>
                    </View>
                </View>
            )
        }
        else{
            return (
                <View>
                    <View style= {{width:100,height:100, backgroundColor:'green'}}>
                        <Text>{this.props.title}</Text>
                    </View>
                </View>
            )
        }
    }
}


