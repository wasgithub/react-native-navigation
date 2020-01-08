import React, { Component } from 'react';
import { View, StatusBar, Image, StyleSheet, Button } from 'react-native'

import BarraNavegacao from '../barraNavegacao'

const IMAGENS = {
    logo: require("../../assets/imgs/logo.png"),
    menuCliente: require("../../assets/imgs/menu_cliente.png"),
    menuContato: require("../../assets/imgs/menu_contato.png"),
    menuEmpresa: require("../../assets/imgs/menu_empresa.png"),
    menuServico: require("../../assets/imgs/menu_servico.png"),
}

class CenaPrincipal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const {navigate} = this.props.navigation;

        return(
        <View>
            <StatusBar backgroundColor="#999"/>
            <BarraNavegacao />
            <View style={styles.container}>
                <View style={styles.opcoes}>
                    <Image style={styles.opcao} source={IMAGENS.logo} />
                    <Image style={styles.opcao} source={IMAGENS.menuCliente} />
                    <Image style={styles.opcao} source={IMAGENS.menuContato} />
                    <Image style={styles.opcao} source={IMAGENS.menuEmpresa} />
                    <Image style={styles.opcao} source={IMAGENS.menuServico} />
                <Button
                    title="Go to Jane's profile"
                    onPress={() => navigate('Profile', {name: 'Jane'})}
                 />                
                </View>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 30
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    opcoes: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    opcao: {
        margin: 10
    }
})

export default CenaPrincipal;