import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xsm: "513px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2lg": "1100px",
      xl: "1280px",
      "2xl": "1500px",
      "3xl": "1700px",
      "4xl": "1923px",
      "4xxl": "2100px",
      "4xxxl": "2300px",
      "5xl": "2500px",
      "6xl": "2700px",
      "7xl": "2900px",
      "8xl": "3100px",
    },
    extend: {
      backgroundImage: {
        inHandSmall: "url('../public/in-hand/small.svg')",
        inHandLarge: "url('../public/in-hand/new-bg.svg')",
        techBg: "url('../public/tech-bg/bg.png')",
        supportBg: "url('../public/support/supportBg.png')",
        chatBg: "url('../public/support/supportBg.png')",
        contactBg: "url('../public/contactus/bg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        YekanBakh: "YekanBakh",
        faNum: "faNum",
      },
      boxShadow: {
        phoneShadow: "3px 30px 115px 3px rgba(0,70,234,1)",
      },
      backgroundColor: {
        profileBorderbg: "rgba(72, 102, 207, 0.10)",
      },
      dropShadow: {
        "4xl": ["0 12px 10px rgba(72, 102, 207, 0.8)"],
      },
    },
  },
  plugins: [],
};
export default config;
