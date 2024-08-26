/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   theme: {
      extend: {
         fontFamily: {
            inter: ['Inter', 'sans-serif'],
            josefin: ['Josefin Sans', 'sans-serif'],
         },
         colors: {
            dark: '#101012',
            'dark-hover':"#393941",
            light: '#edeaef',
            'light-hover':"#dad4de",
            accent_yellow: '#f9cb15',
            accent_green: '#50ae51',
         },
      },
   },
   plugins: [],
};
