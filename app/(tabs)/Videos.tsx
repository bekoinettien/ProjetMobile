import { Video } from "expo-av";
import { ScrollView, View, Text, StyleSheet,TouchableOpacity,Image } from "react-native";
import { VideoData } from "@/app/data/VideoData";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import "@/global.css"
export default function VideoPub() {
  return (
    <ScrollView className="mt-16 bg-slate-500">
      {VideoData.map((vid) => (
        <View key={vid.id} style={styles.container}>
          <Video
            source={vid.video}
            style={styles.video}
            useNativeControls // Ajoute les contrôles natifs (play, pause, etc.)
            resizeMode="contain" // Ajuste la vidéo pour s'adapter au conteneur
            isLooping // Boucle la vidéo automatiquement
          />
          <View className="flex-col left-[85%] -mt-52 ">
              <View className="gap-1">
              <TouchableOpacity> <AntDesign name="hearto" size={24} color="white" /></TouchableOpacity>
                  
                <Text className="color-white">{vid.like}</Text>
                <TouchableOpacity><FontAwesome name="comment-o" size={24} color="white" /></TouchableOpacity>
                <Text className="color-white">{vid.nombre_de_commentaire}</Text>
                <TouchableOpacity> <EvilIcons name="sc-telegram" size={24} color="white" /></TouchableOpacity>
                <Text className="color-white">{vid.nombre_de_partage}</Text>
                <TouchableOpacity> <FontAwesome name="whatsapp" size={24} color="white" /></TouchableOpacity>
              </View>
          </View>
          <View  className="mt-10 mb-2 flex-row ml-4 gap-4 items-center ">
            <Image source={vid.imag} className="w-10 h-10 rounded-full"></Image>
          <Text className="color-white">{vid.auteur}</Text>
          <Text className="color-white border border-white tracking-widest py-2 rounded-lg border-spacing-y-6">{vid.objectif}</Text>
          </View>
          <View className="ml-4 mb-8">
                <Text className="color-white">{vid.content}...</Text>
                
            </View>
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
    
  },
});
