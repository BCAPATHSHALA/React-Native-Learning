import { Link, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function ProductDetails() {
  const { productId } = useLocalSearchParams<{ productId?: string }>();
  const id = productId ?? "unknown";

  return (
    <View className="flex-1 bg-white px-6 py-8">
      <Text className="text-2xl font-semibold text-neutral-900">
        Product Details
      </Text>
      <Text className="mt-2 text-sm text-neutral-600">
        Dynamic route example: `/products/{id}`
      </Text>

      <View className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
        <Text className="text-base font-medium text-neutral-900">
          Product ID
        </Text>
        <Text className="mt-1 text-sm text-neutral-600">{id}</Text>
      </View>

      <Link href="/products" asChild>
        <Pressable className="mt-8 rounded-lg bg-black px-4 py-3">
          <Text className="text-center text-white">Back to Products</Text>
        </Pressable>
      </Link>
    </View>
  );
}
