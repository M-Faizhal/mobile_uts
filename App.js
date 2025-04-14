import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Login";
import ProfileScreen from "./screens/ShowProfile";
import EditProfileScreen from "./screens/EditProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Profile" : "Login"}>
        <Stack.Screen name="Login">
          {props => <LoginScreen {...props} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name="Profile">
          {props => <ProfileScreen {...props} user={user} />}
        </Stack.Screen>
        <Stack.Screen name="EditProfile">
          {props => (
            <EditProfileScreen {...props} user={user} setUser={setUser} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}