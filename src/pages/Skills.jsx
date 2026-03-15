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
  SiTypescript,
} from "react-icons/si";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";
import { FaPixiv } from "react-icons/fa6";
import { TbBrandFramerMotion, TbBrandRedux } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

const frontend = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "JavaScript", icon: <BiLogoJavascript /> },
  { name: "Typescript", icon: <SiTypescript /> },
  { name: "Redux", icon: <TbBrandRedux /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <IoLogoCss3 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
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
      {/* Header animation */}
      <motion.h2
        className="text-4xl font-bold my-20 text-center text-accent divider max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My <span className="text-secondary">Skills</span>
      </motion.h2>

      {/* Tabs Section */}
      <div className="flex justify-center gap-4 mb-8">
        {["frontend", "backend", "tools"].map((tab) => (
          <button
            key={tab}
            className={`btn px-6 py-2 rounded-full font-semibold border-2 transition-all duration-300 capitalize ${
              section === tab
                ? "bg-secondary text-white border-secondary"
                : "bg-primary text-secondary border-secondary/50 hover:bg-secondary/10"
            }`}
            onClick={() => setSection(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4 md:px-0"
      >
        <AnimatePresence mode="popLayout">
          {" "}
          {getSkills().map((skill) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="flex flex-col items-center justify-center gap-4 p-6 bg-secondary/10 rounded-lg shadow-lg border-t-4 border-secondary hover:shadow-secondary/30"
              whileHover={{ scale: 1.05, translateY: -5 }}
            >
              <div className="text-6xl text-secondary">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-accent">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Skills;
