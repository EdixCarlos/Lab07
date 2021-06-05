import MapView, {PROVIDER_GOOGLE, Marker, Callout, MarkerAnimated} from 'react-native-maps';
import {StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';

export default class Maps extends React.Component {

    constructor(props) {
        super(props);
        
        
    }

    render() {
        return (
            
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: this.props.lat,    
                        longitude: this.props.lng,  
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}>

                    <Marker
                    
                       coordinate={{
                        latitude: this.props.lat,
                        longitude: this.props.lng,
                    }}>
                        <Image source={require('../img/tenedor.png')} style={{height: 35, width:35 }} />
                        <Callout>
                                <View
                                    style={{
                                        backgroundColor: '#FFFFFF',
                                        borderRadius: 5,
                                    }}>
                                    <Text>
                                        {this.props.title}
                                    </Text>
                                </View>
                        </Callout>

                    </Marker>
                    
                    
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({ 
    map:{
        ...StyleSheet.absoluteFillObject
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    item: {
      flexDirection:'row',
      backgroundColor: '#454588',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16
    },
    listImage:{
      width: 96,
      height: 96
    },
    listText: {
      fontSize: 30
    },
    text: {
      alignItems: 'center',
      padding: 10,
    },
  
    button: {
      top: 10,
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
  });
