import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 md:px-0 py-20 bg-gray-800 rounded-2xl"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">
        About <span className="text-secondary">Me</span>
      </h2>
      <div className="">
        <p className="text-center mb-6 max-w-3xl mx-auto">
          Hello! I'm Robiul, a passionate web developer with a knack for
          creating dynamic and responsive web applications. With a strong
          foundation in JavaScript, React, and Node.js, I enjoy building
          user-friendly interfaces and seamless backend systems. When I'm not
          coding, you can find me exploring the latest tech trends or
          contributing to open-source projects. Let's build something amazing
          together!
        </p>

        <p className="text-center">
          Fullname: Md Robiul Islam
          <br />
          Address: Khulna, Bangladesh
          <br />
          Phone:
          <a href="tel:+8801402353404">+8801402353404</a>
          <br />
          Email:{" "}
          <a href="mailto:mdrobiulislam1479@gmail.com">
            mdrobiulislam1479@gmail.com
          </a>
        </p>
        <button className="block mx-auto">
          <a
            href=""
            className="btn bg-secondary border-secondary text-white mt-6"
          >
            Contact Me
          </a>
        </button>
      </div>
    </section>
  );
};

export default About;
