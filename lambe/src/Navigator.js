import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from './screens/Feed';
import Icon from 'react-native-vector-icons/FontAwesome'
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';

const BTN = createBottomTabNavigator();



const RegisterStack = createStackNavigator();

function RegisterStackScreen() {
    return (
        <RegisterStack.Navigator headerMode='screen'>
            <RegisterStack.Screen name="Login" component={Login} />
            <RegisterStack.Screen name="Registrar" component={Register} />
        </RegisterStack.Navigator>
    );
}

//state = {
   // let showLoginScreen = true
//}
/*
export function loginOrProfile() {
    showLoginScreen ? showLoginScreen = false
        : showLoginScreen = true
}*/

function Tabs() {
    return (
        <BTN.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    // Operador ternário para depois tentar colocar ícones
                    // diferentes quando selecionado ou não (não suportado pelo FontAwesome).
                    if (route.name === 'Feed') {
                        iconName = focused ? 'home' : 'home'
                    } else if (route.name === 'Adicionar foto') {
                        iconName = focused ? 'camera' : 'camera'
                    } else if (route.name === 'Seu perfil') {
                        iconName = focused ? 'user' : 'user'
                    } else if (route.name === 'Login') {
                        iconName = focused ? 'lock' : 'lock'
                    }

                    return <Icon name={iconName} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                activeTintColor: '#000',
                inactiveTintColor: '#999',
                showLabel: true
            }}>
            <BTN.Screen name="Feed" component={Feed} />
            <BTN.Screen name="Adicionar foto" component={AddPhoto} />
            <BTN.Screen name="Seu perfil" component={Profile} />
            <BTN.Screen name="Login" component={RegisterStackScreen} />
        </BTN.Navigator>
    );
}

export default () => {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
}