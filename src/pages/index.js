import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Me from "../images/me.jpg"
import Gvim from "../images/gvim.png"
import ThisBlog from "../images/this-blog.png"
import bluestacks from "../images/bluestacks.png"
import style from "./index.module.less"
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa"

const IndexPage = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>Portfolio</h1>
      <SEO title="Home" keywords={["ayushxx7"]} />
      <div className={style.card}>
        <div className={style.post}>
          <div className={style.cover}>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={"https://www.linkedin.com/in/ayushxx7/"}
            >
              <img
                src={Me}
                height="200px"
                width="200px"
                style={{ borderRadius: "50%" }}
                alt="Me"
              />
            </a>
          </div>
          <div className={style.content}>
            <span>
              My name is Ayush Mandowara, I'm a Full Stack developer. I write
              about various topics such as Software Development, Windows,
              (neo/g)vim and Machine Learning. You can find me on the following
              social media sites.
            </span>
            <div className={style.list}>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href={"https://github.com/ayushxx7"}
                  >
                    <FaGithub color="#FFFFFF" size="30" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href={"https://www.youtube.com/c/AyushMandowara_xx7"}
                  >
                    <FaYoutube color="#EB3323" size="30" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href={"https://discord.gg/Xb9B4Ny"}
                  >
                    <FaDiscord color="#768AD4" size="30" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href={"https://www.linkedin.com/in/ayushxx7/"}
                  >
                    <FaLinkedin color="#3077B0" size="30" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.post}>
          <div className={style.cover}>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={"https://github.com/ayushxx7/dotfiles"}
            >
              <img src={Gvim} height="200px" width="200px" alt="nvim" />
            </a>
          </div>
          <div className={style.content}>
            <span>
              I have a pretty awesome (neo/g)vim config over on Github if you're
              interested. The config was built on Windows, but should work on
              any OS. A lot of the process to create it has been documented{" "}
              <Link to={"/Gvim"} style={{ color: "#9cdcfe" }}>
                here
              </Link>
              .
            </span>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.post}>
          <div className={style.cover}>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={"https://github.com/ayushxx7/ayush-mandowara-blog"}
            >
              <img src={ThisBlog} height="150px" width="225px" alt="blog" />
            </a>
          </div>
          <div className={style.content}>
            <span>
              Is available on my github. You can fork{" "}
              <Link
                to={"https://github.com/ayushxx7/ayush-mandowara-blog/fork"}
                style={{ color: "#9cdcfe" }}
              >
                {" "}
                it{" "}
              </Link>{" "}
              if you want.
            </span>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.post}>
          <div className={style.cover}>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={"https://www.bluestacks.com"}
            >
              <img src={bluestacks} height="200px" width="200px" alt="blog" />
            </a>
          </div>
          <div className={style.content}>
            <span>
              I current work @BlueStacks. The #1 Android emulator. I work with
              some awesome engineers on state-of-the-art technologies. While
              most my day is spent writing High Quality Python (&lt;3) code, I
              sometimes code in JS too. Get in touch with me on{" "}
              <Link
                to={"https://www.linkedin.com/in/ayushxx7/"}
                style={{ color: "#9cdcfe" }}
              >
                {" "}
                LinkedIn{" "}
              </Link>{" "}
              to learn more about what I do.
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
