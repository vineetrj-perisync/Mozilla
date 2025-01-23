/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    container: {
      center: true, // Automatically centers the container
      // padding: '2rem', // Adds 2rem padding on all sides
      screens: {
        sm: '650px',
        md: '781px',
        lg: '900px',
        xl: '1024px',
        '2xl': '1380px',
      },
    },
    extend: {
      screens: {
        'xl': '80px',
        'lg': { 'max': '1024px' },
        'md': { 'max': '768px' },
        'sm': { 'max': '640px' },
        'xs': { 'max': '479px' },
      },
    },
  },
  plugins: [],
}

