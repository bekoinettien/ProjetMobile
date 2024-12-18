import { PublicationData } from "@/app/data/PublicationData";
import { ScrollView, View ,Text,Image, TouchableOpacity} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import "@/global.css"

export default function Publication(){
    return(
        <ScrollView>
            {PublicationData.map((pub)=>(
                <View key={pub.id}>
                    <View className="flex-row justify-between ml-5 mr-10">
                    <Text>{pub.author}</Text>
                    <Text>{pub.date}</Text>
                    </View>
                    <View>
                        <Image source={pub.image} className="w-96 h-60"></Image>

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
                        <Text>{pub.likes}</Text>
                    </View>
                    <View>
                        <Text>{pub.content}</Text>
                        <Text>{pub.comments}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}