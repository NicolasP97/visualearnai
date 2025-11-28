import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="LibraryScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
