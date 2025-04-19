import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <ScrollView>
        <Text style={styles.header}>About This Program</Text>
        <Text style={styles.description}>
          Aplikasi pemutar musik sederhana adalah aplikasi ringan yang dirancang untuk memutar file audio lokal dengan antarmuka yang mudah digunakan. 
          Pengguna dapat menjelajahi file musik yang tersimpan di perangkat, membuat daftar putar, serta memutar, menjeda, dan mengganti lagu dengan kontrol dasar. 
          Aplikasi ini mendukung berbagai format audio populer dan menampilkan informasi lagu seperti judul, artis, dan durasi. 
          Cocok untuk pengguna yang menginginkan pemutar musik tanpa fitur yang rumit.
        </Text>

        <Text style={styles.header}>Identitas Mahasiswa</Text>
        <Text style={styles.description}>
          <Text style={styles.subHeader}>Anggota 1:</Text>{"\n"}
          Nama : Muhamad Faizhal Musthafa{"\n"}
          NPM  : 22081010032{"\n"}

          <Text style={styles.subHeader}>Anggota 2:</Text>{"\n"}
          Nama : Anggara Falih Hartono{"\n"}
          NPM  : 22081010122{"\n"}
        </Text>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F6FF",
    padding: 20,
    marginTop: 50,
  },
  backButton: {
    backgroundColor: "#A7C7E7",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", 
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333", 
  },
  description: {
    fontSize: 16,
    color: "#444",
    lineHeight: 24,
    marginBottom: 20,
  },
});