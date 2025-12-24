import { BiLogoJavascript } from "react-icons/bi";
import {
  FaBootstrap,
  FaDev,
  FaGitAlt,
  FaHtml5,
  FaLock,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoFigma, IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import {
  SiCanva,
  SiExpress,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";
import { FaPixiv } from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from "framer-motion";

const frontend = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <IoLogoCss3 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "JavaScript", icon: <BiLogoJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
];

const tools = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FiGithub /> },
  { name: "VS Code", icon: <VscVscode /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Netlify", icon: <SiNetlify /> },
  { name: "Vercel", icon: <IoLogoVercel /> },
  { name: "Figma", icon: <IoLogoFigma /> },
  { name: "Canva", icon: <SiCanva /> },
  { name: "Pixso", icon: <FaPixiv /> },
  { name: "Chrome DevTools", icon: <FaDev /> },
];

const backend = [
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <IoLogoFirebase /> },
  { name: "JWT", icon: <FaLock /> },
];

const Skills = () => {
  const [section, setSection] = useState("frontend");
  const getSkills = () => {
    if (section === "frontend") return frontend;
    if (section === "backend") return backend;
    if (section === "tools") return tools;
    return [];
  };
  return (
    <div className="max-w-7xl mx-auto pt-10 px-4" id="skills">
      <motion.h2
        className="text-4xl font-bold my-20 text-center text-accent divider max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My <span className="text-secondary">Skills</span>
      </motion.h2>
      <motion.div
        className="flex justify-center gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <button
          className={`btn px-6 py-2 rounded-full font-semibold border-2 transition-all duration-300 ${
            section === "frontend"
              ? "bg-secondary text-white border-secondary"
              : "bg-primary text-secondary border-secondary/50 hover:bg-secondary/10 hover:shadow-md hover:shadow-secondary/50 hover:scale-105"
          }`}
          onClick={() => setSection("frontend")}
        >
          Frontend
        </button>
        <button
          className={`btn px-6 py-2 rounded-full font-semibold border-2 transition-all duration-300 ${
            section === "backend"
              ? "bg-secondary text-white border-secondary"
              : "bg-primary text-secondary border-secondary/50 hover:bg-secondary/10 hover:shadow-md hover:shadow-secondary/50 hover:scale-105"
          }`}
          onClick={() => setSection("backend")}
        >
          Backend
        </button>
        <button
          className={`btn px-6 py-2 rounded-full font-semibold border-2 transition-all duration-300 ${
            section === "tools"
              ? "bg-secondary text-white border-secondary"
              : "bg-primary text-secondary border-secondary/50 hover:bg-secondary/10 hover:shadow-md hover:shadow-secondary/50 hover:scale-105"
          }`}
          onClick={() => setSection("tools")}
        >
          Tools
        </button>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4 md:px-0">
        {getSkills().map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-4 p-6 bg-secondary/10 rounded-lg shadow-lg hover:shadow-secondary/30 hover:scale-105 hover:-translate-y-1 transition hover:duration-300 border-t-4 border-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl text-secondary">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-accent">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
