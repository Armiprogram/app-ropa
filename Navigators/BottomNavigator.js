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
            <Tab.Navigator initialRouteName="Mi cuenta">
              
                        <Tab.Screen
                 name="Mi Cuenta" 
                 component={PerfilScreen}
                 options={{ 
                    tabBarIcon:()=>(
<MaterialIcons name="person" size={24} color="black" />
                    ),
                    headerTitle:"Información"
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