import { Stack } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    SystemUI.setBackgroundColorAsync("#000");
  }, []);
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/montserrat-regular.ttf"),
    Quicksand: require("../assets/fonts/quicksand-regular.ttf"),
    QuicksandMedium: require("../assets/fonts/quicksand-medium.ttf"),
    QuicksandBold: require("../assets/fonts/quicksand-bold.ttf"),
    Lato: require("../assets/fonts/lato-regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#00c3ef" />
      </View>
    );
  }

  return <Stack></Stack>;
}
