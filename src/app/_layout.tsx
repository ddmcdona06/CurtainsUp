import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {useFonts} from "expo-font";
import { useEffect } from "react";

//splash screen animation duration
SplashScreen.setOptions({
  duration: 2000,
  fade: true
});

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('.../assets/fonts/SpaceMono-Regular.ttf')
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hide();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <Stack />;
}
