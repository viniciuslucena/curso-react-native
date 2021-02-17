import React from 'react'
import { Platform, Text } from 'react-native'
import Estilo from './estilo'

export default _ => {
    if (Platform.OS === 'android') {
        return <Text style={Estilo.textoGrande}>Android</Text>
    } else if (Platform.OS === 'ios') {
        return <Text style={Estilo.textoGrande}>iOS</Text>
    } else {
        return <Text style={Estilo.textoGrande}>Eita!!</Text>
    }
}