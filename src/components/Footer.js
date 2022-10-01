import React from "react";

const Footer = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ flexDirection: "column", textAlign: "center", padding: "30px" }}
      id="contact"
    >
      <div className="col-sm-12 col-md-6 col-lg-4">
        <h4 style={{ margin: "2rem auto", color: "#fff", fontSize: "1.6rem" }}>
          Living,learning and leveling up one day at a time.
        </h4>
      </div>
      <div className="social-media-btn" style={{ marginBottom: "2rem" }}>
        <a
          href="https://www.linkedin.com/in/anushri-rawat-a45195205/"
          className="social-btn btn"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="mailto:rawatanushri2002@gmail.com" className="social-btn btn">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="https://github.com/Anushri-Rawat" className="social-btn btn">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.frontendmentor.io/profile/Anushri-Rawat"
          className="social-btn btn"
        >
          <i className="fa-brands fa-slack"></i>
        </a>
      </div>
      <p style={{ color: "#fff" }}>Created by me &copy; Anushri Rawat</p>
    </div>
  );
};

export default Footer;
