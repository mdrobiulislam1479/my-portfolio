import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="w-full py-10 px-6 bg-linear-to-br from-base-100 via-secondary/10 text-accent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Logo + Text */}
        <div>
          <a
            href="#home"
            className="text-2xl font-bold text-secondary text-center md:text-left"
          >
            <span>Robiul.</span>
          </a>
          <p className="text-sm mt-2 md:max-w-60 text-center md:text-left">
            Building modern web experiences with passion and precision.
          </p>
        </div>

        {/* Nav Links */}
        <div className="space-x-6 mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-accent hover:text-secondary font-medium transition cursor-pointer hover:scale-105 hover:-translate-y-1 hover:duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 w-full md:w-auto">
          <a
            href="https://github.com/mdrobiulislam1479"
            target="_blank"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-secondary hover:text-secondary transition"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/mdrobiulislam1479"
            target="_blank"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-secondary hover:text-secondary transition"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href="mailto:mdrobiulislam1479@gmail.com"
            target="_blank"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-secondary hover:text-secondary transition"
          >
            <MdMailOutline size={18} />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © 2025 Md Robiul Islam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
