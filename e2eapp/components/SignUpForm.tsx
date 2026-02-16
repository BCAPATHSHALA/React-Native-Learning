import { router } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function SignUpForm() {
  return (
    <View className="flex-1 bg-slate-900 px-6 py-8">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 pb-8 pt-6">
            <View className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <View className="self-start rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1">
                <Text className="text-xs font-semibold tracking-wide text-cyan-300">
                  Let&apos;s Start
                </Text>
              </View>

              <Text className="mt-4 text-3xl font-bold text-white">
                Create Account
              </Text>
              <Text className="mt-2 text-sm leading-6 text-slate-300">
                Build your profile and start exploring the app with full access.
              </Text>
            </View>

            <View className="mt-5 rounded-3xl border border-slate-800 bg-white p-5">
              <View>
                <Text className="mb-2 text-sm font-medium text-neutral-800">
                  Full Name
                </Text>
                <TextInput
                  placeholder="Enter your name"
                  placeholderTextColor="#737373"
                  className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900"
                />
              </View>

              <View className="mt-4">
                <Text className="mb-2 text-sm font-medium text-neutral-800">
                  Email
                </Text>
                <TextInput
                  placeholder="you@example.com"
                  placeholderTextColor="#737373"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900"
                />
              </View>

              <View className="mt-4">
                <Text className="mb-2 text-sm font-medium text-neutral-800">
                  Password
                </Text>
                <TextInput
                  placeholder="Create a password"
                  placeholderTextColor="#737373"
                  secureTextEntry
                  className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900"
                />
              </View>

              <Pressable className="mt-6 rounded-xl bg-black px-4 py-3 active:opacity-90">
                <Text className="text-center font-semibold text-white">
                  Sign Up
                </Text>
              </Pressable>

              <Text className="mt-3 text-center text-xs leading-5 text-neutral-500">
                By signing up, you agree to basic app terms and privacy policy.
              </Text>

              <Pressable
                onPress={() => router.push("/signin")}
                className="mt-4 rounded-xl border border-neutral-300 bg-white px-4 py-3 active:opacity-90"
              >
                <Text className="text-center font-medium text-neutral-900">
                  Already Have an Account? Sign In
                </Text>
              </Pressable>
            </View>

            <Pressable
              onPress={() => router.push("/")}
              className="mt-5 self-center rounded-full border border-slate-700 px-4 py-2 active:opacity-70"
            >
              <Text className="text-center text-sm text-slate-300">
                Back to Home
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
