import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
  _ScrollView,
  Alert,
} from 'react-native';


import OurFlatList from './app/components/ourFlatList/OurFlatList';
import MapsScreen from './app/components/maps/Maps';

import TransferenceFirst from './app/components/transferences/TransferenceFirst';
import TransferenceSecond from './app/components/transferences/TransferenceSecond';
import TransferenceThird from './app/components/transferences/TransferenceThird';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

const TransferenceStack = createStackNavigator();

function TransferenceStackScreen() {
  return(
    <TransferenceStack.Navigator>
      <TransferenceStack.Screen name="First" component={TransferenceFirst} options={{
          title: 'Defina los datos de la reserva', headerStyle: {  backgroundColor: '#98FB98',}, headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold',}, }}/>
      <TransferenceStack.Screen name="Second" component={TransferenceSecond} options={{
          title: 'Confirme datos de la reserva', headerStyle: {  backgroundColor: '#98FB98',}, headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold',}, }}/>
      <TransferenceStack.Screen name="Third" component={TransferenceThird} options={{
          title: 'Reserva Finalizada', headerStyle: {  backgroundColor: '#98FB98',}, headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold',}, }}/>
    </TransferenceStack.Navigator>
  )
}

function Lista({navigation}) {
  return (
    <OurFlatList navigation={navigation}/>
  );
}

function Login ({navigation})  {
  return (
    <View style={{flex: 1, backgroundColor: '#212121', alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30,color: 'white'}}>Iniciar Sesion</Text>
      <Image style={{height: 150, width:150, alignSelf: 'center'}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVXn0HEgD2bRe8nMGN8owyVCyt_XVN_jogEHYLNG5-R-0_zyvp&usqp=CAU'}} />

      <View >
          <Text style={{fontSize: 25, color: 'white'}}> Usuario </Text>
        </View>

      <TextInput
          style={{color:'white', height: 40, width: 150, borderColor: 'gray', borderWidth: 1}}
          onChangeText={ (text) => this.setState({username:text})}
          
          placeholder="Usuario"
          placeholderTextColor="gray" 
          />

      <View >
          <Text style={{fontSize: 25, color: 'white'}}> Contraseña </Text>
        </View>  

      <TextInput
          style={{color:'white', height: 40, width: 150, borderColor: 'gray', borderWidth: 1}}
          secureTextEntry={true}
          onChangeText={ (text) => this.setState({password:text})}
          
          placeholder="Contraseña"
          placeholderTextColor="gray" 
          />

      <Button
        title="Ingresar"
        onPress={() => {
          if ( 
            true
            
            ){
            navigation.navigate('List')
          }else{
            Alert.alert(
              'Datos incorrectos',
              'Verifique los datos ingresados, username:' + this.state.username,
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
          }
          
        }}
      />
    </View>
  );
}



function DetailsScreen({route, navigation}) {

  const {itemTitle} = route.params;
  const {itemID} = route.params;
  const {itemDesc} = route.params;
  const {itemPic} = route.params;
  const {itemLat} = route.params;
  const {itemLng} = route.params;

  return (
    <ScrollView>
      <View style={{backgroundColor: '#212121', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      
        <Text style={{color: 'white' , fontSize: 30, marginBottom: 20}}>{itemTitle}</Text>
        <Image style={{aspectRatio: 2/3 , width:250 , marginBottom: 20} } source={{uri: itemPic}} />
        <Text style={{color: 'white' , fontSize: 20, marginBottom: 20}}>Descripcion: {itemDesc}</Text>

        <TouchableOpacity onPress = {() => navigation.navigate('List0')}>
          <View style = {{padding:10, backgroundColor: '#2196f3', alignItems: 'center', justifyContent: 'center', borderRadius: 4}}>
            <Text style = {{fontSize: 20, color: 'white'}}>VOLVER</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => navigation.navigate('Mapa', {title: itemTitle, lat: itemLat, lng: itemLng})}>
          <View style = {{marginTop:15, padding:10, backgroundColor: '#2196f3', alignItems: 'center', justifyContent: 'center', borderRadius: 4}}>
            <Text style = {{fontSize: 20, color: 'white'}}>UBICACION</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => navigation.navigate('Reservar', {title: itemTitle, lat: itemLat, lng: itemLng})}>
          <View style = {{marginTop:15, padding:10, backgroundColor: '#2196f3', alignItems: 'center', justifyContent: 'center', borderRadius: 4}}>
            <Text style = {{fontSize: 20, color: 'white'}}>RESERVAR</Text>
          </View>
        </TouchableOpacity>

      </View>
    </ScrollView>
    
  );
}

function vistaMapas({route, navigation}) {
  const {lat} = route.params;
  const {lng} = route.params;
  const {title} = route.params;

  return (
    <MapsScreen title={title} lat={lat} lng={lng}/>
  );
}

const Stack = createStackNavigator();


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      textValue: 0,
      count: 0,
      items: [],
      error: null,
    };
  }


  changeTextInput = text => {
    this.setState({textValue: text});
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  showAlert = () => {
    Alert.alert(
      'Titulo',
      'Mensaje',
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

 

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="List" component={Lista}/>
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Mapa" component={vistaMapas} />
          <Stack.Screen name="Reservar" component={TransferenceStackScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    padding: 10,
  },

  button: {
    top: 10,
    fontSize: 50,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },

  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: 'orange',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
  },
});
