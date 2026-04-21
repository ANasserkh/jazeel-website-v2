import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    fontFamily: { sans: ["Tajawal", "sans-serif"] },
    extend: {
      colors: {
        navy: { DEFAULT: "#07133F", light: "#0d1f5c", dark: "#050e2d" },
        jgreen: {
          DEFAULT: "#19B58B",
          light: "#1fcca0",
          dark: "#149572",
          50: "#EAF8F3",
          100: "#DDF5EE",
        },
        indigo: {
          DEFAULT: "#7D53F3",
          light: "rgba(125, 83, 243, 0.08)",
          accent: "#9574F7",
        },
        neutral: {
          text: "#5B6470",
          light: "#8B929B",
          border: "#E5E8EB",
          bg: "#F8F9FA",
        },
      },
      fontSize: {
        display: ["2.75rem", { lineHeight: "1.25", fontWeight: "800" }],
        "display-sm": ["2.25rem", { lineHeight: "1.3", fontWeight: "800" }],
        heading: ["1.75rem", { lineHeight: "1.35", fontWeight: "800" }],
        "heading-sm": ["1.375rem", { lineHeight: "1.4", fontWeight: "700" }],
        "body-lg": ["1.0625rem", { lineHeight: "1.75", fontWeight: "400" }],
        body: ["0.9375rem", { lineHeight: "1.75", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.7", fontWeight: "400" }],
        caption: ["0.8125rem", { lineHeight: "1.5", fontWeight: "500" }],
        micro: ["0.75rem", { lineHeight: "1.5", fontWeight: "500" }],
      },
      borderRadius: {
        sys: "12px",
        "sys-lg": "16px",
        "sys-xl": "20px",
      },
      boxShadow: {
        sys: "0 1px 3px rgba(7,19,63,0.04), 0 4px 12px rgba(7,19,63,0.03)",
        "sys-md": "0 2px 8px rgba(7,19,63,0.05), 0 8px 24px rgba(7,19,63,0.04)",
        "sys-lg":
          "0 4px 12px rgba(7,19,63,0.06), 0 16px 40px rgba(7,19,63,0.05)",
      },
    },
  },
  plugins: [],
} satisfies Config
