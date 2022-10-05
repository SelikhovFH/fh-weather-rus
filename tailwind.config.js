/** @type {import('tailwindcss').Config} */
/*eslint-disable */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('/src/components/img/login-background.svg')",
      },
      colors: {
        "dark-gray": "#262626",
        "medium-blue": "#6596B9",
        "dark-blue": "#4F7590",
        "light-blue": "#9FBED4",
        "blured-grey": "rgba(236, 236, 236, 0.1)"
      },
      borderRadius: {
        primary: "30px",
      },
      fontFamily: {
        Mulish: ["Mulish", "sans-serif"],
        "Open-Sans": ["Open Sans", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      dropShadow: {
        "button": "2px 3px 9px rgba(101, 150, 185, 0.7)",
      },
      boxShadow: {
        'card-shadow': '0px 26.5818px 28.9983px -12.8882px rgba(0, 0, 0, 0.12)'
      }
    },
  },
  plugins: [],
};
/*eslint-enable */
