# PRACTICEDAY01

This is my first react native project in the PRACTICEDAY01. I am learning React Native with the help of the [React Native Docs](https://reactnative.dev/docs) and [React Native Directory](https://reactnative.directory/).

## Step 1: Install the CLI and create a new app

[Install the CLI](https://reactnative.dev/docs/getting-started-without-a-framework)

```sh
pnpm i @react-native-community/cli
pnpx @react-native-community/cli@latest init project01
```

## Step 2: Connect to the Real Android Device

[Connect to the Real Android Device](https://reactnative.dev/docs/running-on-device)

1. Enable Debugging over USB
2. Plug in your device via USB
3. Run `adb devices` in a terminal to see a list of connected devices

## Step 3: Build and run your app

```sh
pnpm run android
```

## Remove .git folder from the project

```sh
Remove-Item -Path .git -Recurse -Force
```

# PRACTICEDAY02

## React Native CLI Folder Structure

[CLI Folder Structure](https://medium.com/@nitishprasad/react-native-folder-structure-e9ceab3150f3)

```bash
AwesomeProject
  -src
    |--- assets
    |--- screens
    |--- navigation
    |--- routes
    |--- services
    |--- components
    |--- hooks
    |--- types
    |--- redux
    |--- utils
    |--- networking
```

## React Native - 15 Core Components

[React Native Components](https://reactnative.dev/docs/components-and-apis)
[React Native Core Components](https://dev.to/himanshuaggar/react-native-15-core-components-2ifg)

```bash
1. View
2. Text
3. TextInput
4. Button
5. Image
6. SafeAreaView
7. ScrollView
8. FlatList
9. Switch
10. Modal
11. Pressable
12. TouchableOpacity
13. ActivityIndicator
14. StatusBar
15. SectionList
```

[Safe Area](https://docs.expo.dev/versions/latest/sdk/safe-area-context/)

# PRACTICEDAY03

[Navigating Between Screens](https://reactnative.dev/docs/navigation)

## What You Need to Understand First:

- `NavigationContainer`: This is the top-level component that holds your navigation state.
- `createNativeStackNavigator`: Creates a stack of screens (like pages).
- `Stack.Navigator` & `Stack.Screen`: Defines the screens inside your stack.

## Native Stack Navigation

Native Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.

[Native Stack Navigation](https://reactnavigation.org/docs/native-stack-navigator)

## Bottom Tab Navigation

A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused.

[Button Navigation](https://reactnavigation.org/docs/bottom-tab-navigator)

## Drawer Navigation

Drawer Navigator renders a navigation drawer on the side of the screen which can be opened and closed via gestures.

[Drawer Navigation](https://reactnavigation.org/docs/drawer-navigator)