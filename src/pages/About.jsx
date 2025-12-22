import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="bg-linear-to-br from-base-100 via-secondary/10 to-accent/5 py-10 overflow-hidden"
    >
      <section className="max-w-7xl mx-auto px-4 lg:px-0 py-20 text-accent flex flex-col md:flex-row gap-10 items-center lg:items-stretch justify-center relative z-10">
        <motion.div
          className="bg-base-100 rounded-xl shadow-xl px-3 md:px-8 py-8 border-2 border-secondary/20 backdrop-blur-lg flex flex-col justify-center w-full md:w-[80%] lg:w-[60%]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl font-extrabold mb-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About <span className="text-secondary">Me</span>
          </motion.h2>

          {/* Content */}
          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.p
              className="mb-6 max-w-3xl text-justify text-lg leading-relaxed text-accent/90"
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
            >
              Hello! I'm Robiul, a passionate web developer with a knack for
              creating dynamic and responsive web applications. With a strong
              foundation in JavaScript, React, and Node.js, I enjoy building
              user-friendly interfaces and seamless backend systems. When I'm
              not coding, you can find me exploring the latest tech trends or
              contributing to open-source projects. Let's build something
              amazing together!
            </motion.p>

            <motion.table
              className="w-full mb-6 border-separate border-spacing-y-2 text-left"
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
            >
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
            </motion.table>

            <motion.a
              href="#contact"
              className="btn bg-secondary text-white mt-6 mr-4 border-secondary hover:bg-secondary/90 hover:border-secondary/90 hover:shadow-lg hover:shadow-secondary/50 transition hover:duration-300"
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
