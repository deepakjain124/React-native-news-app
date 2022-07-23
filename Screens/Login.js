import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth, db, LogInWithEmailAndPassword, registerWithEmailAndPassword } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { handlesignup } from "../firebase";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [showregisterfield, setshowregisterfield] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const navigate=()=>{
    navigation.navigate("Launch")
  }
  const handleLogin = () => {
    if(email!=="" && password!==""){
      LogInWithEmailAndPassword(email,password,navigate)
    }else{
      Alert.alert("please fill the fields")
    }
  };
  const showlogin=()=>{
    setshowregisterfield(false)
  }
  
  const handlesignup=async()=>{
    if(name!=="" && email!=="" && password!=="" ){
      await registerWithEmailAndPassword(email,password,name,showlogin)
      setemail("")
      setname("")
      setpassword("")
      setconfirmpassword("")
    }else if( password!==confirmpassword){
      Alert.alert("Please fill the same password")
    }else{
      Alert.alert("Please fill the fields")
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.inputcontainer}>
        {showregisterfield && (
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setname(text)}
            placeholder="Name"
          ></TextInput>
        )}
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setemail(text)}
          placeholder="Email"
        ></TextInput>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setpassword(text)}
          placeholder="Password"
          secureTextEntry
        ></TextInput>
        {showregisterfield && (
          <TextInput
            style={styles.input}
            value={confirmpassword}
            onChangeText={(text) => setconfirmpassword(text)}
            placeholder="Confirm Password"
            secureTextEntry
          ></TextInput>
        )}
      </View>

      <View style={styles.buttoncontainer}>
        {!showregisterfield && (
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        )}

        {showregisterfield && (
          <TouchableOpacity
            onPress={handlesignup}
            style={[styles.button, styles.btnoutline]}
          >
            <Text style={styles.buttonOutlinetext}>Regiter</Text>
          </TouchableOpacity>
        )}
      </View>
      {showregisterfield && (
        <Text
          onPress={() => setshowregisterfield(false)}
          style={{ color: "#0782f9", marginTop: 10 }}
        >
          LogIn
        </Text>
      )}
      {!showregisterfield && (
        <Text
          onPress={() => setshowregisterfield(true)}
          style={{ color: "#0782f9", marginTop: 10 }}
        >
          Sign Up?
        </Text>
      )}
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  inputcontainer: {
    width: "80%",
  },
  buttoncontainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#0782f9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  btnoutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782f9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlinetext: {
    color: "#0782f9",
    fontSize: 16,
    fontWeight: "700",
  },
});
