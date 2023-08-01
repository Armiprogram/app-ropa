import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();
import HomeScreen from '../Screens/HomeScreen';
import DetallesScreen from '../Screens/DetallesScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import PerfilScreen from '../Screens/PerfilScreen';
function MyStack() {
  return (
    <Stack.Navigator initialRouteName='HomeStack'
   //elimina todo el screenoption aplica a todos y el options a cada screen por screen debe estar dentro // screenOptions={{headerShown:false }}
    >
      <Stack.Screen name="HomeStack" component={HomeScreen} />
      <Stack.Screen name="DetallesStack" component={DetallesScreen} />
      <Stack.Screen 
      name="WelcomeStack" 
      component={WelcomeScreen}
      options={{heraderShown:false} }
      />

      <Stack.Screen name="PerfilStack" 
      component={PerfilScreen} 
      options={{
        headerTintColor:"red",
        headerStyle:{backgroundColor:"blue"}
      }}
      />
    </Stack.Navigator>
  )
}
export default function StackNavigation(){
    return(
<NavigationContainer>
        <MyStack/>
    </NavigationContainer>
    )
}