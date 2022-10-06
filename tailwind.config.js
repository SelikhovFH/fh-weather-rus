/** @type {import('tailwindcss').Config} */
/*eslint-disable */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('/src/components/img/login-background.svg')",
        "grade-gradient": "linear-gradient(90deg, #68D548 0%, #91D83E 12.5%, #C4D316 21.88%, #E8D807 32.81%, #F9C301 44.27%, #F6A90B 52.6%, #FB7F29 61.46%, #F9692F 72.92%, #F54550 80.73%, #D34BB7 88.02%, #D255CD 97.4%, #B860DA 97.41%)",
      },
      colors: {
        "dark-gray": "#262626",
        "medium-blue": "#6596B9",
        "dark-blue": "#4F7590",
        "light-blue": "#9FBED4",
        "blured-grey": "rgba(236, 236, 236, 0.1)"
      },
      borderRadius: {
        "primary": "30px",
      },
      fontFamily: {
        "Mulish": ["Mulish", "sans-serif"],
        "Open-Sans": ["Open Sans", "sans-serif"],
        "Montserrat": ["Montserrat", "sans-serif"],
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
