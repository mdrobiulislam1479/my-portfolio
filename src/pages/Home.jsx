import myPic from "../assets/white-shirt.png";
import { MdMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <div
      id="home"
      className="max-w-7xl mx-auto min-h-screen lg:flex justify-between items-center px-4 my-10 md:mt-0 gap-8 xl:gap-20"
    >
      <div className="text-center lg:text-left mb-5 md:mb-0 max-w-2xl">
        <span className="text-accent text-4xl">Hello, I'm</span>
        <h1 className="text-4xl md:text-6xl font-bold text-accent mt-2">
          Md Robiul Islam
        </h1>
        <h2 className="text-3xl md:text-4xl text-accent my-8">
          And I'm a Frontend Developer
        </h2>
        <hr className="mt-5 text-gray-500" />
        <p className="text-accent/60 mt-4 md:text-justify">
          I'm a MERN Stack Developer with a strong focus on frontend
          development. I enjoy building responsive, user-friendly web
          applications that deliver seamless experiences. While I can handle the
          full MERN stack, my real passion lies in crafting elegant and dynamic
          frontend interfaces using modern tools and frameworks.
        </p>
        <a className="btn bg-secondary text-white mt-6 mr-4 border-secondary hover:bg-secondary/90 hover:border-secondary/90 hover:shadow-lg hover:shadow-secondary/50 transition hover:scale-105 hover:-translate-y-1 hover:duration-300">
          Contact Me
        </a>
        <a className="btn bg-transparent border-secondary text-accent hover:text-secondary mt-6 hover:bg-secondary/10 hover:border-secondary/90 hover:shadow-lg hover:shadow-secondary/50 transition hover:scale-105 hover:-translate-y-1 hover:duration-300">
          View Projects
        </a>
        <div className="flex gap-4  mt-8 justify-center lg:justify-start text-accent">
          {/* Social Icons */}
          <a
            href=""
            target="_blank"
            className="bg-base-100/80 p-2 rounded-lg border border-secondary/30 text-secondary hover:bg-secondary/10 transition hover:shadow-lg hover:shadow-secondary/30 hover:scale-105"
          >
            <FaLinkedinIn size={22} />
          </a>
          <a
            href=""
            target="_blank"
            className="bg-base-100/80 p-2 rounded-lg border border-secondary/30 text-secondary hover:bg-secondary/10 transition hover:shadow-lg hover:shadow-secondary/30 hover:scale-105"
          >
            <FiGithub size={22} />
          </a>
          <a
            href=""
            target="_blank"
            className="bg-base-100/80 p-2 rounded-lg border border-secondary/30 text-secondary hover:bg-secondary/10 transition hover:shadow-lg hover:shadow-secondary/30 hover:scale-105"
          >
            <MdMailOutline size={22} />
          </a>
          <a
            href=""
            target="_blank"
            className="bg-base-100/80 p-2 rounded-lg border border-secondary/30 text-secondary hover:bg-secondary/10 transition hover:shadow-lg hover:shadow-secondary/30 hover:scale-105"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>
      </div>
      <div className="max-w-lg rounded-full overflow-hidden shadow-2xl shadow-secondary border-4 border-secondary/50 mx-auto">
        <img
          src={myPic}
          alt="Md Robiul Islam"
          className="w-full h-full object-cover  hover:scale-110 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default Home;
