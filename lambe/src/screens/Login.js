import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/user'
import { loginOrProfile } from '../Navigator'
import Navigator from '../Navigator'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

class Login extends Component {

    state = {
        name: 'Temporário',
        email: '',
        password: ''
    }

    login = () => {
        this.props.onLogin({ ...this.state })
        this.props.navigation.navigate('Seu perfil')
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='E-mail' style={styles.input}
                    autoFocus={false} keyboardType='email-address'
                    value={this.state.email} onChangeText={email => this.setState({ email })} />
                <TextInput placeholder='Senha' style={styles.input}
                    secureTextEntry={true} value={this.state.password}
                    onChangeText={password => this.setState({ password })} />
                <TouchableOpacity onPress={this.login} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Registrar')} style={styles.button}>
                    <Text style={styles.buttonText}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    },
    button: {
        marginTop: 30,
        padding: 20,
        backgroundColor: '#4286F4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    }

})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

//export default Login
export default connect(null, mapDispatchToProps)(Login)