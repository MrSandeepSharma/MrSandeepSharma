import { PrimaryBtn, SecondaryBtn } from "../../components/Buttons"
import { allProjects } from "../../data";

import "./homepage.css"

import { FaArrowRightLong } from "react-icons/fa6";

function Homepage() {
  return (
    <main id="main">
        <section className="hero">
          <p className="hero__greet">Hello there 👋</p>
          <h1 className="hero__title">I’m Sandeep Sharma</h1>
          <p className="hero__desc">
            I love creating Cool, Fun and Interactive things using code and 
            I also like to talk about them.
          </p>
          <PrimaryBtn className="outline-white" path="/#projects" onClick={() => window.location.replace("#projects")} text="View Projects" icon={<FaArrowRightLong />} />
        </section>
        <section id="projects" className="projects">
          <h2 className="projects__title">Projects .</h2>
          <div className="project__container">
            {
              allProjects.map(project => (
                <div className="project__inner" key={project.title}>
                  <h3 className="project__title">{project.title}</h3>
                  <p className="project__desc">{project.desc}</p>
                  <div className="tags__container flex-container">
                    {
                      project.tech.map(item => (
                        <div className="tag" key={item}>{item}</div>
                      ))
                    }
                  </div>
                  <div className="flex-container btn__container">
                    <PrimaryBtn target="_blank" path={project.url} text="Live Preview" />
                    <SecondaryBtn target="_blank" path={project.code} text="View Code" />
                  </div>
                </div>
              ))
            }
          </div>
        </section>
    </main>
  )
}

export default Homepage
