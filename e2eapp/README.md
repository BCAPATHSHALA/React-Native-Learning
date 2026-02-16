# E2E React Native Learning Project

This project is my hands-on practice app built with React Native, Expo Router, and NativeWind.
It helped me understand routing, layouts, navigation flow, and commonly used UI tags/components.

## Project Structure

```text
e2eapp/                          # Project root
|- app/                          # Expo Router routes folder
|  |- _layout.tsx                # Root Stack navigator config
|  |- index.tsx                  # Root route (/) entry screen
|  |- about.tsx                  # Static About page route
|  |- +not-found.tsx             # 404 / unmatched route screen
|  |- (tabs)/                    # Tabs route group
|  |  |- _layout.tsx             # Bottom Tabs navigator config
|  |  |- index.tsx               # Tabs home screen
|  |  |- feed.tsx                # Feed tab screen
|  |  |- profile.tsx             # Profile tab screen
|  |  |- products/               # Nested products routes
|  |     |- _layout.tsx          # Products stack layout
|  |     |- index.tsx            # Products list screen
|  |     |- [productId].tsx      # Dynamic product details route
|- components/                   # Reusable UI components
|  |- LandingPage.tsx            # Landing/home UI component
|- assets/                       # Static assets (images/fonts etc.)
|- global.css                    # Global styles (NativeWind input)
|- tailwind.config.js            # Tailwind/NativeWind config
|- metro.config.js               # Metro bundler config
|- babel.config.js               # Babel config
|- package.json                  # Dependencies + scripts
```
## What I Learned

1. How Expo Router uses the `app/` folder for file-based routing.
2. How to configure a root stack with `Stack` in `app/_layout.tsx`.
3. How to build bottom tab navigation with `Tabs` in `app/(tabs)/_layout.tsx`.
4. How to navigate programmatically with `router.push()`.
5. How to create and use static routes like `/about`.
6. How to create dynamic routes like `/products/[productId]`.
7. How to read route params with `useLocalSearchParams()`.
8. How to handle not-found routes using `+not-found.tsx`.
9. How to structure screen layouts with basic React Native components.
10. How to use NativeWind `className` utilities for styling in React Native.
11. How to make interactive UI with `Pressable` and feedback styles.
12. How to use `ScrollView` for long content.
13. How to display remote images with `Image`.
14. How to manage safe areas with `SafeAreaView`.
15. How to style the top bar with `StatusBar`.
16. How to use tab icons with `@expo/vector-icons/Ionicons`.

## All Important Tags/Components Table

| Tag / Component | Package | Purpose | Where Used |
|---|---|---|---|
| `View` | `react-native` | Base layout container (like a `div`). | Most screens |
| `Text` | `react-native` | Displays text content. | Most screens |
| `Pressable` | `react-native` | Touchable element for buttons and interactions. | `components/LandingPage.tsx`, `app/about.tsx`, `app/(tabs)/index.tsx`, `app/(tabs)/products/index.tsx`, `app/(tabs)/products/[productId].tsx`, `app/+not-found.tsx` |
| `ScrollView` | `react-native` | Makes long content vertically scrollable. | `components/LandingPage.tsx` |
| `Image` | `react-native` | Displays images (local or remote). | `components/LandingPage.tsx` |
| `SafeAreaView` | `react-native-safe-area-context` | Keeps content within safe display areas (notch/status areas). | `components/LandingPage.tsx` |
| `StatusBar` | `expo-status-bar` | Controls system status bar style and appearance. | `components/LandingPage.tsx` |
| `Stack` | `expo-router` | Creates stack-based navigation and screen options. | `app/_layout.tsx`, `app/+not-found.tsx`, `app/(tabs)/products/_layout.tsx` |
| `Tabs` | `expo-router` | Creates bottom tab navigation. | `app/(tabs)/_layout.tsx` |
| `router` | `expo-router` | Programmatic navigation (e.g., `router.push`). | Multiple route screens |
| `useLocalSearchParams` | `expo-router` | Reads dynamic route parameters from URL/path. | `app/(tabs)/products/[productId].tsx` |
| `Ionicons` | `@expo/vector-icons/Ionicons` | Adds icons to tab bar and UI. | `app/(tabs)/_layout.tsx` |

## Routing Concepts Practiced

1. Root stack routes: `/`, `/about`, `/(tabs)`, `+not-found`
2. Tab routes: `/(tabs)/index`, `/(tabs)/feed`, `/(tabs)/products`, `/(tabs)/profile`
3. Nested stack inside tabs for products
4. Dynamic detail route: `/(tabs)/products/[productId]`

## Styling Concepts Practiced

1. NativeWind utility classes with `className`
2. Spacing, typography, colors, borders, rounded corners
3. Flexbox layouts (`flex-1`, `flex-row`, alignment utilities)
4. Press states using `style={({ pressed }) => ...}`

## Project Scripts

- `npm run start` or `bun run start`: Start Expo dev server
- `npm run android` or `bun run android`: Open on Android
- `npm run ios` or `bun run ios`: Open on iOS
- `npm run web` or `bun run web`: Open on Web

## Next Learning Goals

1. Add reusable components for cards/buttons.
2. Add TypeScript interfaces/types for data models.
3. Add API integration and loading/error states.
4. Add form handling and validation.
5. Add basic tests for screens and navigation flow.



## Practice Module 2 (Today)

### What I Practiced Today

1. Built authentication flow screens:
- Created `Sign In` and `Sign Up` components.
- Created route pages: `/signin` and `/signup`.
- Connected auth navigation from landing page buttons.

2. Improved auth UI design:
- Redesigned both screens with better visual hierarchy.
- Added form card layout and clearer typography.
- Kept responsive scrolling support for smaller devices.

3. Worked with keyboard behavior:
- Used `KeyboardAvoidingView` for better input visibility while typing.
- Used `ScrollView` with `flexGrow` for better small-screen layout handling.

4. Understood and practiced safe area handling:
- Learned difference between `SafeAreaProvider` (root context) and `SafeAreaView` (screen-level application).
- Investigated why screen looked blank with `SafeAreaView` in some cases.
- Practiced choosing where to apply safe-area rules.

5. Fixed Expo linking warning:
- Added `"scheme": "e2eapp"` in `app.json`.
- Understood why linking scheme is important for production builds.

6. Verified layout consistency:
- Checked headers, paddings, and screen-level structure.
- Practiced manual review of route screens without changing existing code.

### Key Learning Outcomes

1. Root-level setup and screen-level UI behavior are different concerns.
2. Auth screens need both visual design and UX behavior (keyboard + scrolling).
3. Expo warnings should be resolved early to avoid build-time issues later.
4. Consistency checks are important after UI and navigation changes.
