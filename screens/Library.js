import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const playlists = [
  { id: "1", title: "Chill Vibes", description: "Relaxing tunes to unwind" },
  {
    id: "2",
    title: "Workout Hits",
    description: "High-energy music to boost your workout",
  },
  {
    id: "3",
    title: "Focus Mode",
    description: "Stay productive with these beats",
  },
  { id: "4", title: "Throwback 90s", description: "Hits from the golden era" },
];

const LibraryScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.playlistButton}
      onPress={() => navigation.navigate("DetailLibrary", { playlist: item })}
    >
      <Text style={styles.playlistTitle}>{item.title}</Text>
      <Text style={styles.playlistDesc}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Library</Text>
      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F6FF", 
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333", 
    marginBottom: 20,
  },
  playlistButton: {
    backgroundColor: "#F0F4F8", 
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 2,
  },
  playlistTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333", 
  },
  playlistDesc: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});