import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Pager from "../components/pager"
import Post from "../components/post"

const Tags = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const { tag } = pageContext
  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>
        Topic: <span style={{ color: "#61afef" }}>{tag}</span>
      </h1>
      {posts.map(({ node }) => (
        <Post
          key={node.id}
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          date={node.frontmatter.date}
          body={node.excerpt}
          slug={node.fields.slug}
          tags={node.frontmatter.tags}
          gatsbyImageData={node.frontmatter.image.childImageSharp.gatsbyImageData}
        />
      ))}
      <Pager pageContext={pageContext} />
    </Layout>
  )
}

export default Tags

export const query = graphql`
  query TagQuery($tag: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
            tags
            image {
              childImageSharp {
                gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
        }
      }
    }
  }
`
