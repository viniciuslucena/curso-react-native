import React from 'react'
import { View, StyleSheet } from 'react-native'

// import ContadorV2 from './components/Contador/ContadorV2'
// import Pai from './components/indireta/Pai'
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import Primeiro from './components/Primeiro'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Diferenciar from './components/Diferenciar'
// import ListaProdutos from './components/lista/ListaProdutos'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import FlexboxV1 from './components/layout/FlexboxV1'
import Mega from './components/mega/Mega'

export default () => (
    <View style={style.App}>
        <Mega qtdeNumeros={7} />
        {/* 
        <FlexboxV1 />
        <DigiteSeuNome />
        <ListProdutos />
        <Diferenciar />
        <ContadorV2 />
        <Pai />
        <Contador />
        <Botao />
        <Titulo principal='Cadastro Produto' secundario='Tela de Cadastro do Produto'/>
        <Aleatorio max={10} min={1}/>
        <MinMax maior={95} menor={50}/>
        <MinMax maior={10} menor={1}/>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        padding: 20,
    }
})
