module.exports = {
	siteMetadata: {
    title: `Notes and Work-in-Progress`,
    author: `Ashwin Parameswaran`
  },
  plugins: [
  	{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-double-brackets-link`],
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}