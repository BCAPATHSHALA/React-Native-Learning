import { Link, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Not Found" }} />
      <View className="flex-1 items-center justify-center bg-white px-6">
        <Text className="text-xl font-semibold text-neutral-900">
          This screen doesn't exist.
        </Text>
        <Text className="mt-2 text-center text-sm text-neutral-600">
          The route you tried isn't part of the app.
        </Text>
        <Link href="/" asChild>
          <Pressable className="mt-4 rounded-lg bg-black px-4 py-2">
            <Text className="text-white">Go to Home</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}
