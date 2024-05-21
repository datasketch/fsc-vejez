import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'proxima-nova': ['var(--font-proxima-nova-a)', 'san-serif']
      },
      colors: {
        'eerie-black': '#1A1A1A',
        'atomic-tangerine': '#FAAA8D',
        'russian-violet': '#4B034F',
        'amaranth-purple': '#B6174B',
        'moonstone': '#41A5B4',
        'dark-slate-gray': '#1D5556',
        'asparagus': '#698F3F'
      },
      backgroundImage: {
        'banner-one-home': "url('/images/elementos-graficos.svg')"
      }
    },
  },
  plugins: [],
};
export default config;
