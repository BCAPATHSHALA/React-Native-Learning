import { Text, View } from "react-native";

const FEED_ITEMS = [
  { id: "1", title: "Welcome to the feed", detail: "This is a sample item." },
  { id: "2", title: "Tailwind + NativeWind", detail: "Using className." },
  { id: "3", title: "Expo Router", detail: "Organize routes by files." },
];

export default function FeedScreen() {
  return (
    <View className="flex-1 bg-white px-6 py-8">
      <Text className="text-2xl font-semibold text-neutral-900">Feed</Text>
      <Text className="mt-2 text-sm text-neutral-600">
        A simple list to practice layout with Tailwind classes.
      </Text>

      <View className="mt-6 gap-3">
        {FEED_ITEMS.map((item) => (
          <View
            key={item.id}
            className="rounded-xl border border-neutral-200 bg-neutral-50 p-4"
          >
            <Text className="text-base font-medium text-neutral-900">
              {item.title}
            </Text>
            <Text className="mt-1 text-sm text-neutral-600">{item.detail}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
