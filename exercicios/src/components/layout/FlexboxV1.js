import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={styles.FlexV1}>
            <Quadrado />
            <Quadrado cor='#F00' />
            <Quadrado cor='#0F0' />
            <Quadrado cor='#00F' />
            <Quadrado cor='#FF0' />
        </View>
    )
}

const styles = StyleSheet.create({
    FlexV1: {
        flex: 1
    }
})