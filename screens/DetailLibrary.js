import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";

import blindingCover from "../img/blinding.jpeg";
import shapeCover from "../img/shape.jpeg";
import levitatingCover from "../img/levitating.jpeg";
import badCover from "../img/bad.jpeg";
import stayCover from "../img/stay.jpeg";
import peachesCover from "../img/peaches.jpeg";

const popularSongs = [
  { id: "1", title: "Blinding Lights", artist: "The Weeknd", cover: blindingCover },
  { id: "2", title: "Shape of You", artist: "Ed Sheeran", cover: shapeCover },
  { id: "3", title: "Levitating", artist: "Dua Lipa", cover: levitatingCover },
  { id: "4", title: "Bad Guy", artist: "Billie Eilish", cover: badCover },
  { id: "5", title: "Stay", artist: "The Kid LAROI, Justin Bieber", cover: stayCover },
  { id: "6", title: "Peaches", artist: "Justin Bieber", cover: peachesCover },
];

const PlaylistDetailScreen = ({ route, navigation }) => {
  const { playlist } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{playlist.title}</Text>
      <Text style={styles.description}>{playlist.description}</Text>

      <Text style={styles.songHeader}>Songs in this Playlist:</Text>
      <FlatList
        data={popularSongs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.songItem}
            onPress={() => navigation.navigate("Player", { song: item })}
          >
            <Image source={item.cover} style={styles.songCover} />
            <View style={styles.songInfo}>
              <Text style={styles.songTitle}>{item.title}</Text>
              <Text style={styles.songArtist}>{item.artist}</Text>
            </View>
          </TouchableOpacity>
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
    backgroundColor: "#E8F6FF",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#444", 
    marginBottom: 20,
  },
  songHeader: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333", 
    marginBottom: 10,
    marginTop: 10,
  },
  songItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F4F8", 
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  songCover: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  songArtist: {
    fontSize: 14,
    color: "#666",
  },
});