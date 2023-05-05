import React from "react";
import Image from "../assests/fda29648-d8bc-411b-a590-d9748df6d1c8.jpg";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    name: "CSS",
    percent: "75%",
  },
  {
    name: "HTML",
    percent: "75%",
  },
  {
    name: "React",
    percent: "75%",
  },
  {
    name: "Javscript",
    percent: "60%",
  },
  {
    name: "Node.js",
    percent: "40%",
  },
  {
    name: "Mongodb",
    percent: "40%",
  },
  {
    name: "C++",
    percent: "60%",
  },
  {
    name: "Express",
    percent: "40%",
  },
  {
    name: "Tailwind CSS",
    percent: "40%",
  },
  {
    name: "Material UI",
    percent: "75%",
  },
];

const About = () => {
  return (
    <section className="container" id="about">
      <>
        <h1 data-aos="move-in-left">ABOUT</h1>
        <div className="underline" data-aos="move-in-left"></div>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="hex-wrap" data-aos="flip-left">
              <div className="hexagon">
                <i className="fa fa-gauge-high"></i>
              </div>
            </div>
            <div data-aos="fade-in">
              <h5>Fast</h5>
              <p>
                Fast load times and lag free interaction, my highest priority.
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="hex-wrap" data-aos="flip-left" data-aos-delay="200">
              <div className="hexagon">
                <i className="fas fa-laptop"></i>
              </div>
            </div>
            <div data-aos="fade-in" data-aos-delay="200s">
              <h5>Responsive</h5>
              <p>My designs will work on any device, big or small.</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="hex-wrap" data-aos="flip-left" data-aos-delay="400">
              <div className="hexagon">
                <i className="fa-regular fa-lightbulb"></i>
              </div>
            </div>
            <div data-aos="fade-in" data-aos-delay="400">
              <h5>Intuitive</h5>
              <p>
                Strong preference for easy to use,beautiful,intuitive UX/UI.
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="hex-wrap" data-aos="flip-left" data-aos-delay="600">
              <div className="hexagon">
                <i className="fa fa-rocket"></i>
              </div>
            </div>
            <div data-aos="fade-in" data-aos-delay="600">
              <h5>Dynamic</h5>
              <p>
                Websites don't have to be static, I love making pages come to
                life.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 align-items-center">
          <div
            className="col-sm-12 col-md-6"
            data-aos="move-in-left"
            data-aos-delay="900"
          >
            <img src={Image} alt="Self-potrait" className="self-potrait" />
            <div>
              I'm <strong>Anushri Rawat</strong> a
              <strong> full stack Developer and programmer</strong> in
              <strong> India</strong>. I have serious passion for UI effects,
              animations and creating beautiful, dynamic UIs.
              <br />
              <strong>Let's make something special.</strong>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 mt-4"
            data-aos="move-in-right"
            data-aos-delay="900"
          >
            <h4 className="text-left">Skills</h4>
            {skills.map((skill, i) => (
              <div className="bar d-flex" key={i}>
                <div className="fill" style={{ width: `${skill.percent}` }}>
                  <div
                    style={{
                      color: "#fff",
                      paddingLeft: "10px",
                      textAlign: "left",
                    }}
                  >
                    {skill.name}
                  </div>
                </div>
                <span style={{ fontSize: "14px" }}>{skill.percent}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    </section>
  );
};

export default About;
