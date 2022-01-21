module.exports = {
	mode: [ 'jit' ],
	content: [ './public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}' ],
	theme: {
		extend: {
			colors: {
				'bookmark-purple': '#5267Df',
				'bookmark-red': '#fa5959',
				'bookmark-blue': '#242a45',
				'bookmark-grey': '#9194a2',
				'bookmark-white': '#f7f7f7'
			}
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1124px',
				xl: '1124px'
			}
		},
		fontFamily: {
			poppins: [ 'Poppins, sans-serif' ]
		}
	},
	plugins: []
};
