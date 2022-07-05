module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/siteIcon.png", // Path is relative to the root
          siteName: "Chloé BENZ", // Used in manifest.json
          shortName: "cb ·", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#F0F7F4", // Used in manifest.json
          themeColor: "#99E1D9", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/projects", // Defines the slug for the blog listing page
          usePathPrefixForArticles: true, // Default true (i.e. path will be /blog/first-article)
        },
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1200,
              backgroundColor: 'transparent',
            },
          },
        ],
      },
    },
  ],
};