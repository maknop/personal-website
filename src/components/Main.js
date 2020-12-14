import PropTypes from 'prop-types'
import React from 'react'
import me from '../images/me.jpg'
import cat from '../images/cat.jpg'
import leo from '../images/leo.jpg'

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
            <img src={me} alt="" />
          </span>
          <p>
            <h3>About Me</h3>
            I have been an Arizona native for most of my life until moving to Colorado in 2018. 
            Aside from my passion for coding, I also enjoy hiking, gaming, and drinking an 
            unhealthy amount of coffee. I have an adorable cat named Leo who I have had since 2017. 
          </p>
          <span className="image main">
            <img src={cat} alt="" />
          </span>
          <p>
            <h3>Educational Achievements</h3>
            I received my first degree from The University of Arizona where I acquired a Bachelors 
            of Science in General Studies with an emphasis in Science, Technology, Health, and Society. 
            During this time I took a small handful of coding classes which then prompted me to want to 
            pursue a second degree in Software Engineering. During the Summer of 2020, I was fortunate 
            enough to gain real world experience as a Software Development Intern for Charter Communications. 
          </p>
          <p>
            <h3>Future Goals</h3>
            <ul>
                <li>Write weekly blog posts related to computer science topics.</li>
                <li>Pursue a Masters in Computer Science or related specialty.</li>
                <li>Teach computer science as an adjunct professor.</li>
                <li>Organize a Meetup that can be served as a resource for students starting their careers.</li>
            </ul>
          </p>
          
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
                    <li>Intro to Computer Science</li>
                    <li>Web Programming</li>
                    <li>Computational Thinking and Doing (Python)</li>
                    <li>Intro to Creative Coding (Arduino Programming)</li>
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
