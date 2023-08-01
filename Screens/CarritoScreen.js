import { View, Text,StyleSheet,SectionList, Image, ImageBackground,FlatList,Button,Alert} from 'react-native'
import React from 'react'
import carritoJSON from './2-carrito.json'
export default function CarritoScreen(navigation) {
function mensaje (hola){
  Alert.alert("Mensaje",hola)
  console.log(hola)
}
const datos= carritoJSON
const secciones=[
    {title:"Tu carrito", data: datos.productos }
]
const precios=[
    {title:"Tus precios", data: datos.precios }
]
  return (
    <ImageBackground style={styles.container}
    source={ {uri:"https://png.pngtree.com/thumb_back/fh260/background/20220916/pngtree-clouds-with-nice-natural-blue-sky-background-image_1463405.jpg"} }
    >
<SectionList
sections={secciones}
renderItem={({item})=>(
    < View>
    <Text>{item.nombre} </Text>
    <Text>{item.descripcion} </Text>
    <Text>{item.color} </Text>
    <Text>{item.talla} </Text>
    <Text>{item.cantidad} </Text>
    <Text>{item.precio} </Text>
    <Image style={styles.imgg} source={{uri:item.imagen}} />
    </View>
) }
/>
<SectionList
sections={precios}
renderItem={({item})=>(
    < View style={styles.container2}> 
    <Text>{item.nombreS} </Text>
   <Text>{item.descuento} </Text>
   <Text>{item.envio} </Text>
   <Text>{item.subtotal} </Text>
   <Text>{item.total} </Text>
  
    </View>

    
) }
/>
<View>
<Button
      title='Confirmar'
      onPress={()=> mensaje("Excellente recibiras tu factura en breve")}
      />
      <Button
      title='Cancelar'
      onPress={()=> mensaje("Compra cancelada")}
      />
</View>


    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      
       },
       container2:{
      
       padding: 0,
       alignSelf:'baseline',
       alignItems: 'center',
       justifyContent: 'center',
  fontSize:25
       }
  });