module.exports = {
  siteMetadata: {
    title: `Evergosu`,
    description: `Evergosu zen place`,
    author: `@evergosu`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      }
    },
    {
      resolve: 'gatsby-plugin-tslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|cache|public)/
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Evergosu zen place`,
        short_name: `evergosu`,
        start_url: `/`,
        background_color: `#194f2b`,
        theme_color: `#194f2b`,
        display: `minimal-ui`,
        icon: `src/images/slytherin.png`,
      }
    }
  ]
}
