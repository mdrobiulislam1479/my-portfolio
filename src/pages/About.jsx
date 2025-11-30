const About = () => {
  return (
    <div className="bg-linear-to-br from-base-100 via-secondary/10 to-accent/5 py-10 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10 select-none bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]" />
      <section
        id="about"
        className="max-w-7xl mx-auto px-4 md:px-0 py-20 text-accent flex flex-col lg:flex-row gap-10 items-center lg:items-stretch justify-center relative z-10"
      >
        <div className="bg-base-100 rounded-xl shadow-xl p-8 border-2 border-secondary/20 backdrop-blur-lg flex flex-col justify-center w-full lg:w-[60%]">
          <h2 className="text-4xl font-extrabold mb-6  text-center lg:text-left">
            About <span className="text-secondary">Me</span>
          </h2>
          <div className="flex flex-col items-center lg:items-start">
            <p className="mb-6 max-w-3xl text-justify text-lg leading-relaxed text-accent/90">
              Hello! I'm Robiul, a passionate web developer with a knack for
              creating dynamic and responsive web applications. With a strong
              foundation in JavaScript, React, and Node.js, I enjoy building
              user-friendly interfaces and seamless backend systems. When I'm
              not coding, you can find me exploring the latest tech trends or
              contributing to open-source projects. Let's build something
              amazing together!
            </p>

            <table className="w-full mb-6 border-separate border-spacing-y-2 text-left">
              <tbody className="text-accent/90">
                <tr>
                  <td className="pr-6 font-semibold">Fullname:</td>
                  <td>Md Robiul Islam</td>
                </tr>
                <tr>
                  <td className="pr-6 font-semibold">Address:</td>
                  <td>Khulna, Bangladesh</td>
                </tr>
                <tr>
                  <td className="pr-6 font-semibold">Phone:</td>
                  <td>
                    <a
                      href="tel:+8801402353404"
                      className="text-secondary hover:underline font-bold"
                    >
                      +8801402353404
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="pr-4 font-semibold">Email:</td>
                  <td>
                    <a
                      href="mailto:mdrobiulislam1479@gmail.com"
                      className="text-secondary hover:underline font-bold"
                    >
                      mdrobiulislam1479@gmail.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <a className="btn bg-secondary text-white mt-6 mr-4 border-secondary hover:bg-secondary/90 hover:border-secondary/90 hover:shadow-lg hover:shadow-secondary/50 transition hover:scale-105 hover:-translate-y-1 hover:duration-300">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
