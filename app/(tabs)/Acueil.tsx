import { ScrollView, TouchableOpacity, View,Text,Image, SafeAreaView, } from "react-native";
import "@/global.css"
import Publication from "@/components/MesComposants/Pubication";
import SuggestionAmi from "@/components/MesComposants/SuggestionAmi";

export default function Accueil(){
    return(
     <ScrollView className="mt-10 mb-10 ml-5">
        
        <SuggestionAmi></SuggestionAmi>
        <Publication></Publication>
     </ScrollView>
        
      
       
        
    )
       
        
    
}