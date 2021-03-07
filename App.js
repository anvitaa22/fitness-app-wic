import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [login, setLogin] = useState('');
  const [signup, setSignup] = useState('');
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/logo.png")} />

      <Text style={{
          padding: 20,
          fontSize: 30,
          textAlign: 'center',
          color: '#000000',
          fontWeight: '700'
        }}>Fitness on Track</Text>

      <Text style={{
          padding: 21,
          fontSize: 30,
          textAlign: 'center',
          color: '#000000',
          fontWeight: '300'
        }}>slogan</Text>

      <Text style={{
          padding: 35,
          fontSize: 30,
          textAlign: 'center',
          color: '#000000',
          fontWeight: '900'
        }}>Welcome!</Text>

 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Login"
          placeholderTextColor="#003f5c"
          onChangeText={(login) => setEmail(login)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Signup"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(signup) => setSignup(signup)}
        />
      </View>
 
      {/* <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity> */}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    backgroundColor: "#CFEEFA",
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#CFEEFA",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  // forgot_button: {
  //   height: 30,
  //   marginBottom: 30,
  // },
 
  // loginBtn: {
  //   width: "80%",
  //   borderRadius: 25,
  //   height: 50,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginTop: 40,
  //   backgroundColor: "#FF1493",
  // },
});