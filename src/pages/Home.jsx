import { motion } from "framer-motion";
import myPic from "../assets/white-shirt.png";
import { MdMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto min-h-screen lg:flex justify-between items-center px-4 pt-20 pb-16 md:pb-0 md:pt-0 gap-8 xl:gap-20"
    >
      {/* LEFT SIDE CONTENT */}
      <motion.div
        className="text-center lg:text-left mb-5 md:mb-0 max-w-2xl"
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
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className="text-accent text-4xl"
        >
          Hello, I'm
        </motion.span>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className="text-4xl md:text-6xl font-bold text-accent mt-2"
        >
          Md Robiul Islam
        </motion.h1>

        {/* Typewriter Animation */}
        <h2 className="text-3xl md:text-4xl text-secondary my-4 font-semibold">
          <Typewriter
            words={[
              "MERN Stack Developer",
              "Frontend Developer",
              "Full Stack Developer",
              "Quick Learner",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        <motion.hr
          variants={{
            hidden: { scaleX: 0 },
            show: { scaleX: 1 },
          }}
          transition={{ duration: 0.6 }}
          className="mt-5 text-gray-500 origin-left"
        />

        <motion.p
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
          transition={{ duration: 0.8 }}
          className="text-accent/60 mt-4 md:text-justify"
        >
          I'm a MERN Stack Developer with a strong focus on frontend
          development. I enjoy building responsive, user-friendly web
          applications that deliver seamless experiences. While I can handle the
          full MERN stack, my real passion lies in crafting elegant and dynamic
          frontend interfaces using modern tools and frameworks.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <a
            href="#contact"
            className="btn bg-secondary text-white border-secondary hover:bg-secondary/90 hover:border-secondary/90 hover:shadow-lg hover:shadow-secondary/50 transition hover:duration-300"
          >
            Contact Me
          </a>

          <a
            href="#projects"
            className="btn bg-transparent border-secondary text-accent hover:text-secondary hover:bg-secondary/10 hover:border-secondary hover:shadow-lg hover:shadow-secondary/50 transition   hover:duration-300"
          >
            View Projects
          </a>
        </motion.div>

        {/* SOCIAL ICONS */}
        <motion.div
          className="flex gap-4 mt-8 justify-center lg:justify-start text-accent"
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <a
            href="https://www.linkedin.com/in/mdrobiulislam1479"
            target="_blank"
            className="bg-base-100/80 p-2 rounded-lg border border-secondary/30 text-secondary hover:bg-secondary/10 transition hover:shadow-lg hover:shadow-secondary/30 hover:scale-105"
          >
            <FaLinkedinIn size={22} />
          </a>

          <a
            href="https://github.com/mdrobiulislam1479"
            target="_blank"
            className="bg-base-100/80 p-2 rounded-lg border border-secondary/30 text-secondary hover:bg-secondary/10 transition hover:shadow-lg hover:shadow-secondary/30 hover:scale-105"
          >
            <FiGithub size={22} />
          </a>

          <a
            href="mailto:mdrobiulislam1479@gmail.com"
            target="_blank"
            className="bg-base-100/80 p-2 rounded-lg border border-secondary/30 text-secondary hover:bg-secondary/10 transition hover:shadow-lg hover:shadow-secondary/30 hover:scale-105"
          >
            <MdMailOutline size={22} />
          </a>

          <a
            href="https://wa.me/8801402353404"
            target="_blank"
            className="bg-base-100/80 p-2 rounded-lg border border-secondary/30 text-secondary hover:bg-secondary/10 transition hover:shadow-lg hover:shadow-secondary/30 hover:scale-105"
          >
            <FaWhatsapp size={22} />
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        className="max-w-lg rounded-full overflow-hidden shadow-2xl shadow-secondary border-4 border-secondary/50 mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={myPic}
          alt="Md Robiul Islam"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;
