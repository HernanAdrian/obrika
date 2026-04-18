/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#031839',
          container: '#1b2d4f',
          fixed: '#d8e2ff',
          'fixed-dim': '#b5c6f1',
        },
        secondary: {
          DEFAULT: '#5e5e5b',
          container: '#e1dfdb',
        },
        accent: '#E8882A',
        surface: {
          DEFAULT: '#fcf9f8',
          bright: '#fcf9f8',
          dim: '#dcd9d9',
          'container-lowest': '#ffffff',
          'container-low': '#f6f3f2',
          container: '#f0eded',
          'container-high': '#eae7e7',
          'container-highest': '#e5e2e1',
          tint: '#4d5e83',
          variant: '#e5e2e1',
        },
        on: {
          primary: '#ffffff',
          'primary-container': '#8495bd',
          'primary-fixed': '#061b3c',
          surface: '#1c1b1b',
          'surface-variant': '#44474e',
          background: '#1c1b1b',
        },
        outline: {
          DEFAULT: '#75777f',
          variant: '#c5c6cf',
        },
        error: {
          DEFAULT: '#ba1a1a',
          container: '#ffdad6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'headline-lg': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
        'body-lg': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'label-sm': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
        'label-md': ['0.875rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      borderRadius: {
        card: '0.75rem',
        btn: '0.375rem',
      },
      boxShadow: {
        ambient: '0px 20px 40px rgba(28, 27, 27, 0.06)',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
}
