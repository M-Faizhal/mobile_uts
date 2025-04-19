import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image } from "react-native";

import blindingCover from "../img/blinding.jpeg";
import shapeCover from "../img/shape.jpeg";
import levitatingCover from "../img/levitating.jpeg";
import badCover from "../img/bad.jpeg";
import stayCover from "../img/stay.jpeg";
import peachesCover from "../img/peaches.jpeg";

const HomeScreen = ({ navigation, user }) => {
  const categories = [
    { id: "1", name: "Pop" },
    { id: "2", name: "Rock" },
    { id: "3", name: "Hip-Hop" },
    { id: "4", name: "Jazz" },
    { id: "5", name: "Classical" },
    { id: "6", name: "Electronic" },
  ];

  const popularSongs = [
    { id: "1", title: "Blinding Lights", artist: "The Weeknd", cover: blindingCover },
    { id: "2", title: "Shape of You", artist: "Ed Sheeran", cover: shapeCover },
    { id: "3", title: "Levitating", artist: "Dua Lipa", cover: levitatingCover },
    { id: "4", title: "Bad Guy", artist: "Billie Eilish", cover: badCover },
    { id: "5", title: "Stay", artist: "The Kid LAROI, Justin Bieber", cover: stayCover },
    { id: "6", title: "Peaches", artist: "Justin Bieber", cover: peachesCover },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Good Evening, {user?.name || "Guest"}
        </Text>
      </View>

      <ScrollView>
        {/* Categories */}
        <Text style={styles.sectionTitle}>Your Categories</Text>
        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryCard}>
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />

        {/* Popular Songs */}
        <Text style={styles.sectionTitle}>Popular Songs</Text>
        {popularSongs.map((song) => (
          <TouchableOpacity
            key={song.id}
            style={styles.songCard}
            onPress={() => navigation.navigate("Player", { song })}
          >
            <Image source={song.cover} style={styles.songCover} />
            <View style={styles.songInfo}>
              <Text style={styles.songTitle}>{song.title}</Text>
              <Text style={styles.songArtist}>{song.artist}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F6FF", 
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", 
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444", 
    marginVertical: 10,
  },
  categoryCard: {
    backgroundColor: "#A7C7E7", 
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  categoryText: {
    color: "#fff", 
    fontSize: 16,
  },
  songCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F4F8", 
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
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
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  songArtist: {
    color: "#666", 
    fontSize: 14,
  },
});