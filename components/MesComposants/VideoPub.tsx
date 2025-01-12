import { VideoData } from "@/app/data/VideoData";
import { VideoPlayer } from "expo-video";
import { ScrollView, View ,Text} from "react-native";
import Video from "react-native-video";

export default function VideoPub(){
    return(
        <ScrollView>
            {VideoData.map((vid)=>(
                <View key={vid.id}>
                    <Video source={vid.video}></Video>
                    
                </View>
            ))}
        </ScrollView>
    )
}