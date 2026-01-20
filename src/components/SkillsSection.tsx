import { motion } from "framer-motion";

const skills = [
  // Frontend
  { name: "React.js", category: "framework" },
  { name: "Tailwind CSS", category: "styling" },
  { name: "JavaScript (ES6+)", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "HTML5 & CSS3", category: "core" },
  { name: "Responsive Design", category: "design" },
  { name: "Framer Motion", category: "animation" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "REST APIs", category: "backend" },

  // Database
  { name: "MongoDB", category: "database" },

  // Programming Languages
  { name: "Python", category: "language" },

  // Tools
  { name: "Git & GitHub", category: "tools" },
  { name: "Vite", category: "tools" },

  // Design
  { name: "UI/UX Basics", category: "design" },
  { name: "Figma", category: "design" },
];


const categoryColors: Record<string, string> = {
  framework: "from-primary/20 to-primary/5 border-primary/30 hover:border-primary/60",
  styling: "from-secondary/20 to-secondary/5 border-secondary/30 hover:border-secondary/60",
  language: "from-accent/20 to-accent/5 border-accent/30 hover:border-accent/60",
  core: "from-primary/15 to-primary/5 border-primary/25 hover:border-primary/50",
  tools: "from-muted to-muted/50 border-border hover:border-foreground/30",
  design: "from-secondary/15 to-secondary/5 border-secondary/25 hover:border-secondary/50",
  backend: "from-accent/15 to-accent/5 border-accent/25 hover:border-accent/50",
  animation: "from-primary/25 to-primary/10 border-primary/40 hover:border-primary/70",
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading font-display">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subheading mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`
                px-5 py-3 rounded-full bg-gradient-to-br border backdrop-blur-sm
                text-sm font-medium cursor-default transition-all duration-300
                ${categoryColors[skill.category]}
              `}
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Skill categories legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary/40" />
            Frameworks
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-secondary/40" />
            Styling
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent/40" />
            Languages
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
