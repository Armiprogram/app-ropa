import { View, Text, StyleSheet, Button, Image,ImageBackground} from 'react-native'
import React, { useState } from 'react'

export default function HomeScreen({navigation}) {
  const [numero1, setNumero1] = useState(0)
const [numero2, setNumero2] = useState(0)
const [respuesta, setRespuesta] = useState(0)
function aumentar(){
if(numero1<10){
  setNumero1(numero1+1)
}else{
  console.log("Maximo número alcanzado")
}
}
function disminuir(){
if( numero1 > 0){
  setNumero1(numero1-1)
}
}
function suma(){
  setRespuesta(numero1+numero2)
}
function reiniciar(){
  setNumero1(0);
  setNumero2(0);
  setRespuesta(0)
}
function calcular(operacion){
switch (operacion){
  case "+":
    setRespuesta(numero1+numero2)
    break;
    case "-":
      setRespuesta(numero1-numero2)
      break;
      case "*":
        setRespuesta(numero1*numero2)
        break;
        case "/":
          if(numero2!==0){
          setRespuesta(numero1/numero2)
        }else{
          console.log("No hay diferencia de cero")
        }
          break;
}
}
  return (
    <View style={styles.container}>
<Text>Ejercicio1</Text> 
<Text>{numero1} </Text> 
<View style={styles.fila}>
<Button title='Disminuir'
onPress={()=> disminuir()}
/>
<Button title='Aumentar'
onPress={()=> aumentar()}
/>
</View>
<View style={styles.fila}>
<Button title='Disminuir'
onPress={()=> setNumero2(numero2-1)}
/>
<Text>        {numero2} </Text> 
<Button title='Aumentar'
onPress={()=> setNumero2(numero2+1)}
/>
</View>
<View
style={{borderWidth:1,width:"90%", marginTop:10,marginBottom:10}}
/>
<Text>        {respuesta} </Text> 
<Button title='Suma'color={"green"}
onPress={()=> calcular("+")}
/>
<Button title='Resta'color={"green"}
onPress={()=> calcular("-")}
/>
<Button title='Multiplicacion'color={"green"}
onPress={()=> calcular("*")}
/>
<Button title='Divicion'color={"green"}
onPress={()=> calcular("/")}
/>
<Button title='Reiniciar'color={"red"}
onPress={()=> reiniciar()}
/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
       fila:{
      flexDirection:"row",
      marginBottom:10
         }
  });