import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com", color: "hover:text-foreground" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com", color: "hover:text-blue-400" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com", color: "hover:text-sky-400" },
  { name: "Email", icon: Mail, url: "mailto:hello@example.com", color: "hover:text-accent" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-heading font-display">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subheading mx-auto mb-12">
            I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about web development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left side - Message */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Let's build something <span className="text-primary">great</span> together.
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you have a project in mind, want to discuss opportunities, or just want to say hi — I'd love to hear from you!
              </p>

              <div className="flex items-center gap-3 text-muted-foreground mb-4">
                <MapPin size={18} className="text-primary" />
                <span>Available for remote work worldwide</span>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <a href="mailto:hello@example.com" className="hover:text-foreground transition-colors">
                  hello@example.com
                </a>
              </div>
            </div>

            {/* Right side - Actions */}
            <div className="flex flex-col justify-center">
              <Button variant="hero" size="xl" className="w-full mb-6" asChild>
                <a href="mailto:hello@example.com">
                  <Send className="mr-2" size={20} />
                  Send me an Email
                </a>
              </Button>

              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`
                      p-4 rounded-xl bg-muted/30 border border-border/50 
                      text-muted-foreground transition-all duration-300
                      hover:bg-muted/50 hover:border-primary/30
                      ${social.color}
                    `}
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground mt-12"
        >
          Designed & Built with ❤️ using React & Tailwind CSS
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
