import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'

// os defaults poderão ser importados em outras classes sem precisar de chaves
// exports sem default precisam ser importados usando chaves, para ser mais específico

export const Inverter = props => {
    const inv = props.texto.split('').reverse().join('')
    return <Text style={Padrao.ex}>{inv}</Text>
}

export const MegaSena = props => {
    // destructuring
    const [min, max] = [1, 60]
    const numeros = Array(props.numeros || 6).fill(0)

    for(let i=0; i<numeros.length; i++) {
        let novo = 0
        while(numeros.includes(novo)){
            novo = Math.floor(Math.random() * (max - min + 1) + min)
        }
        numeros[i] = novo
    }
    
    numeros.sort((a, b) => a - b)
    
    return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
}

// Como default, podemos exportar algo
//export default Inverter

// Podemos também exportar só o que queremos exportar
//export { Inverter, MegaSena }