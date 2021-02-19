/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config()

module.exports = {
	plugins: [
		{
			resolve: 'gatsby-plugin-snipcartv3',
			options: {
				apiKey:process.env.Secret_Snipcart_Api
			}
		}
	]
}