import { ScrollView, TouchableOpacity, View,Text,Image, SafeAreaView, FlatList, } from "react-native";
import "@/global.css"
import Publication from "@/components/MesComposants/Pubication";
import SuggestionAmi from "@/components/MesComposants/SuggestionAmi";
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SuggestionAmiData } from "../data/SuggestionAmiData";
import { PublicationData } from "../data/PublicationData";

export default function Accueil(){
    return(
        
     <View className="  bg-white">
         <View className="flex-row gap-4 mt-10">
            <Image source={require("@/assets/images/logo5.png")} className="w-28 h-20 ml-4"></Image>
            <View className=" flex-row items-center ml-10 gap-8">
                <MaterialCommunityIcons name="swap-vertical-circle-outline" size={24} color="black" />
                <Octicons name="diff-added" size={24} color="black" />
                <AntDesign name="hearto" size={24} color="black" />
                <EvilIcons name="sc-telegram" size={28} color="black" />
            </View>
        </View>
             <ScrollView className="">
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row ml-4 gap-4">
                {SuggestionAmiData.map((amie)=>(
                    <View key={amie.id} className="">
                        <View className="flex-1 mr-2 ml-2">
                        <Image source={amie.imag} className="w-28 h-28 rounded-full gap-4"></Image>    
                        <Text className="text-lg">{amie.name}</Text>
                        </View>       
                    </View>
                ))}
                
                </ScrollView> 
                <FlatList data={PublicationData} 
                    keyExtractor={item => item.id.toString()} 
                    className="ml-6 mr-6"
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) =>{
                    return(
                        <Publication item={item}/>
                    )
                    
                    }}
                />
     </ScrollView>       
            
                
        
     </View>
      
      
       
        
    )
       
        
    
}