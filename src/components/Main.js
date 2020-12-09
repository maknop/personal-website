import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/misterknop"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/MrKnop/" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/matthewaknop/" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/maknop"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="resume"
          className={`${this.props.article === 'resume' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
            <h2 className="major">Resume</h2>
            <p name="experience"> 
                <h3>Relevant Work Experience</h3>
                <b>Emerging Technology Intern</b> | Charter Communications | May 2020 - July 2020
                <ul>
                    <li>Designed a REST API and incorporated unit/integration testing.</li>
                    <li>Deployed three application components in multiple Docker containers.</li>
                    <li>Utilized Docker-compose for container orchestration.</li>
                    <li>Configured NGINX for load balancing and HTTP request routing.</li>
                    <li>Developed understanding of the software development process utilizing CI/CD tools.</li>
                    <li>Employed version control using Git for maintaining code.</li>
                </ul>
            </p>
            <break />
            <p name="skills">
                <h3>Skills</h3>
                Python, JavaScript, HTML, CSS, Java, C#, C++, React, Django, Docker Nginx, Ubuntu, DigitalOcean, PostgreSQL, SQLite
            </p>
            <p name="education">
                <h3>Education</h3>
                <b>B.S. in Software Engineering</b> | University of Northern Colorado | December 2020
                Relevant Coursework
                <ul>
                    <li>Data Structures and Algorithms</li>
                    <li>Object-Oriented Analysis, Design, & Programming</li>
                    <li>Networking & Data Communication Systems</li>
                    <li>Database Management Systems</li>
                    <li>Operating Systems</li>
                    <li>Graphical Interface Programming</li> 
                    <li>System Analysis and Design</li>   
                    <li>Structured Programming</li>
                    <li>Software Engineering I</li>
                    <li>Discrete Mathematics</li>
                </ul>    
                <b>B.S. in General Studies</b> | University of Arizona | December 2017<br />
                Relevant Coursework
                <ul>
                    <li>Data Structures and Algorithms</li>
                    <li>Object-Oriented Analysis, Design, & Programming</li>
                    <li>Networking & Data Communication Systems</li>
                    <li>Database Management Systems</li>
                    <li>Operating Systems</li>
                    <li>Graphical Interface Programming</li> 
                    <li>System Analysis and Design</li>   
                    <li>Structured Programming</li>
                    <li>Software Engineering I</li>
                    <li>Discrete Mathematics</li>
                </ul>  
            
            </p>
            <p name="projects">

            </p>
            {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <p>Adding projects soon!</p>
          {close}
        </article>
        
        <article
          id="blog"
          className={`${this.props.article === 'blog' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Blog</h2>
          <p>
            I am planning on writing blog posts. Stay tuned!
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
