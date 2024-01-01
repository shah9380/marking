import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				neon: ['Tilt Neon', 'sans-serif'],
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ['dark'],
	},
}
