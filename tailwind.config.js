/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'border-pulse': 'borderPulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        borderPulse: {
          '50%': { borderColor: '#f87171' }, 
          '100%': { borderColor: '#ef4444' }
        }
    }
  }
  },
  plugins: [],
}

