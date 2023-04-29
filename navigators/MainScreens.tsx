import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile, Favourites, Dashboard, Cart } from "../screens/MainScreens";
import { ContextProvider } from "../contexts/SetupContext";
import { NavigationContainer } from "@react-navigation/native";
import { DobScreen } from "../screens/accountSetup";

const Stack = createNativeStackNavigator();

export default function MainScreenNavs(): any {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false, animation: "slide_from_right" }}
        >
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Favourites" component={Favourites} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Dob" component={DobScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}
