/** @type {import('tailwindcss').Config} */




module.exports = {
  purge: [],

   purge: [

     './resources/**/*.blade.php',

     './resources/**/*.{js,ts,jsx,tsx}',

     './resources/**/*.vue',

   ],
    // darkMode: false, 
    // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
}

