import React from 'react'
import { FlatList, Text } from 'react-native'
import Estilo from './estilo'
import produtos from './produtos'

export default p => {

    const produtoRender = ({ item: p }) => {
        return <Text>{p.id} {p.nome} - R$ {p.preco}</Text>
    }

    return (
        <>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            />
        </>
    )
}