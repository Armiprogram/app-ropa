import { View, Text, StyleSheet, Button, Image,ImageBackground} from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  
  return (
    <ImageBackground style={styles.container} 
    source={ {uri:"https://png.pngtree.com/thumb_back/fh260/background/20220817/pngtree-clouds-with-nice-natural-blue-sky-background-image_1441754.jpg"} }
    >
      <Image style={styles.imgg} source={ {uri:"https://wellman.com.ec/wp-content/uploads/2020/11/camiseta-negra.jpg"} }/>
      <Text style={styles.txtC}>Camiseta negra 7$</Text>
      <Image style={styles.imgg} source={ {uri:"https://m.media-amazon.com/images/I/41Qy9LpiUqL._SL500_.jpg"} }/>
      <Text style={styles.txtC}>Camiseta Yankee 15$</Text>
      <Image style={styles.imgg} source={ {uri:"https://soviet.cl/263875-large_default/jeans-slim-cropped-hombre-soviet.jpg"} }/>
      <Text style={styles.txtC}>Jeans Slim 23$</Text>
      <Image style={styles.imgg} source={ {uri:"https://www.venus.com.ec/pub/media/catalog/product/cache/f246a469ca072380ed3af8f211e66c99/a/n/antonello_cordon_zapatos_formales_de_hombre_color_cafe_grupal.jpg"} }/>
      <Text style={styles.txtC}>Zapatos negros 48$</Text>
     
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#696cfc',
      alignItems: 'center',
      justifyContent: 'center',

    },
    txtC:{
      color:"#400080",
      fontSize: 20,
      textAlign:"right"
    },
    imgg:{
      width:100,
      height:100
      
       }
  });