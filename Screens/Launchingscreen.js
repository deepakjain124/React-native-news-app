import {
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Launchingscreen = ({route}) => {
    const navigation=useNavigation()
  const [showloader, setshowloade] = useState(true);

  const hideloader = () => {
    setTimeout(() => {
      setshowloade(false);
    }, 3000);
  };

  useEffect(() => {
    hideloader();
    Alert.alert("Welcome to the APP",route.params.data)
  }, []);
  return (
    <View style={styles.container}>
      {showloader ? (
        <ActivityIndicator size={60} color="#8484dc" />
      ) : (
        <>
          <Text style={styles.text}>
            Welcome To India's First and Largest News App
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
            <Text style={styles.button}>Let's start</Text>
          </TouchableOpacity>
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
};

export default Launchingscreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      text: {
        fontSize: 20,
        paddingHorizontal: 10,
        textAlign: "center",
        color: "#000",
        fontWeight: "bold",
      },
      button: {
        color: "white",
        backgroundColor: "black",
        padding: 15,
        fontWeight: "500",
        borderRadius: 100,
        width: 120,
        fontSize: 20,
        textAlign: "center",
        marginTop: 20,
      },
});
