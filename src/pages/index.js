import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Link} from "gatsby"
import Me from "../images/me.jpg"
// import Nvim from "../images/nvim.png"
import Gvim from "../images/gvim.png"
import ThisBlog from "../images/this-blog.png"
import bluestacks from "../images/bluestacks.png"
import style from "./index.module.less"
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaDiscord,
  FaPatreon,
} from "react-icons/fa"

const IndexPage = () => {
  return (
    <Layout>
      <h1 style={{textAlign: "center", marginTop: "80px"}}>Portfolio</h1>
      <SEO title="Home" keywords={["ayush@machine"]} />
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
                style={{borderRadius: "50%"}}
                alt="Me"
              />
            </a>
          </div>
          <div className={style.content}>
            <span>
              My name is Ayush Mandowara, I'm a Full Stack developer. I write about
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
                    href={
                      "https://www.youtube.com/c/AyushMandowara_xx7"
                    }
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
                <li>
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href={"https://www.patreon.com/chrisatmachine"}
                  >
                    <FaPatreon color="#E8715C" size="30" />
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
              I have a pretty popular Neovim config over on Github if you're
              interested. A lot of the process to create it has been documented{" "}
              <Link to={"/neovim"}>here</Link>.
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
            <span>Is available on my github you can fork it if you want.</span>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.post}>
          <div className={style.cover}>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={
                "https://www.bluestacks.com"
              }
            >
              <img src={bluestacks} height="200px" width="200px" alt="blog" />
            </a>
          </div>
          <div className={style.content}>
            <span>
              During my time at BlueStacks, I worked with some awesome
              engineers. I optimized everything related to the Tech Support using Automation. After which, I lead the project for Chat.
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
