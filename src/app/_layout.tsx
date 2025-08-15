import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import {useFonts} from "expo-font";
import React, { useEffect } from "react";
import { View } from "react-native";
import indexStyle from "../styles/indexStyle";


//splash screen animation duration
SplashScreen.setOptions({
  duration: 2000,
  fade: true
});

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf')
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hide();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <GestureHandlerRootView>
      <View style= {indexStyle.container}>
        <Drawer
          screenOptions={{
            headerStyle: { backgroundColor: '#a4a40873' },
            headerTintColor: '#fdfafaff',
            drawerStyle: { backgroundColor: '#08080835' },
            drawerActiveTintColor: '#a4a408ff',
            drawerInactiveTintColor: '#ccc',
          }}>
            <Drawer.Screen name="index" options={{ drawerLabel: 'Home', title: '' }} />
            <Drawer.Screen name="favorites" options={{ drawerLabel: 'Favorites', title: '' }} />
            <Drawer.Screen name="about" options={{ drawerLabel: 'About', title: '' }} />
        </Drawer>
      </View>
    </GestureHandlerRootView>
  );
}
