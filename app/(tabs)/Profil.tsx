import { View,Image,Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { ProfilData } from "../data/ProfilData";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

import SuggestionAmi from "@/components/MesComposants/SuggestionAmi";
import { Link } from "expo-router";

export default function Profil(){
    return(
        <ScrollView className=" bg-white flex-1">
            <View className="mt-20 ">
            {ProfilData.map((profil)=>(
                <View key={profil.id}>
                    <View className="flex-row gap-4 mb-4">
                        <Text className="text-lg ml-4">{profil.name}</Text>
                        <AntDesign name="down" size={24} color="black" />
                        <View className="ml-20 flex-row gap-6 justify-center items-center">
                            <Octicons name="diff-added" size={20} color="black" />
                            <FontAwesome5 name="telegram-plane" size={24} color="black" />
                            <FontAwesome5 name="bars" size={24} color="black" />
                        </View>
                    
                    </View>
                    <View className=" flex-row gap-4 mr-2 items-center ">
                        <Image source={profil.image} className="w-24 h-24 ml-4 rounded-full"></Image>
                        <View className="items-center">
                             <Text className="text-lg" >{profil.publication}</Text>
                             <Text className="text-xl">publication</Text>
                        </View>
                        <View className="items-center">
                            <Text className="text-lg">{profil.followers}</Text>
                            <Text className="text-xl">followers</Text>
                        </View>
                        <View className="items-center">
                            <Text className="text-lg">{profil.suivie}</Text>                   
                            <Text className="text-xl">suivie</Text>
                        </View> 
                    </View>
                    <View className="ml-24 -mt-8 bg-blue-600 w-6 rounded-full border-white">
                        <Ionicons name="add-circle-outline" size={20} color="white" />
                        </View>
                    <View className="ml-4 mt-4">
                    <Text className="text-xl">{profil.name}</Text>
                    </View>
                    <View className="flex-row ml-4 gap-4 mt-6 ">
                        <Link href="/" asChild>
                            <TouchableOpacity className="bg-slate-200 w-40">
                                <Text className="ml-5 mr-5 mt-2 mb-2 font-bold">Modifier le profil</Text>
                            </TouchableOpacity>
                        </Link>
                        <Link href="/" asChild>
                            <TouchableOpacity className="bg-slate-200 w-40 ">
                                <Text className="ml-5 mr-5 mt-2 mb-2 font-bold ">Partager le profil</Text>
                            </TouchableOpacity>
                        </Link>
                        <AntDesign name="up" size={24} color="black" className="bg-slate-200" />
                    </View>
                    
                </View>

            ))}
            <View className="flex-row justify-between ml-4 mr-4 mt-6">
                <Text>Suggestions</Text>
                <Text className="color-blue-400">Voir tout</Text>
            </View>
            <View className="-mt-24">
             <SuggestionAmi></SuggestionAmi>
            </View>
            <View className="ml-4">
                <Text className="text-xl">Stories à la une</Text>
                <Text>Conservez vos stories préférés sur votre profil</Text>
            </View>
            <View className="flex-row ml-4 justify-center gap-4 mt-4 items-center">
                <AntDesign name="pluscircleo" size={55} color="black" />
                <FontAwesome name="circle-thin" size={65} color="black"/>
                <FontAwesome name="circle-thin" size={65} color="black" />
                <FontAwesome name="circle-thin" size={65}  color="black"  />
                <FontAwesome name="circle-thin" size={65} color="black" />
            </View>
            <View>
                <Text className="ml-6">Nouveau</Text>
            </View>
            <View className="flex-row  ml-12  gap-28 mt-4 items-center">
                <AntDesign name="table" size={24} color="black" />
                <Entypo name="video" size={24} color="black" />
                <FontAwesome5 name="address-card" size={24} color="black" />
            </View>
          </View>
        </ScrollView>
    )
}