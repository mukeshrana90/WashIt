import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { useFonts } from "expo-font";

import {
  Onboarding,
  Registration,
  Login,
  ForgotPassword,
  ChangePassword,
  ResetPassword,
  NearByShops,
  ShopDetails,
  SelectServices,
  SelectQuantities,
  SelectDateTime
} from "./src/screens";
import Tabs from "./src/navigation/Tabs";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: require("./assets/fonts/Inter-Regular.ttf"),
    Medium: require("./assets/fonts/Inter-Medium.ttf"),
    Bold: require("./assets/fonts/Inter-Bold.ttf"),
    SecondaryMedium: require("./assets/fonts/SpaceGrotesk-Medium.ttf"),
    SecondaryBold: require("./assets/fonts/SpaceGrotesk-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading.....</Text>;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"SelectDateTime"}
        >
          <Stack.Screen name="Onboarding" component={Onboarding} />

          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />

          <Stack.Screen name="Dashboard" component={Tabs} />
          <Stack.Screen name="NearByShops" component={NearByShops} />
          <Stack.Screen name="ShopDetails" component={ShopDetails} />
          <Stack.Screen name="SelectServices" component={SelectServices} />
          <Stack.Screen name="SelectQuantities" component={SelectQuantities} />
          <Stack.Screen name="SelectDateTime" component={SelectDateTime} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
