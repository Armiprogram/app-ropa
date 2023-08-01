import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DetallesScreen from "../Screens/DetallesScreen";
import CarritoScreen from "../Screens/CarritoScreen";
import PerfilScreen from "../Screens/PerfilScreen";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
import HomeScreen from "../Screens/HomeScreen";
function MyTabs(){
    return(
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={HomeScreen}
                 
                options={{ 
                    tabBarLabel:"Inicio",
                    tabBarIcon:()=>(
<FontAwesome name="home" size={24} color="black" />
                    ),
                    headerTitle:"Inicio"
                }} 
                />

                <Tab.Screen
                 name="Categorias" 
                 component={DetallesScreen}
                 options={{ 
                    tabBarIcon:()=>(
<MaterialIcons name="category" size={24} color="black" />
                    ),
                    headerTitle:"Categorias"
                }} 
                
                />
                    <Tab.Screen
                 name="Cesta" 
                 component={CarritoScreen}
                 options={{ 
                    tabBarIcon:()=>(
<MaterialIcons name="shopping-cart" size={24} color="black" />
                    ),
                    headerTitle:"Carrito de compra"
                }} 
                
                />
                        <Tab.Screen
                 name="Mi Cuenta" 
                 component={PerfilScreen}
                 options={{ 
                    tabBarIcon:()=>(
<MaterialIcons name="person" size={24} color="black" />
                    ),
                    headerTitle:"Perfil"
                }} 
                
                />
                
            </Tab.Navigator>
            
    )
}
export default function BottomNavigation(){
 return(
    <NavigationContainer>
        <MyTabs/>
    </NavigationContainer>
 )
}