# E2E App (Expo Router + Tailwind/NativeWind)

Yeh project learning purpose ke liye hai. Isme basic routes + tabs + Tailwind (NativeWind) ka use dikhaya gaya hai.

## Project Structure (Routes)

- `app/_layout.tsx`
  - Root layout (Stack). Ye sabse pehle render hota hai.
  - Yahin se `(tabs)` aur `+not-found` register kiya hai.
- `app/index.tsx`
  - Root home screen (`/`).
  - Simple buttons diye hain: Tabs open aur About page.
- `app/about.tsx`
  - Static route (`/about`).
- `app/+not-found.tsx`
  - Invalid route par ye screen show hoti hai.
- `app/(tabs)/_layout.tsx`
  - Tabs layout (Tab navigator).
  - Tabs: `index`, `feed`, `profile`.
- `app/(tabs)/index.tsx`
  - Default tab (`/` jab tabs open ho).
- `app/(tabs)/feed.tsx`
  - Simple list example.
- `app/(tabs)/profile.tsx`
  - Simple profile + stats layout.

## Tailwind / NativeWind Use

Is project me `className` ka use karke styles likhe gaye hain.
Example:

```tsx
<View className="flex-1 bg-white px-6 py-8">
  <Text className="text-2xl font-semibold text-neutral-900">Title</Text>
</View>
```

## Navigation (Expo Router)

Link use karne ka example:

```tsx
<Link href="/about" asChild>
  <Pressable className="rounded-lg bg-black px-4 py-3">
    <Text className="text-white">About Page</Text>
  </Pressable>
</Link>
```

## Components Used (Why)

- `Stack` (from `expo-router`)
  - Root navigation ke liye. Har screen ko stack me register karte hain.
- `Tabs` (from `expo-router`)
  - Bottom tab navigation ke liye.
- `Link` (from `expo-router`)
  - Routes ke beech navigation ke liye. `href` se screen change hoti hai.
- `View` (from `react-native`)
  - Layout container. Isme flex, padding, alignment apply hota hai.
- `Text` (from `react-native`)
  - Heading/paragraph ke liye.
- `Pressable` (from `react-native`)
  - Button jaisa clickable area banane ke liye.

## Quick Summary

- Root stack: `app/_layout.tsx`
- Tabs group: `app/(tabs)/_layout.tsx`
- Tailwind classes: `className="..."` (NativeWind)
- Static route: `app/about.tsx`
- Not found route: `app/+not-found.tsx`

## Next Practice Ideas

1. Ek dynamic route add karo: `app/users/[userId].tsx`
2. Tabs me icons add karo.
3. Common button component banao (reusable).
