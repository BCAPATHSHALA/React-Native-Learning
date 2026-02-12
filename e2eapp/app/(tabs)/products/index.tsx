import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const PRODUCTS = [
  { id: "101", name: "React Native Basics", price: "$19" },
  { id: "102", name: "Expo Router Guide", price: "$25" },
  { id: "103", name: "Tailwind for RN", price: "$15" },
];

export default function ProductsIndex() {
  return (
    <View className="flex-1 bg-white px-6 py-8">
      <Text className="text-2xl font-semibold text-neutral-900">
        Products List
      </Text>
      <Text className="mt-2 text-sm text-neutral-600">
        Tap any item to open the dynamic route.
      </Text>

      <View className="mt-6 gap-3">
        {PRODUCTS.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => router.push(`/products/${item.id}`)}
            className="rounded-xl border border-neutral-200 bg-neutral-50 p-4"
          >
            <View className="flex-row items-center justify-between">
              <Text className="text-base font-medium text-neutral-900">
                {item.name}
              </Text>
              <Text className="text-sm text-neutral-600">{item.price}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
