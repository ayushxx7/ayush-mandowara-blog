import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as style from "./post.module.less"
import { slugify } from "../../utils/Utilities"

const Post = ({ title, author, date, body, slug, tags, gatsbyImageData }) => {
  return (
    <div className={style.card}>
      <div key={title} className={style.post}>
        {gatsbyImageData && (
          <div className={style.cover}>
            <Link to={slug} key={slug}>
              <GatsbyImage image={gatsbyImageData} alt={title} title={body} />
            </Link>
          </div>
        )}
        <div className={style.content}>
          <span className={`${style.date} mono`}>{date}</span>
          <Link to={slug} key={slug}>
            <h2>{title}</h2>
          </Link>
          <p>{body}</p>
          <ul className={style.postTags}>
            {tags.map(tag => (
              <li key={tag}>
                <Link to={`/${slugify(tag)}`}>
                  <div className={style.badge}>{tag}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Post
