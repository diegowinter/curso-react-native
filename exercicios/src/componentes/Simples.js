import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

/*
export default function(props) {
    return <Text>{props.texto}</Text>
}*/

export default props =>
    <Text style={Padrao.ex}>Função Arrow: {props.texto}</Text>

/*
export default props =>
    <View>
        <Text>Função Arrow1: {props.texto}</Text>
        <Text>Função Arrow2: {props.texto}</Text>
        <Text>Função Arrow3: {props.texto}</Text>
    </View> 
*/

/*
export default props => [
    <Text key={1}>Função Arrow1: {props.texto}</Text>,
    <Text key={2}>Função Arrow2: {props.texto}</Text>
]
*/   