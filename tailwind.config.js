import daisyui from 'daisyui';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        screens: {
            'xs': '430px',
            ...defaultTheme.screens,
        }
    },
    plugins: [
        daisyui,
    ],
}

