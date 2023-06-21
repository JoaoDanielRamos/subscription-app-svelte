/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Ubuntu']
			}
		},
		colors: {
			blue100: 'hsl(206, 94%, 87%)',
			blue200: 'hsl(213, 96%, 18%)',
			purple100: 'hsl(228, 100%, 84%)',
			purple200: 'hsl(243, 100%, 62%)',
			red100: 'hsl(354, 84%, 57%)',
			gray100: 'hsl(231, 100%, 99%)',
			gray200: 'hsl(229, 24%, 87%)',
			gray300: 'hsl(231, 11%, 63%)',
			white: 'hsl(0, 0%, 100%)',
			transparent: 'transparent'
		}
	},
	plugins: []
};
