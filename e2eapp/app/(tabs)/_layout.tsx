import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#111",
        tabBarInactiveTintColor: "#777",
      }}
    >
      {/* Tabs Layout: /(tabs) */}
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      {/* Tabs Screens: /(tabs)/feed */}
      <Tabs.Screen name="feed" options={{ title: "Feed" }} />
      {/* Tabs Screens: /(tabs)/profile */}
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
