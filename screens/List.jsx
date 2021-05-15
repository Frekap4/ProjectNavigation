import React, { Component } from 'react'
import { Text, View,ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { TextInput } from 'react-native-gesture-handler';
import{ getUsers, addUserToDB } from '../actions/dane'


const {width,height} = Dimensions.get('window')

export default class List extends Component {

    componentDidMount = async () => {
        const users = await getUsers()
         this.setState({arrayUz:users})
    }

    state = {
        addUser:false,
        image:undefined,
        
    }



    otworzBib = async () => { 
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }else{
        this.pickImage()
    }
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({image: result.uri})
        }
      };


    dodajNowegoUz = () => {
        let array = {
            imie:this.state.noweImie,
            wiek:parseInt(this.state.nowywiek),
            profilePic:this.state.image

        }
        let nowyArray = this.state.arrayUz.concat(array)
        this.setState({arrayUz:nowyArray})
        this.setState({addUser:false})

        addUserToDB(array)   
    }

    usunUz = (uzytkownikDoUsuniecia) => {
        let newArray = []
        this.state.arrayUz.forEach(element => {
            newArray.push(element)
        });
        newArray.splice(uzytkownikDoUsuniecia, 1)
        this.setState({arrayUz:newArray})
    
    }
    render() {
        if(this.state.addUser == false){
        return(
        <View style={{flex:1, alignItems:'center'}}>
                <ScrollView style={{flex:1}}>
                    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                        {
                            this.state.arrayUz?.map((_,i) => {
                                return(
                                    <TouchableOpacity style={{
                                        height:80,
                                        borderRadius:20,
                                        backgroundColor:'white',
                                        justifyContent:'center',
                                        alignItems:'center',
                                        width:width*.8,

                                        margin:10,
                                        
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 3,
                                        },
                                        shadowOpacity: 0.27,
                                        shadowRadius: 4.65,

                                        elevation: 6,
                                    }} 
                                    onPress={()=> this.props.navigation.navigate("ProfileScreen" , this.state.arrayUz[i])}
                                    onLongPress={()=>this.usunUz(i)}
                                    >
                                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                            <Image source={{ uri: this.state.arrayUz[i].profilePic }} 
                                            style={{
                                                width:50,
                                                height:50,
                                                borderRadius:25,

                                                marginHorizontal:10
                                            }}
                                            />
                                            <Text style={{
                                                color:'#3333cc',
                                                fontSize:24, 
                                                fontWeight:'bold', 
                                                margin:10,
                                                flex:1
                                                }}
                                                >{this.state.arrayUz[i].imie}</Text>
                                            <Text style={{
                                                color:'#3333cc',
                                                fontSize:24,
                                                fontWeight:'bold', 
                                                margin:10
                                                }}
                                                >Age: {this.state.arrayUz[i].wiek}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                            
                        }
                        
                    </View>
                
                </ScrollView>
                <TouchableOpacity style={{position:'absolute', bottom:50, zIndex:100,width:width*0.7,height:60,backgroundColor:'blue',justifyContent:'center',alignItems:'center',borderRadius:20}}
                    onPress={()=>this.setState({addUser:true})}
                >
                        <Text style={{color:'white', fontSize:22,fontWeight:'bold'}}>Add User</Text>
                    </TouchableOpacity>
                </View>
                
            
            
        )
        }
        else {
            return(
                <View style={{flex:1, alignItems: 'center'}}>

                {
                    (this.state.image == undefined) ?
                    <TouchableOpacity style={{width:150 , height:150, borderRadius:75,backgroundColor:'blue'}}
                    onPress={()=>this.otworzBib()}
                    >
                        <Image style={{width:150, height:150, borderRadius:75}}
                        source={require('../assets/german.png')}/>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                    onPress={()=>this.otworzBib()}>
                        <Image source={{uri: this.state.image}}
                        style={{width:150, height:150, borderRadius:75}}/>
                    </TouchableOpacity>
            }


            <TextInput style={{width:width*.9, height:100,borderRadius:20, margin:19, borderWidth:4, borderColor:'blue', fontSize:24 }}
            onChangeText={(text)=>this.setState({noweImie:text})}
            textAlign="center"
            placeholder="Imie i Nazwisko"
            />

            <TextInput style={{width:width*.9, height:100,borderRadius:20, margin:19, borderWidth:4, borderColor:'blue', fontSize:24, fontWeight:'bold'}}
            onChangeText={(text)=>this.setState({nowywiek:text})}

            keyboardType='numeric'
            textAlign="center"
            placeholder="Wiek"
            />







                    <Text></Text>
                    <TouchableOpacity style={{position:'absolute', bottom:50, zIndex:100,width:width*0.7,height:60,backgroundColor:'blue',justifyContent:'center',alignItems:'center',borderRadius:20}}
                    onPress={()=>this.dodajNowegoUz()}
                >
                        <Text style={{color:'white', fontSize:22,fontWeight:'bold'}}>Add User</Text>
                    </TouchableOpacity>
                </View>
                )
            }
    }
}
