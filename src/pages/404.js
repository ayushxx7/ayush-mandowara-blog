import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ textAlign: "center", padding: "4rem 0" }}>
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem", color: "var(--surgical-orange)" }}>404</h1>
      <h2 style={{ marginBottom: "2rem" }}>Page Not Found</h2>
      <p style={{ color: "var(--zinc-secondary)", marginBottom: "2rem" }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          padding: "1rem 2rem",
          border: "1px solid var(--surgical-orange)",
          color: "var(--surgical-orange)",
          borderRadius: "4px"
        }}
      >
        Back to Home
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
