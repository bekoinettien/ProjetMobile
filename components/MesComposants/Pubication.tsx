import { PublicationData } from "@/app/data/PublicationData";
import { ScrollView, View ,Text,Image, TouchableOpacity} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import "@/global.css"
 interface Pubicite{
    author: string;
    date:string;
    image:any
    likes:number
    content:string
    comments:number

 }
const Publication =({item}: { item: Pubicite }) =>{
    return(
        <View>  
            <View className="flex-row justify-between ml-5 mr-10 mt-4">
                <Text className="font-bold">{item.author}</Text>
                <Text>{item.date}</Text>
            </View>
            <View>
                <Image source={item.image} className="w-96 h-60 mt-4"></Image>
            </View>
            <TouchableOpacity>
                <View className="flex-row justify-between gap-4 mt-2">
                <AntDesign name="hearto" size={28} color="black" />
                <FontAwesome name="comment-o" size={28} color="black" />
                <EvilIcons name="sc-telegram" size={28} color="black" />
                <FontAwesome name="whatsapp" size={28} color="black" />
                <Feather name="bookmark" size={28} color="black" className="ml-24" />
                </View>                 
            </TouchableOpacity>
            <View>
                <Text>{item.likes}</Text>
            </View>
            <View>
                <Text>{item.content}</Text>
            </View>
            <View className="flex-row">
                <Text>{item.comments}</Text>
                <Text className="font-bold">...Commentaires</Text>
            </View>
    
          
        </View>
    )
}
export default Publication
