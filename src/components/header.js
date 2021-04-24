import React, {useState} from "react"
import {Link} from "gatsby"
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa"
import style from "./header.module.less"

const Header = () => {
  const [isMenuCollapsed, setMenuCollapsed] = useState(true)

  function toggleMenu() {
    setMenuCollapsed(!isMenuCollapsed)
  }

  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <div className={style.title}>
          <Link to={"/"}>
            <h4>
              Ayush
              <span style={{color: "red"}}>@</span>
              Machine
            </h4>
          </Link>
        </div>
        <div className={style.menuButton}>
          {isMenuCollapsed ? (
            <FaBars size="30" onClick={toggleMenu} />
          ) : (
              <FaTimes size="30" onClick={toggleMenu} />
            )}
        </div>
      </div>
      <div
        className={[
          style.list,
          isMenuCollapsed ? style.collapsedMenu : style.expandedMenu,
        ].join(" ")}
      >
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/tags"}>Topics</Link>
          </li>
        </ul>
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
              href={"https://www.youtube.com/c/AyushMandowara_xx7/videos"}
            >
              <FaYoutube color="#EB3323" size="30" />
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
  )
}

export default Header
