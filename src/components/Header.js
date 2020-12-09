import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    
    <div className="content">
      <div className="inner">
        <h1>Hello, my name is Matthew Knop</h1>
        <p>
            I'm a software engineering graduate from the University of Northern<br />
            Colorado with a passion for DevOps and backend development.<br />
            Right now I am looking for a full-time software engineering role. Please<br />
            feel free to contact me if you believe I am a good fit.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('resume')
            }}
          >
            Resume
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('blog')
            }}
          >
            Blog
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
