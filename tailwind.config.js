/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        gray900: "#0F0F0F",
        gray700: "#2F2F2F",
        gray600: "#515151",
        gray500: "#838383",
        gray400: "#D9D9D9",
        gray300: "#E8E8E8",
        gray100: "#F7F7F7"
      },
      fontFamily: {
        dreamAvenue: "Dream Avenue",
        poppins: "Poppins"
      },
      fontSize: {
        paragraph: "16px",
        h6: "20px",
        h5: "25px",
        h4: "31px",
        h3: "39px",
        h2: "49px",
        h1: "61px"
      }
    },
  },
  plugins: [],
}

