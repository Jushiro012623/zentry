/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          zentry: ['zentry', 'sans-serif'],
          general: ['general', 'sans-serif'],
          'circular-web': ['circular-web', 'sans-serif'],
          'robert-medium': ['robert-medium', 'sans-serif'],
          'robert-regular': ['robert-regular', 'sans-serif'],
        },
        colors:{
            blue:{
                50: '#dfdff0',
                100: '#dfdff2',
                200: '#f0f2fa',
                300: '#4fb7dd',
            },
            violet: {
                300: '#5724ff'
            },
            yellow: {
                100: '#8e983f',
                300: '#edff66',
            }
        }
      },
    },
    plugins: [],
  }