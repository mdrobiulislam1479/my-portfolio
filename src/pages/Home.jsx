import { TiSocialLinkedinCircular } from "react-icons/ti";
import myPic from "../assets/white-shirt.png";
import { VscGithub } from "react-icons/vsc";
import { ImMail4 } from "react-icons/im";
import { MdMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen lg:flex justify-between items-center px-4 my-5 md:mt-0 gap-8 xl:gap-20">
      <div className="text-center lg:text-left mb-5 md:mb-0 max-w-2xl">
        <span className="text-accent text-4xl">Hello, I'm</span>
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mt-2">
          Md Robiul Islam
        </h1>
        <h2 className="text-3xl md:text-4xl text-accent my-8">
          And I'm a Frontend Developer
        </h2>
        <hr className="mt-5 text-gray-500" />
        <p className="text-accent/60 mt-4">
          I'm a MERN Stack Developer with a strong focus on frontend
          development. I enjoy building responsive, user-friendly web
          applications that deliver seamless experiences. While I can handle the
          full MERN stack, my real passion lies in crafting elegant and dynamic
          frontend interfaces using modern tools and frameworks.
        </p>
        <a className="btn bg-secondary text-white mt-6 mr-4 border-secondary">
          Contact Me
        </a>
        <a className="btn bg-transparent border-secondary text-accent mt-6">
          View Projects
        </a>
        <div className="flex gap-4  mt-8 justify-center lg:justify-start">
          {/* Social Icons */}
          <a
            href=""
            className="border p-2 rounded-full hover:border-secondary hover:text-secondary hover:shadow-secondary/50 hover:shadow-lg transition"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href=""
            className="border p-2 rounded-full hover:border-secondary hover:text-secondary hover:shadow-secondary/50 hover:shadow-lg transition"
          >
            <FiGithub size={24} />
          </a>
          <a
            href=""
            className="border p-2 rounded-full hover:border-secondary hover:text-secondary hover:shadow-secondary/50 hover:shadow-lg transition"
          >
            <MdMailOutline size={24} />
          </a>
        </div>
      </div>
      <div className="max-w-lg rounded-full overflow-hidden shadow-2xl shadow-secondary border-4 border-secondary/50 mx-auto">
        <img src={myPic} alt="Md Robiul Islam" />
      </div>
    </div>
  );
};

export default Home;
