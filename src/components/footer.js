import React from "react"
import {Link} from "gatsby"

const Footer = () => {
  return (
    <footer style={{
      borderTop: "1px solid var(--zinc-muted)",
      padding: "3rem 2rem",
      marginTop: "4rem",
      textAlign: "center",
      color: "var(--zinc-secondary)"
    }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <Link to="/" className="mono" style={{ marginRight: "2rem", opacity: 0.7 }}>Home</Link>
        <Link to="/blog" className="mono" style={{ marginRight: "2rem", opacity: 0.7 }}>Blog</Link>
        <Link to="/tags" className="mono" style={{ opacity: 0.7 }}>Topics</Link>
      </div>
      <p style={{ fontSize: "0.8rem" }}>
        &copy; {new Date().getFullYear()} Ayush Mandowara. Built with Gatsby.
      </p>
    </footer>
  )
}

export default Footer
