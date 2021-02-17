import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.Quadrado}>

        </View>
    )
}

const styles = StyleSheet.create({
    Quadrado: {
        height: 20,
        width: 20,
        backgroundColor: '#000'
    }
})