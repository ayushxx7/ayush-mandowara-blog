import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as style from "./post.module.less"
import { slugify } from "../../utils/Utilities"

const Post = ({ title, author, date, body, slug, tags, gatsbyImageData }) => {
  return (
    <div className={style.card}>
      <div key={title} className={style.post}>
        <div className={style.cover}>
          <Link to={slug} key={slug}>
            {gatsbyImageData && (
              <GatsbyImage image={gatsbyImageData} alt={title} title={body} />
            )}
          </Link>
        </div>
        <Link to={slug} key={slug}>
          <div className={style.content}>
            <h2>{title}</h2>
            <label>by: {author}, </label>
            {date ? <label>{date}</label> : null}
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
        </Link>
      </div>
    </div>
  )
}
export default Post
