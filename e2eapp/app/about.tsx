import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function AboutPage() {
  return (
    <View className="flex-1 bg-white px-6 py-8">
      <Text className="text-2xl font-semibold text-neutral-900">About</Text>
      <Text className="mt-2 text-sm text-neutral-600">
        This screen shows a simple static route. It never changes unless you
        update the file.
      </Text>

      <View className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
        <Text className="text-base font-medium text-neutral-900">
          What you can learn here
        </Text>
        <Text className="mt-2 text-sm text-neutral-600">
          Static routes are perfect for pages like About, Help, or Terms.
        </Text>
      </View>

      <Pressable
        onPress={() => router.push("/")}
        className="mt-8 rounded-lg bg-black px-4 py-3"
      >
        <Text className="text-center text-white">Back to Home</Text>
      </Pressable>
    </View>
  );
}
