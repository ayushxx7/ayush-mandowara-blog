import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import {graphql} from "gatsby"
import PostPager from "../components/post-pager"
import style from "./blog-post.module.less"
import "katex/dist/katex.min.css"
import Footer from "../components/footer"
import "../style/prism-darcula.less"
import Comments from "../components/comments"
import SEO from "../components/seo"
import Scroll from '../components/scroll'

function BlogPost(props) {
  const {title, image, tags, description} = props.data.markdownRemark.frontmatter
  const {prev, next} = props.pageContext
  return (
    <Layout>
      <Scroll showBelow={250} />
      <SEO title={title} keywords={tags} description={description} />
      <div>
        {image && (
          <Img
            style={{backgroundColor: "#1e2127"}}
            fluid={image.childImageSharp.fluid}
          />
        )}
        <h1 style={{backgroundColor: "#1e2127", textAlign: "left"}}>
          {title}
        </h1>
        <div
          dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}
          className={style.markdownBody}
        />
        <div className={style.markdownBody}>
          <Footer />
          <Comments />
        </div>
        <div className={style.markdownBody}>
          <br />
          <span>Tagged in </span>
          {tags.map((tag, i) => (
            <a href={`/${tag}`} key={i} style={{marginLeft: "10px"}}>
              {tag}
            </a>
          ))}
        </div>
        {/* <Share title={title} url={url} pathname={props.location.pathname} /> */}
        <PostPager prev={prev && prev.node} next={next && next.node} />
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        tags
        description
        image {
          childImageSharp {
            resize(width: 1000, height: 420) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
