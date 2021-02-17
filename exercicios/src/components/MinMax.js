import React from 'react'
import { Text } from 'react-native'

import Estilo from './estilo'

export default (props) => {
    return(
        <Text style={ Estilo.textoGrande }>
            O valor { props.maior } é maior que o valor { props.menor }!
        </Text>
    )
}