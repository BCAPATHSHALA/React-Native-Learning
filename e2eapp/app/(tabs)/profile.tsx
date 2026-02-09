import { Text, View } from "react-native";

const STATS = [
  { label: "Posts", value: "12" },
  { label: "Followers", value: "280" },
  { label: "Following", value: "180" },
];

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-white px-6 py-8">
      <Text className="text-2xl font-semibold text-neutral-900">Profile</Text>
      <Text className="mt-2 text-sm text-neutral-600">
        A simple profile layout using Tailwind classes.
      </Text>

      <View className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
        <Text className="text-base font-medium text-neutral-900">
          Manoj Nishad
        </Text>
        <Text className="mt-1 text-sm text-neutral-600">
          React Native Learner
        </Text>
      </View>

      <View className="mt-6 flex-row justify-between rounded-xl border border-neutral-200 bg-white p-4">
        {STATS.map((stat) => (
          <View key={stat.label} className="items-center">
            <Text className="text-lg font-semibold text-neutral-900">
              {stat.value}
            </Text>
            <Text className="text-xs text-neutral-600">{stat.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
