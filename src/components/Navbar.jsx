import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="sticky w-full top-0 z-50 transition-all duration-300 border-b border-dashed border-secondary  backdrop-blur-md bg-primary/80 ">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-secondary cursor-pointer">
            Robiul.
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
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

          <div className="hidden md:flex gap-2 items-center">
            <ThemeToggle />
            <a
              href=""
              className="btn bg-secondary text-white hover:bg-secondary/90 hover:border-secondary/90 hover:shadow-lg hover:shadow-secondary/50 transition hover:scale-105 hover:-translate-y-1 hover:duration-300 border-secondary"
            >
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
