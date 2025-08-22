import { Drawer,  } from "expo-router/drawer";
import { usePathname } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import {useFonts} from "expo-font";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import indexStyle from "../styles/indexStyle";
import SearchBars from "../components/searchBar";
import { createContext } from "vm";


//splash screen animation duration
SplashScreen.setOptions({
  duration: 2000,
  fade: true
});

export interface SearchContextValue {
  query: string;
  setQuery: (q: string) => void;
}

// export const SearchContext = createContext<SearchContextValue>({
//   query: '',
//   setQuery: () => {}
// });

export interface FavoritesContextValue {
  count: number;
  setCount: (n: number) => void;
}

// export const FavoritesContext = createContext<FavoritesContextValue>({
//   count: 0,
//   setCount: () => {}
// });
SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {

  const pathname = usePathname();
   const [query, setQuery] = useState('');

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

  // Only show header search on Home route ("/")
  const headerTitle = pathname === '/' ? (() => <SearchBars onSearch={setQuery} />) : (() => <Text>TheaterFinder</Text>);

  return (
    <GestureHandlerRootView>
      <View style= {indexStyle.container}>
        <Drawer
          screenOptions={{
            headerStyle: { backgroundColor: '#a4a40873' },
            headerTintColor: '#fdfafaff',
            headerTitleAlign: 'center',
            drawerStyle: { backgroundColor: '#08080835' },
            drawerActiveTintColor: '#a4a408ff',
            drawerInactiveTintColor: '#ccc',
          }}>
            <Drawer.Screen name="index" options={{ drawerLabel: 'Home', title: '', headerTitle }} />
            <Drawer.Screen name="favorites" options={{ drawerLabel: 'Favorites', title: '' }} />
            <Drawer.Screen name="about" options={{ drawerLabel: 'About', title: '' }} />
        </Drawer>
      </View>
    </GestureHandlerRootView>
  );
}
