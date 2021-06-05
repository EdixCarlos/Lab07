import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DATA = [
  {
    id: '1',
    title: 'Sol de Mayo',
    description: 'Muchos especialistas reconocen a este restaurante como la catedral de la comida peruana en Arequipa lleva más de cien años deleitando con su espléndida comida llena de tradición. Es un restaurante pionero en la cocina arequipeña. En su carta podemos hallar camarones, carnes, mariscos y comidas típicas de la región. ',
    picURL: 'https://www.aboutespanol.com/thmb/BSUIjJ9nj_sQwkrwVG3gRIwrf6c=/869x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/picanteria-Sol-de-mayo-56a2a5ee3df78cf772786596.jpg',
    coordenadas: {
      latitude: -16.3898477,
      longitude: -71.5444118
  }
  },
  {
    id: '2',
    title: 'La Nueva Palomino',
    description: 'Desde 1895 este lugar mantiene las recetas de generación en generación de las mujeres fundadoras del restaurante. Se puede encontrar variedad de comidas y platos típicos arequipeños. Es un lugar confortable, simpático para pasarlo en familia y escuchar música. Destaca la ocopa, soltero de queso acompañado de un mate de muña, chupe de camarones, chicharrón de cuy y su queso helado. ',
    picURL: 'https://www.aboutespanol.com/thmb/c-MakCMu-kQdMECP2x0tonEc6xU=/510x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/restaurante-la-nueva-palomino-56a2a50d5f9b58b7d0ccf5ce.jpg',
    coordenadas: {
      latitude: -16.3870698,
      longitude: -71.5417352}
  },
  {
    id: '3',
    title: 'El Montonero',
    description: 'Es un restaurante que tiene gran variedad de platillos exquisitos y típicos del lugar. Tiene cómodos ambientes y está al alcance de cualquier viajero. En el lugar se presenta danzas típicas de la región. Se ofrecen shows festivos de guitarra, zampoña y quena que interpretan música arequipeña y ofrecen tres tipos de buffets.',
    picURL: 'https://www.aboutespanol.com/thmb/OQNkzjd1XeaIDbUB7AAS2no6VEY=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/restauntantes-el-montonero-56a2a50b5f9b58b7d0ccf5c4.jpg',
    coordenadas: {
      latitude: -16.4075783,
      longitude: -71.5351114}
  },
  {
    id:'4',
    title:'El Ekeko',
    description:'Es un restaurante que tiene una gran variedad de platos a la parrilla se puede apreciar cortes de res, cerdo, cordero, alpaca y trucha. En la carta se encuentran diversas pastas, sándwiches, ensaladas, postres. La especialiadad del bar es el Pisco Sour y puede encontrar vinos nacionales e internacionales. ',
    picURL:'https://www.aboutespanol.com/thmb/RPH-DovjoIS54cdSQjdXCqoUEig=/327x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/restaurante-el-ekeko_arequipa-56a2a50c3df78cf772785bfd.jpg',
    coordenadas: {
      latitude: -16.3986569,
      longitude: -71.5374414}
  },
  {
    id:'5',
    title:'Los guisos arequipeños',
    description:'El lugar ofrece ricos platos típicos que han pasado de generación en generación en la familia fundadora del retaurante. Se distingue por sus sabrosos guisos y comida regional. La especialidad es rocoto relleno, cocktail de camarones, soltero de queso y queso helado. Atiende de L - D y feriados.',
    picURL:'https://www.aboutespanol.com/thmb/laVN5QaqnIhcHkuT1uA4uC3fets=/723x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/restaurante-arequipeno_los-guisos-arequipenos_Marcos-GP-56a2a50b3df78cf772785bf6.jpg',
    coordenadas: {
      latitude: -16.4171294,
      longitude: -71.5210506}
  },
  {
    id:'6',
    title:'Chi cha de Gastón Acurio',
    description:'Se sirve comida regional con un leve estilo casual con insumos nativos. La carta ofrece los productos arequipeños de la temporada. Se distingue por su gran originalidad y creatividad en su gastronomía y presenta sus platillos con gran detalle. La especialidad rocoto relleno, gran camaronada chicha, lomo saltado y su chicha. Se debe realizar reserva.',
    picURL:'https://www.aboutespanol.com/thmb/jAbHNUHVbbQX3AX5rr3tb8Hy-cI=/528x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/restaurante-arequipa_-chi-cha-56a2a50a5f9b58b7d0ccf5b9.jpg',
    coordenadas: {
      latitude: -16.3963594,
      longitude: -71.5385182}
  },

];

function Item({title,image}) {
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{uri: image}}/>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class OurFlatList extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View style={styles.container}>
        {}
        <ScrollView>
          {DATA.map(item => (
            <TouchableOpacity style={styles.item} onPress={()=> this.props.navigation.navigate('Details',{
              itemID: item.id,
              itemTitle: item.title,
              itemDesc: item.description,
              itemPic: item.picURL,
              itemLat: item.coordenadas.latitude,
              itemLng: item.coordenadas.longitude,
              })}>
              
              <Item title={item.title} image={item.picURL}/>
              
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );

  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 20,
    backgroundColor: '#212121'
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#0277bd',
    padding: 1,
    marginVertical: 5,
    marginHorizontal: 5
  },
  title: {
    fontSize: 25,
    textAlignVertical: "center",
    marginStart: 15,
    color: 'white'
  },
  image:{
    height: 80,
    width: 80,
    borderColor: '#212121',
    borderWidth: 5,
    padding: 15
  }
});
