import { BsBrowserEdge } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Ticket Point",
    description:
      "TicketPoint is a modern Online Ticket Booking Platform built with the MERN Stack. It allows users to easily search, book, and pay for travel tickets.",
    tech: ["JavaScript", "React", "TailwindCSS", "Firebase", "stripe"],
    image: "https://i.ibb.co.com/7NWV1xf7/Annotation-2026-01-06-220538.jpg",
    github_link: "https://github.com/mdrobiulislam1479/ticket-point-client",
    live_link: "https://ticket-point.vercel.app",
  },
  {
    id: 2,
    title: "Habit Tracker",
    description:
      "Habit Tracker is a modern habit tracking web application that helps users build positive routines, stay consistent, and monitor their progress.",
    tech: ["JavaScript", "React", "TailwindCSS", "Firebase"],
    image: "https://i.ibb.co.com/670pkqgS/Annotation-2026-01-06-220103.jpg",
    github_link: "https://github.com/mdrobiulislam1479/habit-tracker-client",
    live_link: "https://habit-tracker-zone.netlify.app",
  },
  {
    id: 3,
    title: "Eco Bazar",
    description:
      "Eco Bazar provides a complete shopping experience with user authentication, product browsing, cart management and secure checkout.",
    tech: ["JavaScript", "Next.js", "TailwindCSS", "Next Auth", "Redux"],
    image: "https://i.ibb.co/RGWYX4xH/Annotation-2026-02-26-121042.jpg",
    github_link: "https://github.com/mdrobiulislam1479/eco-bazar",
    live_link: "https://eco-bazar-one.vercel.app",
  },
  {
    id: 4,
    title: "Eco Sapling",
    description:
      "Eco Sapling is a clean, modern plant shop experience built with Next.js. It highlights smooth browsing flow, collections, and plant detail views.",
    tech: ["JavaScript", "Next.js", "TailwindCSS", "React-toastify"],
    image: "https://i.ibb.co/p6PrCdhx/Annotation-2026-02-26-122316.jpg",
    github_link: "https://github.com/mdrobiulislam1479/eco-sapling",
    live_link: "https://eco-sapling.vercel.app",
  },

  {
    id: 5,
    title: "Toy Topia",
    description:
      "ToyTopia is a vibrant and playful online marketplace designed for families to discover and support local toy sellers.",
    tech: ["JavaScript", "React", "TailwindCSS", "AOS", "Firebase"],
    image: "https://i.ibb.co.com/jPPj0Rkr/Annotation-2026-01-06-220300.jpg",
    github_link: "https://github.com/mdrobiulislam1479/toy-topia",
    live_link: "https://ph-toy-topia.netlify.app",
  },
  {
    id: 6,
    title: "Hero Apps",
    description:
      "Hero Apps ensures users can manage their software ecosystem with confidence and full control.",
    tech: ["JavaScript", "React", "TailwindCSS", "DaisyUI", "React-router"],
    image: "https://i.ibb.co/7xQDB5fM/Annotation-2026-02-26-123834.jpg",
    github_link: "https://github.com/mdrobiulislam1479/hero-apps",
    live_link: "https://ph-hero-apps.netlify.app",
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="max-w-7xl mx-auto px-4 pt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2
        className="text-4xl font-bold my-20 text-center text-accent divider max-w-md mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My <span className="text-secondary">Projects</span>
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="group bg-base-100 rounded-xl overflow-hidden shadow-lg border border-secondary/20 transition-colors duration-500"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.95 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 100, damping: 15 },
              },
            }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
          >
            {/* Image Container with Overlay Effect */}
            <div className="relative overflow-hidden aspect-video">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-accent group-hover:text-secondary transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-accent/70 text-sm leading-relaxed mb-5 h-20 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-secondary/5 text-secondary px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider border border-secondary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.live_link}
                  className="flex items-center gap-2 text-sm font-bold text-accent hover:text-secondary transition-colors"
                >
                  <BsBrowserEdge size={18} /> LIVE PREVIEW
                </a>

                {project.github_link && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.github_link}
                    className="p-2 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
