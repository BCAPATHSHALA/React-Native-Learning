import { Link } from "expo-router";
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

      <View className="mt-6 w-full gap-3">
        <Link href="/(tabs)" asChild>
          <Pressable className="rounded-lg bg-black px-4 py-3">
            <Text className="text-center text-neutral-900 text-xs">
              Open Tabs
            </Text>
          </Pressable>
        </Link>
        <Link href="/about" asChild>
          <Pressable className="rounded-lg border border-neutral-300 bg-white px-4 py-3">
            <Text className="text-center text-neutral-900">About Page</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
