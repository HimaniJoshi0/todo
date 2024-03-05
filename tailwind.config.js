/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#000B10",
        white: "#ffffff",
        transparent: "transparent",
        orange: {
          60: "#F1A066",
        },
        yellow: {
          DEFAULT: "#FFA200",
          light: "#FFA20033",
          60: "#FF6F00",
          70: "#FFF8E5",
          90: "#FFBA00",
        },
        primary: {
          // blue color
          
          DEFAULT: "#193FF6",
          90: "#0089CF",
          80: "#9AEEFF",
          70: "#E9E7FD",
          60: "#5DD6EF",
          50: "#F2FBFD",
          40: "#4F6FAE",
          30: "#00AFEB",
          light: "#E1FAFF",
        },
        grey: {
          DEFAULT: "#363636",
          90: "#8B8B8B",
          80: "#C1C1C1",
          70: "#E9E9E9",
          // 60: "#F5F2FF",
          60: "#666A6E",
          50: "#707070",
          40: "#DDDDDD",
          35: "#FBFBFB",
          30: "#f0f0f0",
          25: "#AFAFAF",
          20: "#EEEEEE",
          15: "#878787",
          light: "#ECEAEA",
          10: "#FAFAFA",
        },
        green: {
          DEFAULT: "#058400",
          90: "#1CB200",
          80: "#A4FFA1",
          70: "#1ED674",
          60: "#2DAE32",
          50: "#66D184",
          40: "#6BB76D",
          20: "#d3fbd3",
          light: "#F2FBF5",
        },
        red: {
          DEFAULT: "#840000",
          90: "#B20000",
          80: "#FFA1A1",
          70: "#FDE0E0",
          60: "#DB0000",
          50: "#E7854E",
          20: "#fbe7e7",
          light: "#FBF2F2",
          basic: "#ff5d5d",
          status: "#FF0000",
        },
        opaque: "#ffffffa1",
        success: "#0ea357",
        danger: "#b94331",
      },
    },
    boxShadow: {
      custom: "0px 3px 6px #00000029",
      table: "2px 4px 6px #82828229",
      shadowmd: "0px 0px 10px 0px #FFF",
      form: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
      darkmd: "0px 0px 10px 0px rgba(0, 0, 0, 0.11)",
    },

    fontSize: {
      xxxs: "0.625rem", //10px
      x: "0.75rem", // 12px
      xxs: "0.875rem", // 14px
      xs: "1rem", //16px
      s: "1.125rem", //18px
      sm: "1.25rem", //20px
      m: "1.375rem", //22px
      l: "1.5rem", //24px
      xl: "1.625rem", //26px
      xxl: "2rem", //32px
      "3xl": "2.125rem", //34px
      "4xl": "2.25rem", //36px
      "5xl": "2.875rem", //46px
      "6xl": "3.375rem", //54px
      "7xl": "3.875rem", //62px
      "8xl": "4.625rem", //74px
      "9xl": "3.875rem", //62px
      "10xl": "5.125rem", //82px
    },
  },
  plugins: [],
};

