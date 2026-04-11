import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import * as style from "./layout.module.less"
import Header from "./header"
import Footer from "./footer"
import "../style/theme.css"

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <a href="#content" className="skip-link">Skip to content</a>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={style.container} id="content">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
