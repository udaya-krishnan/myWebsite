import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
  title: "E-Commerce Platform",
  description:
    "A full-stack e-commerce application with an admin dashboard, real-time sales insights, inventory management, order processing, and user authentication.",
  techStack: [
    "Node.js",
    "Express.js",
    "EJS",
    "Bootstrap",
    "MongoDB",
    "Chart.js"
  ],
  liveUrl: "#",
  githubUrl: "https://github.com/udaya-krishnan/Echo-Elite.git",
  featured: true,
}
,
 {
  title: "Service Website",
  description:
    "A modern, responsive service website built with React and TypeScript, featuring smooth animations, clean UI, and an optimized user experience.",
  techStack: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion"
  ],
  liveUrl: "https://solvxai.vercel.app/",
  githubUrl: "https://github.com/solvxaisolutions/team_solvxai.git",
  featured: true,
}
,
  {
  title: "Hostel Booking Platform",
  description:
    "A full-stack hostel booking website that allows users to browse hostels, view availability, and manage bookings, built with a clean architecture approach.",
  techStack: [
    "React",
    "Tailwind CSS",
    "Redux",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Clean Architecture"
  ],
  liveUrl: "https://hostel-haven.vercel.app/",
  githubUrl: "https://github.com/udaya-krishnan/Hostel_Haven.git",
  featured: false,
},
  {
  title: "Tuition Class Website",
  description:
    "A responsive tuition class website built with React and Tailwind CSS, featuring course details, contact sections, and Google Maps integration for easy location access.",
  techStack: [
    "React",
    "Tailwind CSS",
    "Google Maps API"
  ],
  liveUrl: "https://luminous-academy-website.vercel.app/",
  githubUrl: "https://github.com/udaya-krishnan/luminous-academy-website.git",
  featured: false,
}
,
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading font-display">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Some of my recent work that I'm proud of
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card-hover h-full p-6 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={20} />
                    </a>
                   {project.liveUrl && project.liveUrl !== "#" && (
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-foreground transition-colors"
  >
    <ExternalLink size={20} />
  </a>
)}

                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  {project.liveUrl && project.liveUrl !== "#" && (
  <Button variant="glass" size="sm" asChild className="flex-1">
    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
      <ExternalLink size={16} className="mr-1" />
      Live Demo
    </a>
  </Button>
)}

                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-1" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
