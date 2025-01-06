import { Video } from "expo-av";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { VideoData } from "@/app/data/VideoData";

export default function VideoPub() {
  return (
    <ScrollView className="mt-16">
      {VideoData.map((vid) => (
        <View key={vid.id} style={styles.container}>
          <Video
            source={vid.video}
            style={styles.video}
            useNativeControls // Ajoute les contrôles natifs (play, pause, etc.)
            resizeMode="contain" // Ajuste la vidéo pour s'adapter au conteneur
            isLooping // Boucle la vidéo automatiquement
          />
          <Text style={styles.author}>{vid.auteur}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  video: {
    width: "100%",
    height: 200,
  },
  author: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
