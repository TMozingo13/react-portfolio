/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        blue: "#00B3A6",
        pink: "#FF66D8",
        green: "#C2E812",
        yellow: "#FCE187",
        grey: "#ededed",
        black: "#000000",
        purple: "#B39DDB",
        eggshell: "#fcf6ef",
        "dark-grey": "#343434",
        "opaque-black": "#000000",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #C5AAF9 7.21%, #a57aed 45.05%, #9747FF 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #00B3A6 14.53%,#00B3A6  69.36%,#00B3A6  117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
