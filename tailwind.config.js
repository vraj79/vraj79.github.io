/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        spin:"spin 2s linear infinite",
        ping:"ping 1s linear",
       },
      keyframes: {
        
      },
    },
    fontFamily: {
      signature: ["Great Vibes"]
    }
  },
  plugins: []
};
