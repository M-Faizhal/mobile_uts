import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";

const SplashScreen = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
 
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000, 
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace("Login"); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
        <Text style={styles.appName}>LOOPIA</Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2A38", 
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});