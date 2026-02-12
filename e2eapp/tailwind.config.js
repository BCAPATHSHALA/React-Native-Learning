module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
    "./index.{js,jsx,ts,tsx}",
  ],
  theme: { extend: {} },
  plugins: [require("nativewind/tailwind")],
};
