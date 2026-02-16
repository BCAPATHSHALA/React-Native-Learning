import { Stack } from "expo-router";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#020617" }}
      edges={["top", "bottom"]}
    >
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        {/* Home Page: / */}
        <Stack.Screen name="index" options={{ title: "Home" }} />
        {/* About Page: /about */}
        <Stack.Screen name="about" options={{ title: "About" }} />
        {/* Sign In Page: /signin */}
        <Stack.Screen name="signin" options={{ title: "Sign In" }} />
        {/* Sign Up Page: /signup */}
        <Stack.Screen name="signup" options={{ title: "Sign Up" }} />
        {/* Tabs Layout: /(tabs) */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* 404 Page: +not-found */}
        <Stack.Screen name="+not-found" options={{ title: "Not Found" }} />
      </Stack>
    </SafeAreaView>
  );
}
