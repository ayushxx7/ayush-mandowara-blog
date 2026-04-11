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
        <Link
          to="/blog"
          className="mono"
          style={{
            borderBottom: "1px solid var(--surgical-orange)",
            paddingBottom: "4px",
          }}
        >
          Read the Manifest &rarr;
        </Link>
      </section>

      {/* PROJECTS SECTION (THE LAB) */}
      <section className={style.labSection}>
        <h2 className={style.sectionTitle}>Selected Artifacts // The Lab</h2>

        <div className={style.caseStudy}>
          <div className={style.visual}>
            <img src={ThisBlog} alt="Sentient Analytics" />
          </div>
          <div className={style.content}>
            <div className={style.meta}>
              <span className="mono">01 // Case Study</span>
              <span className="mono">LLM Infrastructure</span>
            </div>
            <h3>Sentient Analytics</h3>
            <p>
              A high-throughput RAG pipeline that transforms enterprise data into
              actionable intelligence. Redefined the feedback loop between raw
              data and executive decision-making.
            </p>
            <div className={style.tags}>
              <span className="mono">Python</span>
              <span className="mono">LlamaIndex</span>
              <span className="mono">Modal</span>
            </div>
          </div>
        </div>

        <div className={style.caseStudy}>
          <div className={style.content}>
            <div className={style.meta}>
              <span className="mono">02 // Case Study</span>
              <span className="mono">Generative Media</span>
            </div>
            <h3>Neural Content Generation</h3>
            <p>
              Automated multi-modal content pipeline for digital ecosystems.
              Implemented fine-tuned control over diffusion models to maintain
              brand consistency across 1M+ monthly assets.
            </p>
            <div className={style.tags}>
              <span className="mono">PyTorch</span>
              <span className="mono">Transformers</span>
              <span className="mono">React</span>
            </div>
          </div>
          <div className={style.visual}>
            <img src={Gvim} alt="Neural Generation" />
          </div>
        </div>
      </section>

      {/* INVENTORY SECTION */}
      <section className={style.labSection}>
        <h2 className={style.sectionTitle}>Technical Inventory // The Stack</h2>
        <div className={style.inventoryGrid}>
          <div className={style.item}>
            <label className="mono">Architecture</label>
            <span>Applied ML Systems</span>
          </div>
          <div className={style.item}>
            <label className="mono">Infrastructure</label>
            <span>Modal, Ray, Kubernetes</span>
          </div>
          <div className={style.item}>
            <label className="mono">Foundations</label>
            <span>LLMs, Edge AI, RAG</span>
          </div>
          <div className={style.item}>
            <label className="mono">Terminal</label>
            <span>Neovim, Tmux, Rust</span>
          </div>
        </div>
      </section>

      {/* CONNECT SECTION */}
      <section className={style.labSection}>
        <h2 className={style.sectionTitle}>Network // Connection</h2>
        <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
          <a
            href="https://github.com/ayushxx7"
            className="mono"
            style={{ fontSize: "1.2rem" }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ayushxx7"
            className="mono"
            style={{ fontSize: "1.2rem" }}
          >
            LinkedIn
          </a>
          <a
            href="https://youtube.com"
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
