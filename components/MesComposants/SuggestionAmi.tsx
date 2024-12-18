import { SuggestionAmiData } from "@/app/data/SuggestionAmiData";
import { ScrollView, TouchableOpacity, View ,Text, Image, Pressable} from "react-native";
import "@/global.css"
import { Link } from "expo-router";


export default function SuggestionAmi(){
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {SuggestionAmiData.map((Ami)=>(
         <View key={Ami.id} className="mt-28" >
          <View className="flex-1 mr-2 ml-2">  
            <Image source={Ami.imag} className="w-28 h-28"></Image>    
          <Text className="text-xl font-black">{Ami.name}</Text>
          <Link href="/" asChild>
            <Pressable
            className='bg-blue-600 gap-2 w-24 justify-between' > 
            <Text className='text-white text-center text-2xl '>{Ami.objectf}</Text>
            </Pressable>
          </Link>
          
          </View>
            </View>
        ))}
    </ScrollView>
    )
}