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
    image: "https://i.ibb.co.com/TBph0ScF/Annotation-2025-12-19-000632.jpg",
    live_link: "https://ticket-point.vercel.app",
  },
  {
    id: 2,
    title: "Habit Tracker",
    description:
      "Habit Tracker is a modern habit tracking web application that helps users build positive routines, stay consistent, and monitor their progress.",
    tech: ["JavaScript", "React", "TailwindCSS", "Firebase"],
    image: "https://i.ibb.co.com/Cj5Hqp5/Annotation-2025-12-04-231411.jpg",
    github_link: "https://github.com/mdrobiulislam1479/habit-tracker-client",
    live_link: "https://habit-tracker-zone.netlify.app",
  },
  {
    id: 3,
    title: "Toy Topia",
    description:
      "ToyTopia is a vibrant and playful online marketplace designed for families to discover and support local toy sellers.",
    tech: ["JavaScript", "React", "TailwindCSS", "AOS", "Firebase"],
    image: "https://i.ibb.co.com/600yTTsH/Annotation-2025-12-04-231903.jpg",
    github_link: "https://github.com/mdrobiulislam1479/toy-topia",
    live_link: "https://ph-toy-topia.netlify.app",
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="max-w-7xl mx-auto px-4 pt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl font-bold my-20 text-center text-accent divider max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-secondary">Projects</span>
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="group bg-base-100 rounded-lg overflow-hidden shadow-xl border border-secondary hover:shadow-md hover:shadow-secondary transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-accent group-hover:text-secondary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-accent/70 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium border border-secondary/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap mt-6">
                <a
                  target="_blank"
                  href={project.live_link}
                  className="btn bg-transparent border-secondary text-accent hover:text-secondary hover:bg-secondary/10 hover:border-secondary/90 hover:shadow-lg hover:shadow-secondary/50 transition hover:duration-300 mr-3"
                >
                  <BsBrowserEdge /> Live Demo
                </a>
                {!project.github_link ? (
                  ""
                ) : (
                  <a
                    target="_blank"
                    href={project.github_link}
                    className="btn bg-transparent border-secondary text-accent hover:text-secondary hover:bg-secondary/10 hover:border-secondary/90 hover:shadow-lg hover:shadow-secondary/50 transition hover:duration-300"
                  >
                    <FaGithub /> Github Code
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
