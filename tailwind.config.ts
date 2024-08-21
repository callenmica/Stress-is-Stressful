import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    cursor: {
      
    },
    extend: {
      
      dropShadow: {
        '3xl': [
          '5px 0px 0px rgba(32, 60, 87, 1)',
          '-5px 0px 0px rgba(32, 60, 87, 1)',
          '0px -5px 0px rgba(32, 60, 87, 1)',
          '0px 5px 0px rgba(32, 60, 87, 1)'
        ]
      },

      colors: {
        oren: {
          600: "AA5D36",
          4: '#D08159',
          3: '#FFAA5E',
          2: '#FFD4A3',
          1: '#FFECD6'
        },
        'dark-blue': '#0D2B45',
        'light-blue': '#213C56'
      },      

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        
      },
    },
  },
  plugins: [],
};
export default config;
