import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'





export default function Zdjecia() {
    const [zdjecie, setzdjecie] = React.useState()
    const zmiendanie = () => {
        if (zdjecie=='https://i.iplsc.com/000AACEGBCVEEQLP-C0.jpeg'){
            setzdjecie('https://siedlce.topaz24.pl/userdata/public/gfx/27047.jpg')}

        else {setzdjecie('https://i.iplsc.com/000AACEGBCVEEQLP-C0.jpeg')}
        }
    return (
        <View style={{flex:1}}>
            <TouchableOpacity style={{flex:1}} onPress={()=> zmiendanie()}>
            <Image style={{flex:1}} source={{ uri: zdjecie  }}/>
            </TouchableOpacity>
        </View>
    )
}
