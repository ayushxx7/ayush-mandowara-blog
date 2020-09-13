import React from "react"
import {Link} from "gatsby"

const Footer = () => {
  return (
    <div>
      <h1>
        Thank the <Link to={'https://github.com/ayushxx7'} style={{color: "#f33"}} >author</Link>.
        Fork <Link to={'https://github.com/ayushxx7/ayush-mandowara-blog/fork'} style={{color: "#9cdcfe"}} > this blog.</Link>
      </h1>
    </div >
  )
}

export default Footer
