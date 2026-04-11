import React, { useState } from "react"
import { Link } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"
import * as style from "./header.module.less"

const Header = () => {
  const [isMenuCollapsed, setMenuCollapsed] = useState(true)

  function toggleMenu() {
    setMenuCollapsed(!isMenuCollapsed)
  }

  return (
    <div className={style.labHeader}>
      <div className={style.headerMain}>
        <Link to="/" className={style.labTitle}>
          <span className="mono" style={{ color: "var(--zinc-secondary)" }}>
            Ayush@
          </span>
          <span style={{ fontFamily: "var(--serif-font)", fontWeight: 400 }}>
            Machine
          </span>
        </Link>

        <nav className={style.labNav}>
          <Link to="/" activeClassName={style.activeLink}>
            /root
          </Link>
          <Link to="/blog" activeClassName={style.activeLink}>
            /latent-space
          </Link>
          <Link to="/tags" activeClassName={style.activeLink}>
            /topics
          </Link>
          <a
            href="https://ayush-mandowara.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            /resume
          </a>
        </nav>

        <div className={style.menuIcon} onClick={toggleMenu}>
          {isMenuCollapsed ? <FaBars /> : <FaTimes />}
        </div>
      </div>

      <div
        className={`${style.mobileNav} ${
          isMenuCollapsed ? style.closed : style.open
        }`}
      >
        <Link to="/" onClick={toggleMenu}>
          /root
        </Link>
        <Link to="/blog" onClick={toggleMenu}>
          /latent-space
        </Link>
        <Link to="/tags" onClick={toggleMenu}>
          /topics
        </Link>
        <a
          href="https://ayush-mandowara.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleMenu}
        >
          /resume
        </a>
      </div>
    </div>
  )
}

export default Header
