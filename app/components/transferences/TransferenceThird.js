var moment = require('moment');
moment.locale('es');

import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';

export default class TransferenceThird extends Component {
  constructor(props) {
    super(props);
    this.state = {
      importe: 0,
    };
  }

   /*
  CREAR AQUI FUNCIONES PARA NAVEGAR 'ACEPTAR'
  */


  render() {
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
         <Image style={{height: 200, width:200, alignSelf: 'center'}} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1200px-Yes_Check_Circle.svg.png'}} />

        <Button
          title="Aceptar"
          onPress={() => this.props.navigation.navigate('First')}
        />
      </View>
    );
  }
}

/*
  CREAR SUS ESTILOS
  */
