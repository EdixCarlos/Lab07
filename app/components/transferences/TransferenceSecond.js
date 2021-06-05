var moment = require('moment');
moment.locale('es');

import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-paper';

export default class TransferenceSecond extends Component {
  constructor(props) {
    super(props);
    this.state = {
      importe: 0,
    };
  }


  Detalle = () => {

    const {cuentaOrig} = this.props.route.params;
    const {cuentaDest} = this.props.route.params;
    const {impo} = this.props.route.params;
    const {ref} = this.props.route.params;
    const {fec} = this.props.route.params;
    const {notificar} = this.props.route.params;
    //const {notificar} = route.params;
   
  
    return (
      <View style={style.contenedor}>

          
          <Text style={style.titulo}>Hora:</Text>
          <TextInput style={style.valor} editable={false}>{impo}</TextInput>
          <Text style={style.titulo}>Numero de personas:</Text>
          <TextInput style={style.valor} editable={false}>{ref}</TextInput>
          <Text style={style.titulo}>Fecha:</Text>
          <TextInput style={style.valor} editable={false}>{fec}</TextInput>
         

          <Button style={style.boton} title="Aceptar" onPress={() => this.props.navigation.navigate('Third')}/>

      </View>
    );
  }


   /*
  CREAR AQUI FUNCIONES PARA NAVEGAR 'VOLVER' y 'CONFIRMAR'
  */


  render() {
    return (
        <this.Detalle/>
    );
  }
}

/*
  CREAR SUS ESTILOS
  */
 const style = StyleSheet.create({ 
  contenedor:{
    padding:8,
    flex:1,
    flexDirection:'column',
    backgroundColor: '#e1e1e1',
    justifyContent: 'flex-start'
  },
  titulo: {
    color: 'black',
    fontSize: 24,
    marginBottom: 5
  },
  valor: {
    fontSize: 14,
  },
  boton: {
    marginTop: 20
  }
});
