import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const LoginScreen = ({ navigation, setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = () => {
      const validEmail = "johndoe@example.com";
      const validPassword = "password123";
  
      if (email === validEmail && password === validPassword) {
        setUser({ name: "John Doe", email }); // Set user data
        Alert.alert("Login Successful", "Welcome back!", [
          { text: "OK", onPress: () => navigation.navigate("Profile") },
        ]);
      } else {
        Alert.alert("Login Failed", "Invalid email or password.");
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#4a90e2",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    width: "60%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});