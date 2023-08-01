import { View, Text, Button,StyleSheet } from 'react-native'
import React from 'react'

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:40}}>WelcomeScreen</Text>
      <Button
      title='Ir al home'
      onPress={()=> navigation.navigate("Home")}
      />
    </View>
  )
}
const styles=StyleSheet.create({
container:{
    backgroundColor:"#fdfd86",
    justifyContent:"center",
    alignItems:"center",
    flex:1,
}
})