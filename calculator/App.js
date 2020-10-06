import React, { Component }from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

import Button from './src/components/Button'
import Display from './src/components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class App extends Component {

    state = { ...initialState }

    addDigit = n => {
        // Limpar o display se o valor for zero ou se clearDisplay for true
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        // Se for digitado um ponto, não for pra limpar o display e o display já tem um ponto, retorna
        if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) return
        
        // Recebe vazio se clearDisplay for true ou o valor que tá atualmente se for falso.
        const currentValue = clearDisplay ? '' : this.state.displayValue
        // Concatena o valor que tava no display com o recebido ao chamar a function
        const displayValue = currentValue + n
        // Seta o novo estado
        this.setState({ displayValue, clearDisplay: false })

        // Se o valor recebido for diferente de um ponto
        if (n !== '.') {
            // Pega o valor do display e transforma para float
            const newValue = parseFloat(displayValue)
            // Clona o Array de values do state
            const values = [...this.state.values]
            // Pega o novo value e coloca na posição atual (current)
            values[this.state.current] = newValue
            // ... e coloca no estado
            this.setState({ values })
        }
    }

    clearMemory = () => {
        // Volta ao estado inicial
        this.setState({ ...initialState })
    }

    setOperation = operation => {
        // Se o operando atual (current) for o primeiro (0)
        if (this.state.current === 0) {
            // Seta a operação recebida, muda o current para 1 (próx. operando) e limpa o display
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            // Verifica se a operação é de igual (e guarda num boolean)
            const equals = operation === '='
            // Clona o Array de values do state
            const values = [...this.state.values]
            try {
                // Realiza a operação, colocando o valor no primeiro operando
                values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
            } catch (e) {
                // Nem sempre a operação pode ser realizada, então realiza alguma ação sem efeito pra capturar o erro
                values[0] = this.state.values[0]
            }

            // Coloca zero no segundo operando
            values[1] = 0
            // Define como vai ser o estado depois de realizar a operação
            this.setState({
                // O display vai mostrar o que está no primeiro operando
                displayValue: `${values[0]}`,
                // Se a operação foi de igual, coloca null em operation (nenhuma operação), senão, coloca a operação nova
                operation: equals ? null : operation,
                // Se a operação foi de igual, coloca 0 no current (operando atual) ou 1 se foi alguma outra operação
                current: equals ? 0 : 1,
                //clearDisplay: !equals,
                clearDisplay: true,
                values
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Display value={this.state.displayValue} />
                <View style={styles.buttons}>
                    <Button label='%' />
                    <Button label='C' onClick={this.clearMemory} />
                    <Button label='Del' />
                    <Button label='/' operation onClick={ this.setOperation} />
                    <Button label='7' onClick={this.addDigit} />
                    <Button label='8' onClick={this.addDigit} />
                    <Button label='9' onClick={this.addDigit} />
                    <Button label='*' operation onClick={this.setOperation} />
                    <Button label='4' onClick={this.addDigit} />
                    <Button label='5' onClick={this.addDigit} />
                    <Button label='6' onClick={this.addDigit} />
                    <Button label='-' operation onClick={this.setOperation} />
                    <Button label='1' onClick={this.addDigit} />
                    <Button label='2' onClick={this.addDigit} />
                    <Button label='3' onClick={this.addDigit} />
                    <Button label='+' operation onClick={this.setOperation} />
                    <Button label='.' onClick={this.addDigit} />
                    <Button label='0' onClick={this.addDigit}  />
                    <Button label='=' double operation onClick={this.setOperation} />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },


  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});