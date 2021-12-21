const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssCustomProperties = require('postcss-custom-properties');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
	plugins: [
		autoprefixer(),
		postcssCustomProperties({preserve: true}),
		!dev &&
			cssnano({
				preset: 'default'
			})
	]
};

module.exports = config;
