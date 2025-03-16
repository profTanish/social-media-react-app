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
              "light-1": "#F9FAFD",
              "light-2": "#B1B3BC",
              "primary-blue": "#6483F0",
              "danger-1": "#F55656",
              "primary-blue-30": "#6482f01a",
              "success-1": "#31DE4B",
            },
          },
        },
        plugins: [],
      };