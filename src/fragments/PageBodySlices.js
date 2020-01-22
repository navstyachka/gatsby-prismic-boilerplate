// import { graphql } from 'gatsby'

// /*

// Do not write comments inside the fragments.
// Because at the moment the gatsby-source-prismic-graphql plugin
// cannot strip the comments out while building the preview query,
// causing Prismic to return error 500 in preview.
// */

// export const PageBodyQuote = graphql`
//   fragment PageBodyQuote on PRISMIC_PageBodyQuote {
//     type
//     primary {
//       content
//       author
//       image
//       imageSharp: imageSharp {
//         childImageSharp {
//           fluid(maxWidth: 2000) {
//             ...GatsbyImageSharpFluid_withWebp_noBase64
//           }
//         }
//       }
//     }
//   }
// `

// export const PageBodyText = graphql`
//   fragment PageBodyText on PRISMIC_PageBodyText {
//     type
//     primary {
//       title
//       content
//     }
//   }
// `

// export const PageBodyHero = graphql`
//   fragment PageBodyHero on PRISMIC_PageBodyHero_block {
//     type
//     primary {
//       kicker
//       title
//       content
//       image
//       imageSharp {
//         childImageSharp {
//           fluid(maxWidth: 2000) {
//             ...GatsbyImageSharpFluid_withWebp_noBase64
//           }
//         }
//       }
//     }
//   }
// `

// export const PageBodyFullWidthImage = graphql`
//   fragment PageBodyFullWidthImage on PRISMIC_PageBodyFullWidth_image {
//     type
//     primary {
//       image
//       imageSharp {
//         childImageSharp {
//           fluid(maxWidth: 2000) {
//             ...GatsbyImageSharpFluid_withWebp_noBase64
//           }
//         }
//       }
//     }
//   }
// `

// export const PageBodyTextPlusImage = graphql`
//   fragment PageBodyTextPlusImage on PRISMIC_PageBodyText_plus_image {
//     type
//     primary {
//       content
//       position
//       title
//       image
//       imageSharp {
//         childImageSharp {
//           fluid(maxWidth: 2000) {
//             ...GatsbyImageSharpFluid_withWebp_noBase64
//           }
//         }
//       }
//     }
//   }
// `

// export const PageBodyAllSlices = graphql`
//   fragment PageBodyAllSlices on PRISMIC_PageBody {
//     ... on PRISMIC_PageBodyQuote {
//       ...PageBodyQuote
//     }
//     ... on PRISMIC_PageBodyText {
//       ...PageBodyText
//     }
//     ... on PRISMIC_PageBodyHero_block {
//       ...PageBodyHero
//     }
//     ... on PRISMIC_PageBodyFullWidth_image {
//       ...PageBodyFullWidthImage
//     }
//     ... on PRISMIC_PageBodyText_plus_image {
//       ...PageBodyTextPlusImage
//     }
//   }
// `
