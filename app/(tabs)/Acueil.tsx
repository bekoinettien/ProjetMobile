import { ScrollView, TouchableOpacity, View,Text,Image } from "react-native";
import "@/global.css"
import { SuggestionAmiData } from "../data/SuggestionAmiData";

export default function Accueil(){
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={true} className="flex-row flex-1  bg-red-500">
                    {SuggestionAmiData.map((Ami)=>(
                     <TouchableOpacity key={Ami.id} >
                      <View className="flex-1">  
                        <Image source={Ami.imag} className="w-28 h-28"></Image>    
                      <Text className="text-xl font-black ml-5 mr-5 ">{Ami.name}</Text>
                      <Text className="text-gray-600 ml-5 mr-5 ">{Ami.objectf}</Text>
                      </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
    )
       
        
    
}