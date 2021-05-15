import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default function funkcyjny() {

    const [danie, setDanie] = React.useState()

    const zmiendanie = () => {
        if(danie=='jajecznica'){
            setDanie('parówki')

        }else{setDanie('jajecznica')}
    }
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity onPress={()=> zmiendanie()} style = {{width:100, height:100,borderRadius:60, justifyContent:'center', alignItems:'center', backgroundColor:'#3333cc'}}>
                    <Text style={{color:'white', fontSize: 20}}>
                        Danie
                    </Text>
                </TouchableOpacity>
            <Text style= {{fontSize:30}}>
               {danie}
            </Text>
            </View>
    )
}
