import { View ,Image,Text,TextInput, Pressable, TouchableOpacity} from "react-native";
import "@/global.css"
import { Link } from "expo-router";
import React from "react";
import Telecharge from "@/components/MesComposants/Telecharge";


export default function Inscription(){
    return(
        <View  className="items-center  bg-white flex-1">
            <View>
                <Image source={require('@/assets/images/logo.jpeg')} className="mt-24 w-24 h-24"> 
                </Image>    
            </View>
            <View>
                <View className="mt-2">
                  <Text>Entrez votre email</Text>
                  <TextInput placeholder="email" className="w-96 h-18 border-2 border-gray-300"></TextInput>
                </View>
                <View className="mt-2">
                  <Text>Entrez votre mot de passe</Text>
                  <TextInput placeholder="password" className="w-96 h-18 border-2 border-gray-300"></TextInput>
                </View>
                <View className="mt-2">
                  <Text>Entrez votre nom complet</Text>
                  <TextInput placeholder="password" className="w-96 h-18 border-2 border-gray-300"></TextInput>
                </View>
                <View className="mt-2">
                  <Text>Entrez votre nom de profil</Text>
                  <TextInput placeholder="password" className="w-96 h-18 border-2 border-gray-300"></TextInput>
                </View>
                <View className="mt-6 bg-blue-600 h-14 justify-center items-center rounded-lg">
                    <Link href="/Acueil" asChild>
                        <TouchableOpacity >
                          <Text className="color-white text-2xl ">S'INSCRIRE</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
                
                <View className="mt-5 flex-row gap-2">
                  <Text className="text-xl">Vous avez un compte ?</Text>
                  <Link href="/Connexion" asChild>
                            <TouchableOpacity >
                              <Text className="color-blue-700 text-xl">Connectez-Vous</Text>
                            </TouchableOpacity>
                    </Link>
                </View>
            <Telecharge></Telecharge>
                
            </View>
        </View>
    )
}