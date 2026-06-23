/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './public/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    brown: '#5A3E1B',
                    'purple-light': '#8B5CF6',
                    'purple-dark': '#3B5E3A',
                },
            },
        },
    },
    plugins: [],
}