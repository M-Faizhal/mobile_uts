import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons"; 
import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/Home";
import ProfileScreen from "./screens/ShowProfile";
import EditProfileScreen from "./screens/EditProfile";
import LibraryScreen from "./screens/Library";
import DetailLibrary from "./screens/DetailLibrary";
import PlayerScreen from "./screens/Player";
import AboutScreen from "./screens/About";
import SplashScreen from "./screens/SplashScreen";
import RegisterScreen from "./screens/Register";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs({ user }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Library") {
            iconName = focused ? "library" : "library-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          // Return the icon component
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1D7BB9FF", 
        tabBarInactiveTintColor: "gray",
        headerShown: false, 
      })}
    >
      <Tab.Screen name="Home">
        {(props) => <HomeScreen {...props} user={user} />}
      </Tab.Screen>
      <Tab.Screen name="Library">
        {(props) => <LibraryScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Profile">
        {(props) => <ProfileScreen {...props} user={user} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Splash"}>
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <LoginScreen {...props} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name="Register" options={{ headerShown: false }}>
          {(props) => <RegisterScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="BottomTabs" options={{ headerShown: false }}>
          {(props) => <BottomTabs {...props} user={user} />}
        </Stack.Screen>
        <Stack.Screen name="EditProfile" options={{ headerShown: false }}>
          {(props) => (
            <EditProfileScreen {...props} user={user} setUser={setUser} />
          )}
        </Stack.Screen>
        <Stack.Screen name="DetailLibrary" options={{ headerShown: false }}>
          {(props) => <DetailLibrary {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Player" options={{ headerShown: false }}>
          {(props) => <PlayerScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="About" options={{ headerShown: false }}>
          {(props) => <AboutScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Splash" options={{ headerShown: false }}>
          {(props) => <SplashScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}