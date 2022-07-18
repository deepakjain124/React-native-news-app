import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import Launchingscreen from "./Screens/Launchingscreen";
import { KeyboardAvoidingView, Platform } from "react-native";
import Getlatest from "./Screens/Getlatest";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex:1}}
      >
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Launch"
            component={Launchingscreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Getlatestnews"
            component={Getlatest}
          />
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}
