module.exports = {
	siteMetadata: {
		title: 'EaserJS!',
		author: 'Albeiro Espitia'
	},
	plugins: [
		`gatsby-plugin-sass`,
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			}
		},
		'gatsby-transformer-remark'
	]
}
