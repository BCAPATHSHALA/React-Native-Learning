import { router } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

const guideItems = [
  {
    tag: "SafeAreaView",
    description:
      "Wraps your screen so content stays inside safe areas on notched devices.",
  },
  {
    tag: "ScrollView",
    description:
      "Makes the page scroll when content is taller than the device screen.",
  },
  {
    tag: "View",
    description:
      "The basic container in React Native. Use it like a div to group UI.",
  },
  {
    tag: "Image",
    description:
      "Displays local or remote images with width, height, and resize mode.",
  },
  {
    tag: "StatusBar",
    description:
      "Controls the top system status bar style so it matches your screen theme.",
  },
  {
    tag: "Pressable",
    description:
      "Creates touchable buttons and supports press states for feedback.",
  },
];

export default function LandingPage() {
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Content */}
      <View className="px-6 pb-4 pt-4">
        {/* Section 1 */}
        <View className="mt-6 flex-1 justify-center items-center">
          <Text className="text-2xl font-semibold text-neutral-900">
            Welcome to E2E App
          </Text>
          <Text className="mt-2 text-center text-sm text-neutral-600">
            This is the root route. Use the buttons below to explore the app.
          </Text>
        </View>

        {/* Section 2 */}
        <View className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <Text className="text-xs uppercase tracking-widest text-cyan-300">
            React Native Practice
          </Text>
          <Text className="mt-3 text-3xl font-bold text-white">
            Build your first landing page
          </Text>
          <Text className="mt-3 text-sm leading-6 text-slate-300">
            This component is made with core React Native tags so you can learn
            screen layout, scrolling, images, status bar styling, and tappable
            actions.
          </Text>

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
            }}
            className="mt-4 h-44 w-full rounded-2xl"
          />

          <View className="mt-5 gap-3">
            <Pressable
              onPress={() => router.push("/(tabs)")}
              style={({ pressed }) => [{ opacity: pressed ? 0.88 : 1 }]}
              className="rounded-2xl bg-cyan-400 px-4 py-4"
            >
              <Text className="text-center text-sm font-semibold text-slate-950">
                Explore Tabs
              </Text>
            </Pressable>

            <Pressable
              onPress={() => router.push("/about")}
              style={({ pressed }) => [{ opacity: pressed ? 0.88 : 1 }]}
              className="rounded-2xl border border-slate-700 bg-slate-800 px-4 py-4"
            >
              <Text className="text-center text-sm font-semibold text-white">
                Open About Page
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Section 3 */}
        <View className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <Text className="text-lg font-semibold text-white">
            Tag Guide (Beginner Friendly)
          </Text>
          <Text className="mt-2 text-sm text-slate-300">
            Read this while checking the component code in
            `components/LandingPage.tsx`.
          </Text>

          <View className="mt-4 gap-3">
            {guideItems.map((item) => (
              <View
                key={item.tag}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-4"
              >
                <Text className="text-sm font-semibold text-cyan-300">
                  {`<${item.tag}>`}
                </Text>
                <Text className="mt-1 text-sm leading-6 text-slate-300">
                  {item.description}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Section 4 */}
        <View className="mt-8 w-full gap-4">
          <Pressable
            onPress={() => router.push("/(tabs)")}
            style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1 }]}
            className="rounded-2xl bg-black px-5 py-4"
          >
            <Text className="text-center text-sm font-semibold text-black">
              Open Tabs
            </Text>
            <Text className="mt-1 text-center text-xs text-neutral-500">
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

          <Pressable
            onPress={() => router.push("/signin")}
            style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1 }]}
            className="rounded-2xl bg-cyan-400 px-5 py-4"
          >
            <Text className="text-center text-sm font-semibold text-slate-950">
              Sign In
            </Text>
            <Text className="mt-1 text-center text-xs text-slate-800">
              Login to your account
            </Text>
          </Pressable>

          <Pressable
            onPress={() => router.push("/signup")}
            style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1 }]}
            className="rounded-2xl border border-slate-700 bg-slate-800 px-5 py-4"
          >
            <Text className="text-center text-sm font-semibold text-white">
              Sign Up
            </Text>
            <Text className="mt-1 text-center text-xs text-slate-300">
              Create a new account
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
