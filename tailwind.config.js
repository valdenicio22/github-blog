/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'base-input': '#040F1A',
        'base-background': '#071422',
        'base-profile': '#0B1B2B',
        'base-post': '#112131',
        'base-border': '#1C2F41',
        'base-label': '#3A536B',
        'base-span': '#7B96B2',

        'base-text': '#AFC2D4',
        'base-subtitle': '#C4D4E3',
        'base-title': '#E7EDF4',
        'brand-blue': '#3294F8',
      },
      fontSize: {
        'title-lg': '1.5rem',
        'title-md': '1.25rem',
        'title-sm': '1.125rem',
        'text-md': '1rem',
        'text-sm': '0.875rem',
        'components-link': '0.75rem',
      },
      fontFamily: {
        regular: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
