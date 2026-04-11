import React, { useState } from "react"
import Post from "../components/post"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import * as customStyle from "../components/post.module.less"
import "./custom.css"

const PostList = ({ data }) => {
  const allPosts = data.allMarkdownRemark.edges
  const [posts, setPosts] = useState(allPosts)

  const handleInputChange = event => {
    const query = event.target.value
    const filteredPosts = allPosts.filter(post => {
      const { description, title, tags } = post.node.frontmatter
      return (
        (description && description.toLowerCase().includes(query.toLowerCase())) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join(" ").toLowerCase().includes(query.toLowerCase()))
      )
    })
    setPosts(filteredPosts)
  }

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="searchContainer">
        <input
          className="searchInput"
          type="text"
          aria-label="Search"
          placeholder="Type to filter..."
          onChange={handleInputChange}
        />
        <div className="counter">
          {posts.length}/{allPosts.length}
        </div>
      </div>
      <h1 />

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
    </Layout>
  )
}

export default PostList

export const PostListQuery = graphql`
  query PostListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
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
            description
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
