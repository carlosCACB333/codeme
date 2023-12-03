import { nextui } from "@nextui-org/theme/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "code-foreground": "rgb(var(--code-foreground) / <alpha-value>)",
        "code-syntax1": "rgb(var(--code-syntax1) / <alpha-value>)",
        "code-syntax2": "rgb(var(--code-syntax2) / <alpha-value>)",
        "code-syntax3": "rgb(var(--code-syntax3) / <alpha-value>)",
        "code-syntax4": "rgb(var(--code-syntax4) / <alpha-value>)",
        "code-syntax5": "rgb(var(--code-syntax5) / <alpha-value>)",
        "code-syntax6": "rgb(var(--code-syntax6) / <alpha-value>)",
        "code-removed": "rgb(var(--code-removed) / <alpha-value>)",
        "code-string": "rgb(var(--code-string) / <alpha-value>)",
        "code-class": "rgb(var(--code-class) / <alpha-value>)",
        "code-punctuation": "rgb(var(--code-punctuation) / <alpha-value>)",
        "code-number": "rgb(var(--code-number) / <alpha-value>)",
        "code-added": "rgb(var(--code-added) / <alpha-value>)",
        "code-line-number": "rgb(var(--code-line-number) / <alpha-value>)",
        "code-faded-line": "rgb(var(--code-faded-line) / <alpha-value>)",
        "code-comment": "rgb(var(--code-comment) / <alpha-value>)",
        "code-keyword": "rgb(var(--code-keyword) / <alpha-value>)",
        "code-function": "rgb(var(--code-function) / <alpha-value>)",
        "code-tag": "rgb(var(--code-tag) / <alpha-value>)",
        "code-attr-name": "rgb(var(--code-attr-name) / <alpha-value>)",
        "code-language-javascript":
          "rgb(var(--code-language-javascript) / <alpha-value>)",
        "code-highlighted-word1-bg":
          "rgb(var(--code-highlighted-word1-bg) / <alpha-value>)",
        "code-highlighted-word1-bg-active":
          "rgb(var(--code-highlighted-word1-bg-active) / <alpha-value>)",
        "code-highlighted-word1-text":
          "rgb(var(--code-highlighted-word1-text) / <alpha-value>)",
        "code-highlighted-word2-bg":
          "rgb(var(--code-highlighted-word2-bg) / <alpha-value>)",
        "code-highlighted-word2-bg-active":
          "rgb(var(--code-highlighted-word2-bg-active) / <alpha-value>)",
        "code-highlighted-word2-text":
          "rgb(var(--code-highlighted-word2-text) / <alpha-value>)",
        "code-highlighted-word3-bg":
          "rgb(var(--code-highlighted-word3-bg) / <alpha-value>)",
        "code-highlighted-word3-bg-active":
          "rgb(var(--code-highlighted-word3-bg-active) / <alpha-value>)",
        "code-highlighted-word3-text":
          "rgb(var(--code-highlighted-word3-text) / <alpha-value>)",
      },

      keyframes: {
        heartbeat: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        levitate: {
          "0%": {
            transform: "translateY(0)",
          },
          "30%": {
            transform: "translateY(-10px)",
          },
          "50%": {
            transform: "translateY(4px)",
          },
          "70%": {
            transform: "translateY(-15px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        expand: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        "expand-opacity": {
          "0%": {
            opacity: 0,
            transform: "scale(1)",
          },
          "50%": {
            opacity: 1,
            transform: "scale(1.3)",
          },
          "100%": {
            opacity: 0,
            transform: "scale(1.295)",
          },
        },
        "accordion-expand": {
          "0%": {
            height: "0",
          },
          "50%": {
            height: "auto",
          },
          "100%": {
            height: "auto",
          },
        },

        "accordion-collapse": {
          "0%": {
            height: "auto",
            opacity: 1,
          },
          "50%": {
            height: "auto",
            opacity: 0.5,
          },
          "100%": {
            height: "0",
            opacity: 0,
          },
        },
      },
      animation: {
        heartbeat: "heartbeat 1s ease-in-out infinite",
        levitate: "levitate 5s ease infinite",
        expand: "expand 6s ease-out infinite both",
        "expand-opacity": "expand-opacity 6s linear infinite both",
        "accordion-expand": "accordion-expand 0.5s ease-in-out both",
        "accordion-collapse": "accordion-collapse 0.5s ease-in-out both",
      },
      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
      },
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            content2: {
              DEFAULT: "#111014",
            },
          },
        },
        dark: {
          colors: {
            default: {
              DEFAULT: "#111014",
            },
            content1: {
              DEFAULT: "#111014",
            },
            content2: {
              DEFAULT: "#111014",
            },
          },
        },
      },
    }),
  ],
};
