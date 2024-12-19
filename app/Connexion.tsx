import { View ,Image,Text,TextInput, Pressable, TouchableOpacity} from "react-native";
import "@/global.css"
import { Link } from "expo-router";
import React from "react";
import Telecharge from "@/components/MesComposants/Telecharge";


export default function Connexion(){
    return(
        <View  className="items-center  bg-white flex-1">
            <View>
                <Image source={require('@/assets/images/logo.jpeg')} className="mt-24 w-24 h-24"> 
                </Image>    
            </View>
            <View>
                <View className="mt-4">
                  <Text>Entrez votre email</Text>
                  <TextInput placeholder="email" className="w-96 h-18 border-2 border-gray-300"></TextInput>
                </View>
                <View className="mt-4">
                  <Text>Entrez votre mot de passe</Text>
                  <TextInput placeholder="password" className="w-96 h-18 border-2 border-gray-300"></TextInput>
                </View>
                <View className="mt-6 bg-blue-600 h-14 justify-center items-center rounded-lg">
                    <Link href="/Acueil" asChild>
                        <TouchableOpacity >
                          <Text className="color-white text-2xl ">CONNEXION</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
                <View className="flex-row justify-center items-center mt-5">
                    <Image source={require('@/assets/images/logo1.png')} className=" w-20 h-20"> 
                    </Image>
                    <Link href="/Acueil" asChild>
                            <TouchableOpacity >
                              <Text className="color-blue-700 text-xl">Se Connecter avec Facebook</Text>
                            </TouchableOpacity>
                    </Link>
                    
                </View>
                <View className="items-center">
                  <Text className="text-xl">Mot de Passe Oublié ?</Text>
                </View>

                <View className="mt-5 flex-row gap-2">
                  <Text className="text-xl">Vous n'avez pas de compte ?</Text>
                  <Link href="/Inscription" asChild>
                            <TouchableOpacity >
                              <Text className="color-blue-700 text-xl">Inscrivez-Vous</Text>
                            </TouchableOpacity>
                    </Link>
                </View>
            <Telecharge></Telecharge>
                
            </View>
        </View>
    )
}