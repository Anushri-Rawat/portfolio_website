import React from "react";
import proj3 from "../assests/Screenshot(83).png";
import proj1 from "../assests/Screenshot (171).png";
import proj6 from "../assests/Screenshot (74).png";
import proj4 from "../assests/Screenshot (88).png";
import proj2 from "../assests/Screenshot (172).png";
import proj5 from "../assests/Screenshot (173).png";
import { useInView } from "react-intersection-observer";

const Project = () => {
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0,
  // });
  return (
    <section className="container" id="project">
      <>
        <h1 data-aos="move-in-right" data-aos-delay="300">
          Projects
        </h1>
        <div
          className="underline"
          data-aos="move-in-right"
          data-aos-delay="300"
          style={{ marginBottom: "30px" }}
        ></div>
        <p className="mb-3" data-aos="move-in-right" data-aos-delay="500">
          Here are a few of my projects I've worked on. Want to see more?{" "}
          <a href="https://github.com/Anushri-Rawat">View my github account</a>.
        </p>
        <div className="projects-display">
          <div className="row">
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="slide-up"
              data-aos-delay="100"
            >
              <figure>
                <img src={proj1} alt="shopZee" />
                <figcaption>
                  <h4>ShopZee E-comm electronics Store</h4>
                  <a href="https://shopzee-mern-shopping-cart.herokuapp.com/">
                    Visit website
                  </a>
                </figcaption>
                <div className="overlay"></div>
              </figure>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="slide-up"
              data-aos-delay="200"
            >
              <figure>
                <img src={proj2} alt="shopZee" />
                <figcaption>
                  <h4>Pokedox:Welcome to the world of pokemons</h4>
                  <a href="https://gleeful-madeleine-a3949f.netlify.app/">
                    Visit website
                  </a>
                </figcaption>
                <div className="overlay"></div>
              </figure>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="slide-up"
              data-aos-delay="300"
            >
              <figure>
                <img src={proj3} alt="shopZee" />
                <figcaption>
                  <h4>Cookz Recipe Search App</h4>
                  <a href="https://anushri-rawat.github.io/Cookz-Recipe-app/#home-page">
                    Visit website
                  </a>
                </figcaption>
                <div className="overlay"></div>
              </figure>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="slide-up"
              data-aos-delay="400"
            >
              <figure>
                <img src={proj4} alt="shopZee" />
                <figcaption>
                  <h4>Weather App</h4>
                  <a href="https://weather-app-devchallenges-reactjs.netlify.app/">
                    Visit website
                  </a>
                </figcaption>
                <div className="overlay"></div>
              </figure>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="slide-up"
              data-aos-delay="500"
            >
              <figure>
                <img src={proj5} alt="shopZee" />
                <figcaption>
                  <h4>Movea App:Discover new movies</h4>
                  <a href="https://movea-app.netlify.app/">Visit website</a>
                </figcaption>
                <div className="overlay"></div>
              </figure>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              data-aos="slide-up"
              data-aos-delay="600"
            >
              <figure>
                <img src={proj6} alt="shopZee" />
                <figcaption>
                  <h4>Rest Country APi with Theme switching</h4>
                  <a href="https://anushri-rawat.github.io/Rest-country-api-with-color-theme-switcher/#home_page">
                    Visit website
                  </a>
                </figcaption>
                <div className="overlay"></div>
              </figure>
            </div>
          </div>
        </div>
        <a href="https://github.com/Anushri-Rawat" className="btn mt-3">
          See more on github
        </a>
      </>
    </section>
  );
};

export default Project;
