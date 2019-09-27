require('dotenv').config()
const apiKey = require('./api-key');

console.log({apiKey})
module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: '/src/graphics'
        }
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: apiKey.key || process.env.DATO_API_TOKEN,
      },
    },
  ],
}
