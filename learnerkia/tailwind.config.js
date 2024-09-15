/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        amsterdam: ["New Amsterdam", "serif"],
        circularStd: ["Circular Std", "serif"],
      },

      colors: {
        "lrnrkia-verydark-gray": "rgba(36, 38, 49, 1)",
        "lrnrkia-dark-gray": "rgba(81, 82, 90, 1)",
        "lrnrkia-medium-gray": "rgba(126, 127, 133, 1)",
        "lrnrkia-light-gray": "rgba(206, 207, 209, 1)",

        "lrnrkia-verydark-teal": "rgba(34, 61, 93, 1)",
        "lrnrkia-dark-teal": "rgba(0, 162, 232, 1)",
        "lrnrkia-medium-teal": "rgba(36, 211, 229, 1)",
        "lrnrkia-light-teal": "rgba(178, 248, 255, 1)",
        "lrnrkia-verylight-teal": "rgba(241, 247, 254, 1)",

        "lrnrkia-medium-orange": "rgba(253, 193, 64, 1)",
        "lrnrkia-light-orange": "rgba(250, 212, 132, 1)",

        "lrnrkia-pink": "rgba(250, 70, 131, 1)",
        "lrnrkia-purple": "rgba(134, 98, 235, 1)",

        "lrnrkia-black": "rgba(0, 0, 0, 1)",
        "lrnrkia-white": "rgba(255, 255, 255, 1)",
        "lrnrkia-pale-white": "rgba(246, 247, 251, 1)",
      },
    },
  },
  plugins: [],
};
