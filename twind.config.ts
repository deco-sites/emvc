/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        "gradient-default":
          "linear-gradient(91.72deg, #1B3F87 8.85%, #3BC9E1 110.65%)",
      },
      gridTemplateColumns: {
        "custom-grid-manifest": "428px 1fr",
        "custom-grid-slider": "400px 1fr",
      },
      colors: {
        black: {
          900: "#000000",
          800: "#1E1E1E",
        },
        gray: {
          900: "#323E48",
          800: "#989898",
          600: "#F8F8F8",
          500: "#3D3D3D",
          400: "#D9D9D9",
          100: "#F6F6F6",
        },
        blue: {
          900: "#1B3F87",
          500: "#3BC9E1",
        },
      },
      fontFamily: {
        sans: ["Albert Sans", "sans-serif"],
        serif: ["serif"],
        inter: ["Inter"],
        sora: ["Sora"],
      },
    },
  },
};
