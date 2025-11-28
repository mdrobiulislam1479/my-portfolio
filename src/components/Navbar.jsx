import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop - 70;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`sticky w-full top-0 z-50 transition-all duration-300 border-b border-dashed border-secondary ${
        isScrolled ? "bg-primary shadow-md" : "bg-primary/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1
            className="text-2xl font-bold text-secondary cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Robiul.
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-accent hover:text-secondary font-medium transition cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex gap-2 items-center ">
            <ThemeToggle />
            <a href="" className="btn bg-secondary text-white">
              RESUME
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex gap-2 items-center">
            <ThemeToggle />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="w-6 h-6 cursor-pointer" />
              ) : (
                <Menu className="w-6 h-6 cursor-pointer" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden flex flex-col gap-2 items-center py-4 border-t border-secondary">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="py-2  text-accent hover:text-secondary cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <a href="" className="btn bg-secondary text-white">
              RESUME
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
