import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // для Next.js 13+ (App Router)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
