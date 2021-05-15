import * as React from 'react';
import { View, Text , TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen.jsx'
import PostScreen from '../screens/PostScreen.jsx'
import List from '../screens/List.jsx'
import ProfileScreen from '../screens/ProfileScreen.jsx';
import Testy from '../screens/Testy.jsx'
import Dania from '../screens/Dania.jsx';
import Funkcyjny from '../screens/Funkcyjny.jsx'
import Zdjecia from '../screens/Zdjecia.jsx';
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Testy" component={Testy} />
        <Stack.Screen name="Dania" component={Dania} />
        <Stack.Screen name="Funkcyjny" component={Funkcyjny} />
        <Stack.Screen name="Zdjecia" component={Zdjecia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;