import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider"; 
import Icon from "react-native-vector-icons/Ionicons";

const PlayerScreen = ({ route }) => {
    const { song } = route.params; 
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(240); 

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <View style={styles.container}>
            {/* Cover Art */}
            <Image
                source={song.cover} 
                style={styles.coverArt}
            />

            {/* Song Info */}
            <Text style={styles.songTitle}>{song.title}</Text>
            <Text style={styles.artistName}>{song.artist}</Text>

            {/* Slider */}
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={duration}
                value={currentTime}
                onValueChange={(value) => setCurrentTime(value)}
                minimumTrackTintColor="#1D7BB9FF"
                maximumTrackTintColor="#555"
                thumbTintColor="#1D7BB9FF"
            />
            <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
                <Text style={styles.timeText}>{formatTime(duration)}</Text>
            </View>

            {/* Controls */}
            <View style={styles.controls}>
                <TouchableOpacity>
                    <Icon name="play-skip-back" size={40} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={togglePlayPause}>
                    <Icon
                        name={isPlaying ? "pause-circle" : "play-circle"}
                        size={70}
                        color="#1D7BB9FF"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="play-skip-forward" size={40} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Helper function to format time
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

export default PlayerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E2A38", 
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    coverArt: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    songTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginBottom: 5,
    },
    artistName: {
        fontSize: 18,
        color: "#ccc", 
        textAlign: "center",
        marginBottom: 20,
    },
    slider: {
        width: "90%",
        height: 40,
    },
    timeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        marginBottom: 20,
    },
    timeText: {
        color: "#ccc", 
        fontSize: 14,
    },
    controls: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "60%",
    },
});