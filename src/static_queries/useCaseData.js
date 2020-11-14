import { graphql, useStaticQuery } from "gatsby"

const useCaseData = () => {
  const data = useStaticQuery(graphql`
    query {
      allAirtable(filter: { table: { eq: "Case" } }) {
        edges {
          node {
            fields {
              slug
            }
            id
            data {
              Title
              Description {
                childMarkdownRemark {
                  html
                }
              }
              ImagesBefore {
                localFiles {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 800, maxHeight: 600) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              ImagesAfter {
                localFiles {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 800, maxHeight: 600) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return data.allAirtable.edges
}

export default useCaseData
