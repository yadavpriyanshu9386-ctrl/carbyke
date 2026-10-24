/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { ink: '#050b11', panel: '#08131c', line: '#1d3545', red: '#ff1738', muted: '#a5b4c3' },
    boxShadow: { redglow: '0 0 28px rgba(255,23,56,.2)' }
  }},
  plugins: []
}
