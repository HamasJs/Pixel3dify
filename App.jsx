import { StyleSheet, Text, View } from "react-native";
import TermConditions from "./Screens/TermConditions";
import LoginScreen from "./Screens/LoginScreen";
import CreateYourAccount from "./Screens/CreateYourAccount";
import { NavigationContainer } from "@react-navigation/native";
import ConfirmOTPCode from "./Screens/ConfirmOTPCode";
import WelcomeScreen from "./Screens/WelcomeScreen";
import BuildYourAvatarScreen from "./Screens/BuildYourAvatar";
import Custom from "./Screens/Custom";
import Api from "./Screens/API";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TermConditions">
        <Stack.Screen name="TermConditions" component={TermConditions} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CreateYourAccount" component={CreateYourAccount} />
        <Stack.Screen name="ConfirmOTPCode" component={ConfirmOTPCode} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="BuildYourAvatarScreen" component={BuildYourAvatarScreen} />
        <Stack.Screen name="Custom" component={Custom} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}


