import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      {/* Home Page: / */}
      <Stack.Screen name="index" options={{ title: "Home" }} />
      {/* About Page: /about */}
      <Stack.Screen name="about" options={{ title: "About" }} />
      {/* Tabs Layout: /(tabs) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* 404 Page: +not-found */}
      <Stack.Screen name="+not-found" options={{ title: "Not Found" }} />
    </Stack>
  );
}
