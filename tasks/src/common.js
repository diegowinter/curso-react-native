import {
    Alert,
    Platform
} from 'react-native'

const server = Platform.OS === 'ios'
    ? 'http://localhost:3000' : 'http://192.168.0.108:3000'

function showError(err) {
    if(err.response && err.response.data) {
        Alert.alert('Ops! Algo deu errado', `Mensagem: ${err.response.data}`)
    } else {
        Alert.alert('Ops! Algo deu errado', `Mensagem: ${err}`)
    }
}

function showSuccess(msg) {
    Alert.alert('Sucesso', msg)
}

export { server, showError, showSuccess }