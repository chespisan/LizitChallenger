import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#3478D7",
      secondary: "#5954D2",
      tertiary: "#0072CE",
      gray: "#BFBFBF",
      clearGray: "#F7F7F9",
      clearBlue: "#D5E3F7",
      dark: "#494949",
      darkBlue: "#0A2F5B",
      danger: "#D73451",
      white: "#FFFFFF",
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        borderRadiusSmall: "10px",
        borderRadiusMedium: "16px",
        borderRadiusLarge: "32px",
      },
      fontSize: {
        fontSizeSmall: "10px",
        fontSizeMedium: "14px",
        fontSizeLarge: "25px",
      },
      margin: {
        marginSmall: "8px",
        marginMedium: "16px",
        marginLarge: "24px",
      },
      padding: {
        paddingSmall: "8px",
        paddingMedium: "16px",
        paddingLarge: "24px",
      },
      spacing: {
        spacingSmall: "8px",
        spacingMedium: "16px",
        spacingLarge: "24px",
      },
    },
  },
  plugins: [],
};
export default config;
