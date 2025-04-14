import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./screens/ShowProfile";
import EditProfileScreen from "./screens/EditProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
  });

   return (
    <NavigationContainer>
      <Stack.Navigator>
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