import React, { Component } from "react"
export default class Comments extends Component {
  constructor(props) {
    super(props)
    this.commentBox = React.createRef()
  }
  componentDidMount() {
    let scriptEl = document.createElement("script")
    scriptEl.setAttribute("src", "https://utteranc.es/client.js")
    scriptEl.setAttribute("crossorigin", "anonymous")
    scriptEl.setAttribute("async", true)
    scriptEl.setAttribute("repo", "ayushxx7/ayush-mandowara-blog")
    scriptEl.setAttribute("issue-term", "og:title")
    scriptEl.setAttribute("theme", "photon-dark")
    scriptEl.setAttribute("label", "comment")
    this.commentBox.current.appendChild(scriptEl)
  }

  render() {
    return (
      <div className="comment-box-wrapper container pt-7">
        <div ref={this.commentBox} className="comment-box" />
      </div>
    )
  }
}
