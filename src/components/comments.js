import React, { Component } from "react"
export default class Comments extends Component {
  constructor(props) {
    super(props)
    this.commentBox = React.createRef() // Creates a reference to inject the <script> element
  }
  componentDidMount() {
    let scriptEl = document.createElement("script")
    scriptEl.setAttribute("src", "https://utteranc.es/client.js")
    scriptEl.setAttribute("crossorigin", "anonymous")
    scriptEl.setAttribute("async", true)
    scriptEl.setAttribute("repo", "ayushxx7/ayush-mandowara-blog")
    scriptEl.setAttribute("issue-term", "pathname")
    scriptEl.setAttribute("theme", "dark-blue")
    this.commentBox.current.appendChild(scriptEl)
  }

  render() {
    return (
      <div className="comment-box-wrapper container pt-7">
        {/* <h1 className="mb-0">Comments</h1> */}
        {/* <hr className="my-0" /> */}
        <div ref={this.commentBox} className="comment-box" />
        {/* Above element is where the comments are injected */}
      </div>
    )
  }
}
