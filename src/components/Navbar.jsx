import { useEffect, useState, useRef, useMemo } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence, useScroll } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [shrink, setShrink] = useState(false);
  const { scrollYProgress } = useScroll();

  const navLinks = useMemo(
    () => [
      { label: "Home", id: "home" },
      { label: "About", id: "about" },
      { label: "Skills", id: "skills" },
      { label: "Projects", id: "projects" },
      { label: "Contact", id: "contact" },
    ],
    []
  );

  // Smooth scroll
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === "A" && e.target.hash) {
        e.preventDefault();
        const id = e.target.hash.replace("#", "");
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  // Scroll Spy — visible section based
  const sectionRefs = useRef({});

  useEffect(() => {
    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) sectionRefs.current[link.id] = element;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        let maxVisible = 0;
        let visibleId = activeSection;

        entries.forEach((entry) => {
          const visibleRatio = entry.intersectionRatio;
          if (visibleRatio > maxVisible) {
            maxVisible = visibleRatio;
            visibleId = entry.target.id;
          }
        });

        setActiveSection(visibleId);
      },
      { threshold: [0.2, 0.4, 0.6, 0.8] }
    );

    Object.values(sectionRefs.current).forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [activeSection, navLinks]);

  //  Navbar shrink effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-16 left-0 w-full h-0.5 bg-secondary origin-left z-999"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 backdrop-blur-xl bg-primary/80 border-b border-secondary/20 transition-all duration-300 h-16 ${
          shrink ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-0 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-2xl font-bold text-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Robiul.
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.id}
                  className="relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <a
                    href={`#${link.id}`}
                    className={`font-medium transition ${
                      activeSection === link.id
                        ? "text-secondary"
                        : "text-accent hover:text-secondary"
                    }`}
                  >
                    {link.label}
                  </a>

                  {/* Hover underline */}
                  <div className="absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-500 w-0 group-hover:w-full"></div>
                </motion.div>
              ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />

              <a
                href="https://drive.google.com/file/d/1mp2gCAzQy3koEwTYCzC7ALmt_eJhk94W/view?usp=sharing"
                target="_blank"
                className="btn bg-secondary text-white hover:bg-secondary/90  hover:shadow-md hover:shadow-secondary/50 transition  hover:duration-300 border-0"
              >
                RESUME
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 cursor-pointer" />
                ) : (
                  <Menu className="w-6 h-6 cursor-pointer" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4 }}
              className="md:hidden fixed left-0 top-0 h-screen w-64 bg-primary/95 shadow-lg z-40 flex flex-col p-6 gap-6"
            >
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="self-end cursor-pointer"
              >
                <X />
              </button>

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className={`text-lg ${
                    activeSection === link.id
                      ? "text-secondary"
                      : "text-accent hover:text-secondary"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}

              <hr className="border-secondary/30" />

              <a
                href="https://drive.google.com/file/d/1mp2gCAzQy3koEwTYCzC7ALmt_eJhk94W/view?usp=sharing"
                target="_blank"
                className="btn bg-secondary text-white border-0 hover:shadow-md hover:shadow-secondary/50 transition  hover:duration-300"
              >
                RESUME
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
