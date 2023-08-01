import { View, Text, StyleSheet,Image, ImageBackground} from 'react-native'
import React from 'react'

export default function PerfilScreen({navigation}) {
  return (
    <ImageBackground 
    source={{uri:"https://img.freepik.com/fotos-premium/fondo-blanco-blanco-textura-pared-cemento-grunge-bandera-fondo-diseno-interior_7190-155.jpg?w=2000"}}>
     < View style={styles.container}>
      <Image style={styles.imgg} 
       source={{uri:"https://static.vecteezy.com/system/resources/previews/007/037/420/non_2x/avatar-man-face-silhouette-user-sign-person-profile-picture-male-icon-in-circle-round-black-color-illustration-image-solid-outline-style-vector.jpg"}}></Image>
      <Text>Decifra el código secreto </Text> 
      </View>
      <View style={styles.container2}>
      <Text>         </Text> 
      </View>
      <View style={styles.container}>
      <Text>       </Text> 
     <Image style={styles.imgA} 
     source={{uri:"https://cdn-icons-png.flaticon.com/512/1077/1077035.png"}}></Image> 
      <Text>       </Text> 
     <Image style={styles.imgA} 
     source={{uri:"https://cdn-icons-png.flaticon.com/512/94/94948.png"}}></Image> 
      <Text>       </Text> 
     <Image style={styles.imgA} 
     source={{uri:"https://w7.pngwing.com/pngs/765/153/png-transparent-computer-icons-history-t-q-systems-inc-iconfinder-black-history-icon-miscellaneous-text-trademark.png"}}></Image> 
      <Text>       </Text> 
     <Image style={styles.imgA} 
     source={{uri:"https://w7.pngwing.com/pngs/804/290/png-transparent-coupon-discounts-and-allowances-computer-icons-voucher-service-voucher-miscellaneous-text-service.png"}}></Image> 
      <Text>       </Text> 
     </View>
    
     <View style={styles.container2}>
     <Text> </Text> 
      </View>
      <View style={styles.container}>
     <Text>     Deseos</Text> 
     <Text>     Siguiendo</Text> 
     <Text>     Historial</Text> 
     <Text>     Cupones</Text> 
      </View>
      <View style={styles.container2}>
     <Text> </Text> 
      </View>
      <View style={styles.container2}>
     <Text> </Text> 
      </View>
      <View style={styles.container}>
     <Text>Pedidos                             ver todo--</Text> 
     </View>
     <View style={styles.container2}>
     <Text> </Text> 
      </View>
      <View style={styles.container2}>
     <Text> </Text> 
      </View>
      <View style={styles.container}>
      <Text>       </Text> 
     <Image style={styles.imgA} 
     source={{uri:"https://cdn-icons-png.flaticon.com/512/2780/2780279.png"}}></Image> 
      <Text>       </Text> 
     <Image style={styles.imgA} 
     source={{uri:"https://cdn-icons-png.flaticon.com/512/1701/1701869.png"}}></Image> 
      <Text>       </Text> 
     <Image style={styles.imgA} 
     source={{uri:"https://thumbs.dreamstime.com/b/icono-pendiente-en-la-l%C3%ADnea-estilo-para-cualquier-proyecto-uso-de-los-proyectos-presentaci%C3%B3n-app-m%C3%B3vil-web-201383376.jpg"}}></Image> 
      <Text>       </Text> 
     <Image style={styles.imgA} 
     source={{uri:"https://w7.pngwing.com/pngs/83/806/png-transparent-pending-revise-time-unfinish-wait-essential-web-5-icon-thumbnail.png"}}></Image> 
      <Text>       </Text> 
     </View>
    
     <View style={styles.container2}>
     <Text> </Text> 
      </View>
      <View style={styles.container}>
     <Text>Pendientes de pago</Text> 
     <Text>Pendientes de envio</Text> 
     <Text>Enviado</Text> 
     <Text>Pendientes de valoracion</Text> 
      </View>
      <View style={styles.container2}>
     <Text> </Text> 
      </View>
      <View style={styles.container}>
     <Text> Disputa abierta </Text> 
     </View>

    
     <ImageBackground style={styles.imgB} 
     source={{uri:"https://assets.hotsale.com.mx/accounts/2/events/2/editions/10/blogArticles/358/media/2e8b6d3f-0f10-42c7-8a38-b0af7e3e3ec2.png"}}> <Text style={styles.txtA}>Super ofertas</Text></ImageBackground> 
   
 
    </ImageBackground>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

  flexDirection:"row"

  },
  container2: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

  flexDirection:"column"

  },
  btn1:{
   backgroundColor:"#ffffffff",
   shadowColorColor:"#000000",
   marginBottom:1,
   elevation: 20,
   height:60
   
  },
  txtA:{
fontSize:15,
alignItems: 'flex-end',
justifyContent: 'flex-end',
textAlign:"center"
  },
  txtT:{
    fontSize:20
      },
      imgg:{
        width:50,
        height:50,
        alignSelf:'flex-start'
         },
         imgA:{
          width:50,
          height:50,
          flexDirection:"column"
           },
           imgB:{
            width:300,
            height:150,
            flexDirection:"column"
             },
 });