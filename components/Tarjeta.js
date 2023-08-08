import { View, Text,TouchableOpacity, Modal,Button,StyleSheet,Image} from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta(prop) {
    const [modalVisible, setmodalVisible] = useState(false)
   console.log(prop)
  return (
    <View>
        <TouchableOpacity onPress={()=> setmodalVisible(!modalVisible)}
        >
      <Button
      title='Ver informacion'
      onPress={()=>setmodalVisible(!modalVisible)}
      />    
  
    
      </TouchableOpacity>
      <Modal visible={modalVisible}>
      <View style={styles.modal}>
      <Text style={styles.txtA}>{prop.datos.informacion} </Text>
      <Image 
      source={require("../assets/Imagen/istockphoto-1414602596-2048x2048.jpg")}
      styles={styles.imgg}
      />
      <Text style={styles.txtA }>{prop.datos.descripcion} </Text>
      <Button
      title='Cancelar'
      onPress={()=>setmodalVisible(false)}
      />
</View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#fff",
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    modal:{
  backgroundColor:"red",
  flex:1,
  alignItems:"center",
 justifyContent:"center",
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
  fontSize:30,
  color:"white",

    },
    txtT:{
      fontSize:20
        },
        imgg:{
          width:200,
          height:90,
          
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
               input:{
                borderWidth:1,
                width:"80%",
                marginBottom:30,
                height:30,
                borderRadius:30,
                paddingHorizontal:30
               }
   });