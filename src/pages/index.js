import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Me from "../images/me.jpg"
import Gvim from "../images/gvim.png"
import ThisBlog from "../images/this-blog.png"
import * as style from "./index.module.less"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Architect of Intelligent Systems" />
      {/* HERO SECTION */}
      <section className={style.hero}>
        <span className={`${style.eyebrow} mono`}>001 // Systems Architect</span>
        <h1>
          Closing the loop <br />
          between Latent Space <br />
          and Production.
        </h1>
        <p className={style.manifesto}>
          Ayush Mandowara is an AI Systems Engineer based in India. I build
          distributed intelligence that scales. Currently architecting applied ML
          systems at the intersection of research and product.
        </p>
        <div style={{ display: "flex", gap: "2rem", marginBottom: "3rem", flexWrap: "wrap" }}>
          <a
            href="mailto:ayushxx7@gmail.com"
            className="mono"
            style={{
              background: "var(--surgical-orange)",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "4px",
              fontWeight: 600,
            }}
          >
            Hire Me &rarr;
          </a>
          <a
            href="https://the-vibe-coder-69.github.io/www/the-vibe-coder.html"
            className="mono"
            style={{
              borderBottom: "1px solid var(--surgical-orange)",
              paddingBottom: "4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Read the Manifest &rarr;
          </a>
        </div>
      </section>

      {/* PROJECTS SECTION (THE LAB) */}
      <section className={style.labSection}>
        <h2 className={style.sectionTitle}>Selected Artifacts // The Lab</h2>

        <div className={style.caseStudy}>
          <a href="https://the-vibe-coder-69.github.io/www" target="_blank" rel="noopener noreferrer" className={style.visual}>
            <img src={Me} alt="Portfolio" />
          </a>
          <div className={style.content}>
            <div className={style.meta}>
              <span className="mono">01 // Artifact</span>
              <span className="mono">Portfolio</span>
            </div>
            <a href="https://the-vibe-coder-69.github.io/www" target="_blank" rel="noopener noreferrer">
              <h3>The Vibe Coder World</h3>
            </a>
            <p>
              An immersive digital experience showcasing applied ML systems,
              creative engineering, and the architecture behind the vibecoder brand.
            </p>
            <div className={style.tags}>
              <span className="mono">HTML, CSS, JS</span>
              <span className="mono">GitHub Pages</span>
              <span className="mono">Good Vibes</span>
            </div>
          </div>
        </div>

        <div className={style.caseStudy}>
          <div className={style.content}>
            <div className={style.meta}>
              <span className="mono">02 // Channel</span>
              <span className="mono">Education</span>
            </div>
            <a href="https://www.youtube.com/@thevibecoder69" target="_blank" rel="noopener noreferrer">
              <h3>The Vibe Coder @ YouTube</h3>
            </a>
            <p>
              Bridging the gap between theory and code. Detailed deep-dives into
              LLM infrastructure, system architecture, and modern development workflows.
            </p>
            <div className={style.tags}>
              <span className="mono">Tutorials, Deep Dives</span>
              <span className="mono">Raw Life of Delhi</span>
              <span className="mono">GenAI</span>
            </div>
          </div>
          <a href="https://www.youtube.com/@thevibecoder69" target="_blank" rel="noopener noreferrer" className={style.visual}>
            <div style={{ background: "var(--zinc-muted)", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
               <span className="mono" style={{ fontSize: "1.5rem", color: "var(--surgical-orange)" }}>@thevibecoder69</span>
            </div>
          </a>
        </div>
      </section>

      {/* INVENTORY SECTION */}
      <section className={style.labSection}>
        <h2 className={style.sectionTitle}>Technical Inventory // The Stack</h2>
        <div className={style.inventoryGrid}>
          <div className={style.item}>
            <label className="mono">GenAI & NLP</label>
            <span>OpenAI, LangChain, RAG, Agentic AI, Transformers</span>
          </div>
          <div className={style.item}>
            <label className="mono">Infrastructure</label>
            <span>Kubernetes, AWS (SageMaker), GCP, Docker</span>
          </div>
          <div className={style.item}>
            <label className="mono">ML Systems</label>
            <span>PyTorch, FastAPI, MLOps, Prefect, Redis</span>
          </div>
          <div className={style.item}>
            <label className="mono">Terminal</label>
            <span>vi, Tmux, Python</span>
          </div>
        </div>
      </section>

      {/* CONNECT SECTION */}
      <section className={style.labSection}>
        <h2 className={style.sectionTitle}>Network // Connection</h2>
        <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
          <a
            href="mailto:ayushxx7@gmail.com"
            className="mono"
            style={{ fontSize: "1.2rem" }}
          >
            Contact
          </a>
          <a
            href="https://github.com/ayushxx7"
            className="mono"
            style={{ fontSize: "1.2rem" }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-mandowara/"
            className="mono"
            style={{ fontSize: "1.2rem" }}
          >
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@thevibecoder69"
            className="mono"
            style={{ fontSize: "1.2rem" }}
          >
            YouTube
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
