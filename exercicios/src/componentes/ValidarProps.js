import React from 'react'
import propTypes from 'prop-types'
import { Text } from 'react-native'

const ValidarProps = props => 
    <Text style={{fontSize: 35}}>
        {props.label || 'Opa'}
        {props.ano}
    </Text>

ValidarProps.defaultProps = {
    label: 'Ano: '
}

ValidarProps.propTypes = {
    ano: propTypes.number.isRequired
}

export default ValidarProps