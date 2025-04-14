import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const dummySongs = [
  { id: "1", title: "Sunset Breeze" },
  { id: "2", title: "Ocean Waves" },
  { id: "3", title: "Night Chill" },
  { id: "4", title: "Late Vibes" },
];

const PlaylistDetailScreen = ({ route }) => {
  const { playlist } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{playlist.title}</Text>
      <Text style={styles.description}>{playlist.description}</Text>

      <Text style={styles.songHeader}>Songs in this Playlist:</Text>
      <FlatList
        data={dummySongs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.songItem}>
            <Text style={styles.songTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PlaylistDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  songHeader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 10,
  },
  songItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  songTitle: {
    fontSize: 16,
    color: "#333",
  },
});