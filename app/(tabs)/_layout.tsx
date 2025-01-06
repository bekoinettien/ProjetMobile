import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="Acueil"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Entypo name="home" size={28} color="black" />,
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={28} color="black" />,
        }}
      />
       <Tabs.Screen
        name="AjoutePub"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="add-circle-outline" size={28} color="black" />,
        }}
      />
      <Tabs.Screen
        name="Videos"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Octicons name="video" size={28} color="black" />,
        }}
      />
      <Tabs.Screen
        name="Profil"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={28} color="black" />,
        }}
      />
    </Tabs>
  );
}
