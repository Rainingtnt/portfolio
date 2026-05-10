/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        bg: '#111009',
        card: '#1c1a13',
        'card-hover': '#232118',
        border: '#2a261c',
        rust: '#d4874a',
        amber: '#c4943a',
        'text-primary': '#f0e6cc',
        'text-secondary': '#7a6f5e',
        'text-muted': '#3e3a30',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        flicker: {
          "0%, 100%": { opacity: 1 },
          "92%": { opacity: 1 },
          "93%": { opacity: 0.7 },
          "94%": { opacity: 1 },
          "96%": { opacity: 0.85 },
          "97%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        flicker: "flicker 6s infinite",
      },
      backgroundImage: {
        'warm-glow': 'radial-gradient(ellipse 80% 40% at 50% -10%, rgba(212,135,74,0.12) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
