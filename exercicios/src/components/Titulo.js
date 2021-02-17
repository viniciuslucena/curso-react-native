import React from 'react'
import { View, Text } from 'react-native'

import Estilo from './estilo'

export default props => (
        <>
            <Text style={Estilo.textoGrande}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </>
)