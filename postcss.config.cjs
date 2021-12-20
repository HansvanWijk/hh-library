/* jshint esversion: 9 */

const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
	plugins: [
		postcssImport(),
		autoprefixer({
			cascade: true,
		}),
		!dev &&
			cssnano({}),
	],
};

module.exports = config;
