import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function RootIndex() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-2xl font-semibold text-neutral-900">
        Welcome to E2E App
      </Text>
      <Text className="mt-2 text-center text-sm text-neutral-600">
        This is the root route. Use the buttons below to explore the app.
      </Text>

      <View className="mt-8 w-full gap-4">
        <Pressable
          onPress={() => router.push("/(tabs)")}
          style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1 }]}
          className="rounded-2xl bg-black px-5 py-4"
        >
          <Text className="text-center text-sm font-semibold text-white">
            Open Tabs
          </Text>
          <Text className="mt-1 text-center text-xs text-neutral-300">
            Browse products and details
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/about")}
          style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1 }]}
          className="rounded-2xl border border-neutral-300 bg-neutral-50 px-5 py-4"
        >
          <Text className="text-center text-sm font-medium text-neutral-900">
            About Page
          </Text>
          <Text className="mt-1 text-center text-xs text-neutral-500">
            Project info and app context
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
