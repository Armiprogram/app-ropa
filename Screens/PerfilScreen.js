import { View, Text, StyleSheet,Image, ImageBackground, TextInput, Button,FlatList} from 'react-native'
import React, {useState} from 'react'
import Tarjeta from '../components/Tarjeta';
export default function PerfilScreen({navigation}) {
const [informacion, setinformacion] = useState("");
const [descripcion, setdescripcion] = useState("");
const [url,seturl]= useState("")
const [listaImagenes, setlistaImagenes] = useState([])
const agregarElementos=(informacion )=>{
   
if(informacion.trim() !==""){
  console.log(informacion)
  let bandera=false;
  for(let item of listaImagenes){

    if(item==item.informacion){
      bandera=true;
      break;
     }
    }


if (bandera==true){
  console.log("No elementos repetidos")
}else{
  let temp = [{informacion} ];
  setlistaImagenes(temp)
}
  setinformacion("");
  setdescripcion("");
  seturl("");
}else{}
console.log("Advertencia llene todos los campos")
    }

  return (
    <View style={styles.container}>
      <Text>Ventana de ingreso de información</Text>
      <TextInput
       placeholder="Ingrese Información"
       style={styles.input}
       onChangeText={(texto)=> setinformacion(texto)}
       value={informacion}
       />
        <Button title="agregar" onPress={()=> agregarElementos(informacion)}
        />
        <View 
        style={{borderWidth:1,width:"90%",marginBottom:10,marginTop:10}}
        />
           
             <FlatList
             data={listaImagenes}
             renderItem={({item}) =>(
              <Tarjeta
              
              datos={item}
              /> 
  )}
             />
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
             input:{
              borderWidth:1,
              width:"80%",
              marginBottom:30,
              height:30,
              borderRadius:30,
              paddingHorizontal:30
             }
 });