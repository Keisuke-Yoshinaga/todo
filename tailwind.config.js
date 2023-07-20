/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      height: {
        screen: ['100vh', '100dvh'],
      },
      minHeight: {
        screen: ['100vh', '100dvh'],
      },
      maxHeight: {
        screen: ['100vh', '100dvh'],
      },
    },
  },
};
