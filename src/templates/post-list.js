import React, { useState } from "react"
import Layout from "../components/layout"
import Post from "../components/post"
import Pager from "../components/pager"
import { graphql } from "gatsby"
import customStyle from "../components/post.module.less"
import "./custom.css"

const PostList = ({ data, pageContext }) => {
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value

    const filteredData = allPosts.filter(post => {
      const { description, title, tags } = post.node.frontmatter
      return (
        (description &&
          description.toLowerCase().includes(query.toLowerCase())) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join("").toLowerCase().includes(query.toLowerCase()))
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>Articles</h1>
      <div className="searchContainer">
        <div>
          <input
            className={customStyle.card + " " + "searchInput"}
            type="text"
            aria-label="Search"
            placeholder="Type to filter posts..."
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div className={customStyle.card + " " + "counter"}>
            {posts.length}/{allPosts.length}
          </div>
        </div>
      </div>
      <h1 />

      {posts.map(({ node }) => (
        <Post
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          date={node.frontmatter.date}
          body={node.excerpt}
          slug={node.fields.slug}
          tags={node.frontmatter.tags}
          fluid={node.frontmatter.image.childImageSharp.fluid}
        />
      ))}
      <Pager pageContext={pageContext} />
    </Layout>
  )
}

export const PostListQuery = graphql`
  query PostListQuery($skip: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 100)
          frontmatter {
            author
            date(formatString: "MMMM Do YYYY")
            title
            tags
            image {
              childImageSharp {
                resize(width: 100, height: 200) {
                  src
                }
                fluid(maxWidth: 286) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PostList
