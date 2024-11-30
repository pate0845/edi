// tailwind.config.js

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // Include Next.js pages folder
    './components/**/*.{js,ts,jsx,tsx}',  // Include your components folder
    './app/**/*.{js,ts,jsx,tsx}',  // Include your app directory if you are using the App Router
    './public/**/*.{html,js}',  // If you have static HTML files or any custom JS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
