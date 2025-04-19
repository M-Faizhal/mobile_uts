import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/Home";
import ProfileScreen from "./screens/ShowProfile";
import EditProfileScreen from "./screens/EditProfile";
import LibraryScreen from "./screens/Library";
import DetailLibrary from "./screens/DetailLibrary";
import PlayerScreen from "./screens/Player";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs({ user }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{ headerShown: false }}>
        {props => <HomeScreen {...props} user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Library" options={{ headerShown: false }}>
        {props => <LibraryScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Profile" options={{ headerShown: false }}>
        {props => <ProfileScreen {...props} user={user} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "BottomTabs" : "Login"}>
        <Stack.Screen 
        name="Login"
        options={{ headerShown: false }}
        >
          {(props) => <LoginScreen {...props} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name="BottomTabs" options={{ headerShown: false }}>
          {(props) => <BottomTabs {...props} user={user} />}
        </Stack.Screen>
        <Stack.Screen 
        name="EditProfile"
        options={{ headerShown: false }}
        >
          {(props) => (
            <EditProfileScreen {...props} user={user} setUser={setUser} />
          )}
        </Stack.Screen>
        <Stack.Screen 
        name="DetailLibrary"
        options={{ headerShown: false }}
        >
          {(props) => <DetailLibrary {...props} />}
        </Stack.Screen>
        <Stack.Screen 
        name="Player"
        options={{ headerShown: false }}
        >
          {(props) => <PlayerScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}