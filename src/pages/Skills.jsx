import { BiLogoJavascript } from "react-icons/bi";
import { FaDev, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {
  IoAccessibility,
  IoLogoFigma,
  IoLogoFirebase,
  IoLogoVercel,
} from "react-icons/io5";
import {
  SiCanva,
  SiEslint,
  SiExpress,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNpm,
  SiPostman,
  SiPrettier,
  SiTailwindcss,
} from "react-icons/si";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";
import { FaPixiv } from "react-icons/fa6";
import { DiResponsive } from "react-icons/di";

const webSkills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <IoLogoCss3 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <BiLogoJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <IoLogoFirebase /> },
];

const toolsSkills = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FiGithub /> },
  { name: "VS Code", icon: <VscVscode /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Netlify", icon: <SiNetlify /> },
  { name: "Vercel", icon: <IoLogoVercel /> },
  { name: "npm", icon: <SiNpm /> },
  { name: "ESLint", icon: <SiEslint /> },
  { name: "Prettier", icon: <SiPrettier /> },
  { name: "Chrome DevTools", icon: <FaDev /> },
];

const othersSkills = [
  { name: "Figma", icon: <IoLogoFigma /> },
  { name: "Canva", icon: <SiCanva /> },
  { name: "Pixso", icon: <FaPixiv /> },
  { name: "Responsive Design", icon: <DiResponsive /> },
  { name: "Web Accessibility", icon: <IoAccessibility /> },
];

const Skills = () => {
  const [section, setSection] = useState("web");
  const getSkills = () => {
    if (section === "web") return webSkills;
    if (section === "tools") return toolsSkills;
    if (section === "others") return othersSkills;
    return [];
  };
  return (
    <div className="max-w-7xl mx-auto pb-20" id="skills">
      <h2 className="text-4xl font-bold my-20 text-center text-accent divider max-w-md mx-auto">
        My <span className="text-secondary">Skills</span>
      </h2>
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`btn px-6 py-2 rounded-full font-semibold border-2 transition-all duration-300 ${
            section === "web"
              ? "bg-secondary text-white border-secondary"
              : "bg-primary text-secondary border-secondary/50 hover:bg-secondary/10 hover:shadow-md hover:shadow-secondary/50 hover:scale-105"
          }`}
          onClick={() => setSection("web")}
        >
          Web
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
        <button
          className={`btn px-6 py-2 rounded-full font-semibold border-2 transition-all duration-300 ${
            section === "others"
              ? "bg-secondary text-white border-secondary"
              : "bg-primary text-secondary border-secondary/50 hover:bg-secondary/10 hover:shadow-md hover:shadow-secondary/50 hover:scale-105"
          }`}
          onClick={() => setSection("others")}
        >
          Others
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4 md:px-0">
        {getSkills().map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-4 p-6 bg-secondary/10 rounded-lg shadow-lg hover:shadow-secondary/30 hover:scale-105 hover:-translate-y-1 transition hover:duration-300 border-t-4 border-secondary"
          >
            <div className="text-6xl text-secondary">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-accent">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
