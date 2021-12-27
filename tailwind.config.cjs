const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Baloo Da 2"', 'sans-serif']
			}
		}
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	]
};

module.exports = config;
