import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "CD-Bold": require("../assets/fonts/ClashDisplay-Bold.otf"),
    "CD-Extralight": require("../assets/fonts/ClashDisplay-Extralight.otf"),
    "CD-Light": require("../assets/fonts/ClashDisplay-Light.otf"),
    "CD-Medium": require("../assets/fonts/ClashDisplay-Medium.otf"),
    "CD-Regular": require("../assets/fonts/ClashDisplay-Regular.otf"),
    "CD-Semibold": require("../assets/fonts/ClashDisplay-Semibold.otf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
    // return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* <Stack.Screen name="search/[query]" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="(auth)" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default RootLayout;
