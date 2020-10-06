import React from 'react'
import { Button, Altert, ToastAndroid, Platform, Alert } from 'react-native'

export default props => {
    const notificar = msg => {
        if(Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            Alert.alert('Informação', msg) //Também funciona no Android
        }
    }

    return(
        <Button title='Plataforma?'
            onPress={() => notificar('Parabéns!')}/>
    )
}