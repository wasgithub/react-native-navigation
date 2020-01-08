import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'


class BarraNavegacao extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.barraTitulo}>
                <Text style={styles.titulo}>ATM Consultoria</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    barraTitulo: {
        backgroundColor: "#999",
        padding: 20,
    },
    titulo: {
        textAlign: "center",
        fontSize: 18,
        color: "#000",
    }
})

export default BarraNavegacao;
