import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import Launchingscreen from "./Screens/Launchingscreen";
import { KeyboardAvoidingView, Platform } from "react-native";
import Getlatest from "./Screens/Getlatest";
import { Provider } from "react-redux";
import { store } from "./store";
import GetCarddata from "./Screens/GetCarddata";
import Login from "./Screens/Login";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
    <NavigationContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex:1}}
      >
        <Stack.Navigator>
        <Stack.Screen
            options={{
              headerShown: true,
              title:"Login",
              headerStyle: {
                backgroundColor: 'white',
              },
              headerTintColor: '#000',
              headerTitleAlign:'center',
            }}
            name="Login"
            component={Login}
          />
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
           <Stack.Screen
            options={{
              headerShown: true,
            }}
            name="Getcarddata"
            component={GetCarddata}
          />
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
    </Provider>
  );
}
