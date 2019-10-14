# Gatsby + Prismic + Netlify boilerplate

Boilerplate for fast development of static websites

This boilerplate uses an example Prismic [repository](https://initial.prismic.io/documents/), which can be updated for any boilerplate upgrades. 

## Getting started

1. After creating a Prismic repository, please create a singular type named `site_configiration`, you can find the basic site configuration structure JSON in `src/prismic/site-config.json`
2. If you want to continue working with repeatable pages, create a repeatable type `page` and copy JSON from `src/prismic/page-with-slices` 
3. Update the repository name in `gatsby-config` to your.

Now you have a basic website with repeatable page component, including 5 different slices to start with. If you don't have repeatable pages, feel free to delete unwanted code.

## How the project is set up

### `gatsby-config.js` 
`gatsby-source-prismic-graphql` plugin is used for parsing data from Prismic to GraphQL and creating the Preview. 
We only need to add repeatable pages there in the array `pages` so that preview is generated. 

### `linkResolver.js`
`homePageUIDs` — the array with a page that will be used as a main page. It should be one page.
`typesNeedUnpublishedPagePreview` — the pages that are repeatable should be listed here as it is needed to create a preview for pages that don't exist yet.

### `gatsby-node.js`
All the repeatable pages are generated here. Update the file with new repeatable pages.

### `fragments/PageBodySlices`
This file is should contain all the slices that you are going to use in you Page instances. If you want to use slices with the other pages, you need to create a new file, related to that page. 

When creating a page using slice, please do not forget to add `fragments` parameter to the React page component. Please refer to `templates/page` for the example. 
