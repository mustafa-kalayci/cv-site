/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Global yazı tipi
      },
      colors: {
        midnight: "#744f9c",
      },
      fontSize: {
        base: "1rem",       // genellikle p tag'leri için
        lg: "1.125rem",     // biraz büyük yazı
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
}

