import React from "react"
import {Link} from "gatsby"
import {
  CgGitFork,
  AiFillStar,
  FaGithub,
}
  from "react-icons/fa"


const Footer = () => {
  return (
    <div>
      <h4>
        Thank the
        <Link to={'https://github.com/ayushxx7'} style={{color: "#f33"}} > author</Link>. Star or Fork <Link to={'https://github.com/ayushxx7/ayush-mandowara-blog'} style={{color: "#9cdcfe"}} > this blog. <FaGithub color="#FFFFFF" size="25" /></Link>
      </h4>
    </div >
  )
}

export default Footer
