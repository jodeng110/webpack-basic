module.exports = {
	entry: './entry2.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'eslint',
				exclude: /(node_modules)/
			}
		],
		loaders: [
			{ test: /\.scss$/, loader: 'style!css!sass' },
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /(node_modules)/,
				query: {
					presets: ['es2015']
				}	
			}
		]
	}
};
