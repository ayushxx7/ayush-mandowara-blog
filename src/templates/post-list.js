import React, { useState } from "react"
import Layout from "../components/layout"
import Post from "../components/post"
import Pager from "../components/pager"
import { graphql } from "gatsby"
import customStyle from "../components/post.module.less"

const PostList = ({ data, pageContext }) => {
  const allPosts = data.allMarkdownRemark.edges

  //
  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })
  //
    //
  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value

    // this is how we get all of our posts
    const posts = data.allMarkdownRemark.edges || []


     // return all filtered posts
    const filteredData = posts.filter(post => {
      // destructure data from post frontmatter
      const { description, title, tags } = post.node.frontmatter
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string
        description && description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags
          .join("") // convert tags from an array to string
          .toLowerCase()
          .includes(query.toLowerCase()))
      )
    })

    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>Articles</h1>
      <input
        style={{
          width: "98%", 
          color: "cadetblue", 
          fontSize: "1em",
        }}
      className={customStyle.card}
      type="text"
      aria-label="Search"
      placeholder="Type to filter posts..."
      onChange={handleInputChange}
      />
      <h1/>

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
