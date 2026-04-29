/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        background: "#0B0F19",
        surface: "#111827",
        primary: "#3B82F6",
        primaryHover: "#2563EB",
        textPrimary: "#F9FAFB",
        textSecondary: "#9CA3AF",
        border: "#1F2933",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
