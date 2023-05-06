import {
  Profile,
  Favourites,
  Dashboard,
  Cart,
  Order,
  EditProfile,
  AddAddress,
  Address
  
} from "../screens/MainScreens";
import { ContextProvider } from "../contexts/SetupContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export const ProfileScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen name="EditProfile" component={EditProfile}></Stack.Screen>
      <Stack.Screen name="Address" component={AddAddress}></Stack.Screen>
      <Stack.Screen name="AddAddress" component={Address}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default function MainScreen(): any {
  return (
    <ContextProvider>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarHideOnKeyboard: true,
          }}
        >
          <BottomTab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <FontAwesome5 name="user-alt" size={24} color="black" />
                ) : (
                  <Feather name="user" size={24} color="black" />
                ),
            }}
          />

          <BottomTab.Screen
            name="Home"
            component={Dashboard}
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Foundation name="home" size={24} color="black" />
                ) : (
                  <Octicons name="home" size={24} color="black" />
                ),
            }}
          />

          <BottomTab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <MaterialCommunityIcons
                    name="shopping"
                    size={24}
                    color="black"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="shopping-outline"
                    size={24}
                    color="black"
                  />
                ),
            }}
          />

          <BottomTab.Screen
            name="Order"
            component={Order}
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <MaterialCommunityIcons name="cart" size={24} color="black" />
                ) : (
                  <MaterialCommunityIcons
                    name="cart-outline"
                    size={24}
                    color="black"
                  />
                ),
            }}
          />

          <BottomTab.Screen
            name="Favourites"
            component={Favourites}
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <MaterialIcons name="favorite" size={24} color="black" />
                ) : (
                  <MaterialIcons
                    name="favorite-outline"
                    size={24}
                    color="black"
                  />
                ),
            }}
          />

          <BottomTab.Screen
            name="ProfileScreen"
            component={ProfileScreens}
            options={{ tabBarButton: () => null }}
          ></BottomTab.Screen>
          
        </BottomTab.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}
