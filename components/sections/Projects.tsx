"use client";

import { motion } from "framer-motion";
import { SlideUp } from "../animations/SlideUp";

const projects = [
  {
    title: "HYPEWIRE (Social Media Marketing Website)",
    description:
      " Created a single-page, responsive social media marketing website, showcasing strong front-end development skills,Utilized JavaScript extensively to deliver an engaging user experience with smooth animations and interactive visual effects.",
    tags: ["JavaScript"],
    link: "https://hype-wire.vercel.app/",
    github: "https://github.com/Lancelxt/HypeWire---a-digital-media-website-Project-",
  },
  {
    title: "MovieDB",
    description:
      "Built a dynamic movie database website using React, leveraging the TMDB API for comprehensive film information. Ensured full responsiveness across various screen sizes (desktop, tablet, mobile) for optimal user accessibility. Implemented robust API calling with Axios, incorporating advanced error handling and efficient routing for seamless navigation.",
    tags: ["React.js", "Axios", "Responsive UI"],
    link: "https://moviedatabase-sandy.vercel.app/",
    github: "https://github.com/Lancelxt/MovieDB",
  },
  {
    title: "Glitch Realm - A gaming blog",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and order tracking.",
    tags: ["Next.js","Responsive UI"],
    link: "https://glitch-realm.vercel.app/",
    github: "https://github.com/Lancelxt/Glitch-Realm-A-Gaming-Blog",
  },

];

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SlideUp>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </SlideUp>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.1)",
              }}
              className="card-bg rounded-lg p-6 md:p-8 flex flex-col transition-all group"
            >
              <h3
                className="text-xl font-semibold mb-3 transition-all"
                style={{ color: idx % 2 === 0 ? "#6366f1" : "#8b5cf6" }}
              >
                {project.title}
              </h3>
              <p className="text-muted mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded text-xs bg-[#2d2d44] text-[#6366f1]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#6366f1] hover:text-[#8b5cf6] text-sm font-medium transition-colors"
                >
                  Live Demo →
                </motion.a>
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#6366f1] hover:text-[#8b5cf6] text-sm font-medium transition-colors"
                >
                  GitHub →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
