var moment = require('moment');
moment.locale('es');

import React, {Component} from 'react';
import {Text, View, Button,  StyleSheet, Alert} from 'react-native';
import { TextInput, Switch } from 'react-native-paper';

import ModalSelector from 'react-native-modal-selector';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from 'react-native-modal-datetime-picker';

// DECLARAR LAS LIBRERIAS DE LOS COMPONENTES INSTALADOS

export default class TransferenceFirst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [
      {key: 1, label: "10101010"},
      {key: 2, label: "20202020"},
      {key: 3, label: "30303030"},
      {key: 4, label: "40404040"},
      {key: 5, label: "50505050"},
    ],
      importe: '',
      cuentaOrigen:'',
      cuentaDestino:'',
      referencia:'',
      isDateTimePickerVisible:false,
      fecha:'Selecciona Fecha',
      fechaFormat:'',
      email:'',
    };
    
  }

  showAlert = () => {
    Alert.alert(
      'Faltan datos o datos incorectos',
      'Revise los campos',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  showAlert2 = () => {
    Alert.alert(
      'Solo dato numerico',
      'Revise el campo',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  /*
  CREAR AQUI FUNCIONES DE LOS COMPONENTES
  */
 
  changeImporte = importe => {
    this.setState({importe});
  };

  changeReferencia = referencia => {
    this.setState({referencia});
  };

  changesEmail = email => {
    this.setState({email});
  };

  showDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: true});
  };

  hideDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: false});
  };

  handleDatePicker = date => {
    console.log('A date has been picked: ', date);

    this.setState({
      fecha: moment(date).format('DD/MM/YYYY'),
      fechaFormat: moment(date).format('YY/MM/DD'),
    });

    this.hideDateTimePicker();
  };

  

  render() {
    return (
      <View style={{flex:1, alignItems: 'center', }}>
        <KeyboardAwareScrollView>
          <View>
        

        

        <View
          style={{
            justifyContent: 'center',
            marginBottom: 5,
          }}>
          <View style={{flexDirection: 'column', alignSelf: 'stretch'}}>
            <Text style={styles.titleInput}>Hora de reserva</Text>
            <View style={[styles.viewInput, {height: 35}]}>
              <TextInput
              underlineColorAndroid={'transparent'}
              style={[styles.picker, {height:40, borderRadius: 6}]}
              keyboardType='numeric'
              onChangeText={importe => {
                const re = /^[0-9\b]+$/;
                // if value is not blank, then test the regex

                if (importe === '' || re.test(importe)) {
                  this.changeImporte(importe);
                }else{
                  this.showAlert2()
                  
                }
                
              }}
              ></TextInput>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            marginBottom: 5,
          }}>
          <View style={{flexDirection: 'column', alignSelf: 'stretch'}}>
            <Text style={styles.titleInput}>Numero de personas</Text>
            <View style={[styles.viewInput, {height: 35}]}>
              <TextInput
              underlineColorAndroid={'transparent'}
              style={[styles.picker, {height:40, borderRadius: 6}]}
              onChangeText={referencia => this.changeReferencia(referencia)}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            marginBottom: 5,
            top: 5,
          }}>
          <TouchableWithoutFeedback onPress={this.showDateTimePicker}>
            <View style = {styles.viewCalendar}>
              <Text Text style={styles.title}>
                {this.state.fecha}
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicker}
            onCancel={this.hideDateTimePicker}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 5,
          }}>
          <Text
          style={[
            styles.titleInput,
            {marginBottom: 0, marginTop: 4, marginRight: 5},
          ]}>
            Notificarme al e-mail
          </Text>
          <Switch
            onValueChange={email => this.setState({sendMail: email})}
            trackColor={'#063984'}
            thumbColor={'#e2e2e2'}
            trackColor="#cdcdcd"
            value={this.state.sendMail}
          />
        </View>

        

        <Button
          title="Siguiente"
          onPress={() => {

            if (this.state.referencia != ""
                && this.state.importe != ""
                && this.state.fecha != "Selecciona Fecha"){
              this.props.navigation.navigate('Second',{
                cuentaOrig: this.state.cuentaOrigen,
                cuentaDest: this.state.cuentaDestino,
                impo: this.state.importe,
                ref: this.state.referencia,
                fec: this.state.fecha,
                notificar: this.state.email});
            }else{
              this.showAlert()
            }
          }}
        />
      </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  titleInput: {

  },
  viewInput: {

  },
  picker: {

  },
  viewCalendar: {
    backgroundColor: "#e1e1e1",
    margin: 10,
    padding:5,
    width: 150,
    height: 30
  },
  pickerModel: {
    flex:1,
  },
});