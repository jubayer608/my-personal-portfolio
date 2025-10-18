"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { FileAxis3dIcon, Github, GithubIcon, X } from "lucide-react";

import img1 from "../../public/garden.png";
import img2 from "../../public/artifacts.png";
import img3 from "../../public/taskCoin.png";

// Project data
const projects = [
  {
    title: "My Garden App",
    image: img1,
    description:
      "A garden community app where users can share, browse, and like gardening tips. Built with MERN stack and Firebase Auth.",
    fullDetails: `Full project details from README.md:
- Users can share gardening tips
- Browse other tips
- Like tips
- Firebase authentication
- MERN stack
- Responsive UI`,
    live: "https://my-garden-app-e56e9.web.app",
    client: "https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-jubayer608.git",
    server: "https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-jubayer608.git",
    technologies: ["React", "Tailwind", "MongoDB", "Express.js", "Firebase"],
  },
  {
    title: "Historical Artifacts Tracker",
    image: img2,
    description:
      "A platform to explore and track historical artifacts with like, add, and update features. JWT-secured with Firebase token.",
    fullDetails: `Full project details from README.md:
- Users can add artifacts
- Like artifacts
- Update artifacts
- JWT authentication with Firebase
- React + Next.js + MongoDB + Express.js
- Responsive UI`,
    live: "https://artifacts-tracker-472eb.web.app",
    client: "https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-jubayer608.git",
    server: "https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-jubayer608.git",
    technologies: ["React", "Next.js", "MongoDB", "Express.js", "JWT"],
  },
  {
    title: "Task Coin (Micro Task Platform)",
    image: img3,
    description:
      "A MERN-based earning platform where buyers post tasks and workers complete them for rewards. Includes Admin Panel.",
    fullDetails: `Full project details from README.md:
- Buyers post tasks
- Workers complete tasks
- Admin Panel to manage users
- JWT authentication
- MERN stack`,
    live: "https://task-coin-server.web.app",
    client: "https://github.com/jubayer608/task-coin-client-a12.git",
    server: "https://github.com/jubayer608/task-coin-server-a12.git",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB", "JWT"],
  },
];

// Modal component
function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-background p-6 md:p-10 rounded-2xl max-w-3xl w-full relative overflow-y-auto max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground/80 hover:text-accent"
        >
          <X size={24} />
        </button>
        <h3 className="text-2xl font-bold text-accent mb-4">{project.title}</h3>
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="object-cover w-full h-64 rounded-lg mb-4"
        />
        <p className="text-foreground/90 whitespace-pre-line">{project.fullDetails}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/30"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-4 flex-wrap">
          <a
            href={project.live}
            target="_blank"
            className="px-4 py-2 bg-accent text-background rounded-full font-semibold flex items-center gap-2"
          >
            Live <FileAxis3dIcon size={18} />
          </a>
          <a
            href={project.client}
            target="_blank"
            className="px-4 py-2 border border-accent text-accent rounded-full font-semibold flex items-center gap-2"
          >
            Client <Github size={18} />
          </a>
          <a
            href={project.server}
            target="_blank"
            className="px-4 py-2 border border-accent text-accent rounded-full font-semibold flex items-center gap-2"
          >
            Server <GithubIcon size={18} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

// Main Projects component
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-6 md:px-10 text-foreground">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-accent mb-4">My Projects</h2>
        <p className="text-base sm:text-lg text-foreground/80">
          A showcase of my recent full-stack projects built with modern web technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="relative w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Info */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
              <h3 className="text-3xl font-bold text-accent">{project.title}</h3>
              <p className="text-foreground/90 leading-relaxed">
                {project.description.length > 120
                  ? project.description.slice(0, 120) + "..."
                  : project.description}
              </p>
              <button
                onClick={() => setSelectedProject(project)}
                className="text-accent font-semibold hover:underline"
              >
                See Details
              </button>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-3">
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 bg-accent text-background px-4 py-2 rounded-full font-semibold hover:bg-accent/90 transition"
                >
                  Live <FileAxis3dIcon />
                </a>
                <a
                  href={project.client}
                  target="_blank"
                  className="flex items-center gap-2 bg-foreground/10 border border-accent text-accent px-4 py-2 rounded-full font-semibold hover:bg-accent/10 transition"
                >
                  Client <Github />
                </a>
                <a
                  href={project.server}
                  target="_blank"
                  className="flex items-center gap-2 bg-foreground/10 border border-accent text-accent px-4 py-2 rounded-full font-semibold hover:bg-accent/10 transition"
                >
                  Server <GithubIcon />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
