import { Stack } from "expo-router";

export default function ProductsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Products Index: /products */}
      <Stack.Screen name="index" options={{ title: "Products" }} />
      {/* Product Details: /products/[productId] */}
      <Stack.Screen name="[productId]" options={{ title: "Product Details" }} />
    </Stack>
  );
}
