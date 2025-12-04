import { BsBrowserEdge } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Habit Tracker",
    description:
      "Habit Tracker is a modern habit tracking web application that helps users build positive routines, stay consistent, and monitor their progress.",
    tech: ["JavaScript", "React", "TailwindCSS", "Firebase"],
    image: "https://i.ibb.co.com/Cj5Hqp5/Annotation-2025-12-04-231411.jpg",
    github_link: "https://github.com/mdrobiulislam1479/habit-tracker-client",
    live_link: "https://habit-tracker-zone.netlify.app",
  },
  {
    id: 2,
    title: "ToyTopia",
    description:
      "ToyTopia is a vibrant and playful online marketplace designed for families to discover and support local toy sellers.",
    tech: ["JavaScript", "React", "TailwindCSS", "AOS"],
    image: "https://i.ibb.co.com/600yTTsH/Annotation-2025-12-04-231903.jpg",
    github_link: "https://github.com/mdrobiulislam1479/toy-topia",
    live_link: "https://ph-toy-topia.netlify.app",
  },
  {
    id: 3,
    title: "ArtZone",
    description:
      "ArtZone is a modern, interactive art showcase platform where users can explore artworks, upload creations, and manage their art portfolio.",
    tech: ["Next.js", "React", "javaScript", "TailwindCSS"],
    image: "https://i.ibb.co.com/v60qNWYq/Annotation-2025-12-04-232544.jpg",
    github_link: "https://github.com/mdrobiulislam1479/art-zone-client",
    live_link: "https://art-zone-client.vercel.app",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 ">
      <h2 className="text-4xl font-bold my-20 text-center text-accent divider max-w-md mx-auto">
        My <span className="text-secondary">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div className="group bg-base-100 rounded-3xl overflow-hidden shadow-xl border border-secondary hover:shadow-lg hover:shadow-secondary transition-all duration-300 ">
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
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

              <a
                href={project.live_link}
                className="btn bg-transparent border-secondary text-accent hover:text-secondary mt-6 hover:bg-secondary/10 hover:border-secondary/90 hover:shadow-lg hover:shadow-secondary/50 transition hover:scale-105 hover:-translate-y-1 hover:duration-300"
              >
                <BsBrowserEdge /> Live Demo
              </a>
              <a
                href={project.github_link}
                className="btn bg-transparent border-secondary text-accent hover:text-secondary mt-6 hover:bg-secondary/10 hover:border-secondary/90 hover:shadow-lg hover:shadow-secondary/50 transition hover:scale-105 hover:-translate-y-1 hover:duration-300 ml-3"
              >
                <FaGithub /> Github Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
