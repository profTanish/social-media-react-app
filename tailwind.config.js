/** @type {import('tailwindcss').Config} */
 /* eslint-disable-next-line */
 export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: "Inter, sans-serif",
          },
          extend: {
            colors: {
              "dark-1": "#151519",
              "dark-2": "#1E1E23",
              "dark-opacity-10": "#0000001a",
              "dark-3": "#2f2f37",
              "light-1": "#F9FAFD",
              "light-2": "#B1B3BC",
              "light-opacity-10": "#ffffff1a",
              "primary-blue": "#6483F0",
              "primary-blue-light": "#5274ef",
              "danger-1": "#F55656",
              "primary-blue-50": "#6482f080",
              "primary-blue-30": "#6482f01a",
              "danger-2": "#F22626",
              "success-1": "#31DE4B",
            },
          },
        },
        plugins: [],
      };