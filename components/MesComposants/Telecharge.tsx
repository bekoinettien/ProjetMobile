import { Link } from "expo-router"
import { Image, Text, TouchableOpacity, View } from "react-native"

import "@/global.css"



export default function Telecharge(){
    return(
        <View>
        <View className="mt-6 items-center">
                  <Text className="text-xl">Télécharger l'application.</Text>
                </View>
                  
                <View className="flex-row items-center justify-center mt-4">
                  <View>
                      <Link href="/Acueil" asChild>
                                <TouchableOpacity >
                                <Image source={require('@/assets/images/logo3.png')} className=" w-28 h-20"> 
                                </Image>
                                </TouchableOpacity>
                      </Link>
                  </View>
                  <View>
                      <Link href="/Acueil" asChild>
                              <TouchableOpacity >
                              <Image source={require('@/assets/images/logo2.png')} className=" w-28 h-20 "> 
                              </Image>
                              </TouchableOpacity>
                      </Link>
                  </View>
                    
                </View>
             </View>
    )
}