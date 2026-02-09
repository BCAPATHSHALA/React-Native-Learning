import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function TabsHome() {
  return (
    <View className="flex-1 bg-white px-6 py-8">
      <Text className="text-2xl font-semibold text-neutral-900">Tabs Home</Text>
      <Text className="mt-2 text-sm text-neutral-600">
        This is the default screen for the tabs group.
      </Text>

      <View className="mt-6 gap-3">
        <Link href="/(tabs)/feed" asChild>
          <Pressable className="rounded-lg bg-black px-4 py-3">
            <Text className="text-center text-neutral-900">Go to Feed</Text>
          </Pressable>
        </Link>
        <Link href="/(tabs)/profile" asChild>
          <Pressable className="rounded-lg border border-neutral-300 bg-white px-4 py-3">
            <Text className="text-center text-neutral-900">Go to Profile</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
