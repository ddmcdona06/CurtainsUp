import { Drawer,  } from "expo-router/drawer";
import { usePathname, SplashScreen } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import indexStyle from "../styles/indexStyle";
import SearchBars from "../components/searchBar";
import Ionicons from "@expo/vector-icons/Ionicons";

// // Prevent the splash screen from auto-hiding
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const pathname = usePathname();
  //  const [appReady, setAppReady] = useState(false);
   const [query, setQuery] = useState('');

  //  useEffect(() => {
  //   const timer = setTimeout(() => setAppReady(true), 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (!appReady) {
  //   return SplashScreen;
  // }


  // Only show header search on Home route ("/")
  const headerTitle = pathname === '/' ? (() => <SearchBars onSearch={setQuery} />) : (() => <Text>TheaterFinder</Text>);

  return (
    <GestureHandlerRootView>
      <View style= {indexStyle.container}>
        <Drawer
          screenOptions={{
            headerStyle: { backgroundColor: '#ffffffff' },
            headerTintColor: '#051efbff',
            headerTitleAlign: 'center',
            drawerStyle: { backgroundColor: '#0808086e' },
            drawerActiveTintColor: '#06d39dff',
          }}>
            <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'Home',
              title: '',
              headerTitle,
              drawerIcon: () => (<Ionicons name="home-outline"/>)
              }}
              />
            <Drawer.Screen
            name="favorites"
            options={{
              drawerLabel: 'Favorites',
              title: '',
              drawerIcon: () => (<Ionicons name="heart-outline"/>)
              }}
              />
            <Drawer.Screen
            name="about"
            options={{
              drawerLabel: 'About',
              title: '',
              drawerIcon: () => (<Ionicons name="information-circle-outline"/>)
              }}
              />
        </Drawer>
      </View>
    </GestureHandlerRootView>
  );
}
