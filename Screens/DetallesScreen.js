import { View, Text, StyleSheet,FlatList,Image, ImageBackground} from 'react-native'
import React from 'react'

const CATEGORY_LIST=[
  {
    id:"1",
    categoria: "Camisetas",
    "Imagen": "https://bakanes.com/wp-content/uploads/2022/11/camiseta-banner.png",
   
  },
  {
    "id":"2",
    "categoria": "Gorras",
    "Imagen": "https://http2.mlstatic.com/D_NQ_NP_726915-MCO49544016076_042022-O.webp",
  },
  {
    "id":"3",
    "categoria": "Pantalones",
    "Imagen": "https://media.gq.com.mx/photos/638d82093a03d0df717fb903/4:3/w_1588,h_1191,c_limit/tipos-de-pantalones-para-verte-moderno-y-guapo-en-navidad-2022.jpg",
  },
  {
    "id":"4",
    "categoria": "Zapatos",
    "Imagen": "https://http2.mlstatic.com/D_NQ_NP_711318-MEC49357103954_032022-O.webp",
  },
  {
    "id":"5",
    "categoria": "Accesorios",
    "Imagen": "https://m.media-amazon.com/images/I/51lRHCUgClL._AC_UF894,1000_QL80_.jpg",
  },
  {
    "id":"6",
    "categoria": "Medias",
    "Imagen": "https://www.etafashion.com/medias/5000000955000-900x1200-0.jpg?context=bWFzdGVyfGltYWdlc3wxODEzNzF8aW1hZ2UvanBlZ3xhREZrTDJoaVppODBOREkzTXpNME1UYzFPVFV4T0M4MU1EQXdNREF3T1RVMU1EQXdMVGt3TUhneE1qQXdYekF1YW5CbnxhYzM1YmUzNTkxNTU4NjYyNjFhNGNkMjQyYzlhYTE0NTZiOGI5NmU0Mzg0NWQxZGJmYmUwZjQ1YmM5MDEyNTJh",
  }
]
export default function DetallesScreen({navigation}) {
  return (
    <FlatList 
    data={CATEGORY_LIST}
    renderItem={({item})=> (
      < ImageBackground style={styles.container}
      source={ {uri:"https://png.pngtree.com/thumb_back/fh260/background/20220916/pngtree-clouds-with-nice-natural-blue-sky-background-image_1463405.jpg"} }>
      <Text style={styles.txtC}>{item.categoria}</Text>

      <Image style={styles.imgg} source={{uri:item.Imagen}} />
      
      </ImageBackground>

    )}
  
    />
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#696c',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection:"row"

    },
    txtC:{
      color:"#000000",
      fontSize: 20,
      textAlign:"right"
    },
    imgg:{
      width:100,
      height:100
      
       }
  });
