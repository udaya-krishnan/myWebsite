import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  MapPin,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const email = "udayankrishnan36@gmail.com";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/udaya-krishnan",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/udayakrishnan-k/",
    color: "hover:text-blue-400",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/Udayakrishnan_K",
    color: "hover:text-sky-400",
  },
  {
    name: "Email",
    icon: Mail,
    url: `mailto:${email}`,
    color: "hover:text-accent",
  },
];

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative">
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-heading font-display">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subheading mx-auto mb-10 sm:mb-12">
            I'm always open to discussing new opportunities, collaborations, or
            just having a friendly chat about web development.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6 sm:p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {/* Left */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">
                Let's build something{" "}
                <span className="text-primary">great</span> together.
              </h3>

              <p className="text-muted-foreground mb-6">
                Whether you have a project in mind, want to discuss opportunities,
                or just want to say hi — I'd love to hear from you!
              </p>

              <div className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground mb-4">
                <MapPin size={18} className="text-primary" />
                <span>Available for remote, hybrid, or onsite work</span>
              </div>

              {/* Email + Copy */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <Mail size={18} className="text-primary" />

                <span className="select-all">{email}</span>

                <button
                  onClick={handleCopy}
                  aria-label="Copy email"
                  className="p-1 rounded-md hover:bg-muted transition"
                >
                  {copied ? (
                    <Check size={16} className="text-green-500" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {copied && (
                <p className="text-xs text-green-500 mt-2 text-center md:text-left">
                  Email copied to clipboard
                </p>
              )}
            </div>

            {/* Right */}
            <div className="flex flex-col items-center justify-center w-full">
            <Button
  variant="hero"
  size="xl"
  className="w-full max-w-sm sm:max-w-none mb-6"
  onClick={() => {
    window.location.href = `mailto:${email}`;
  }}
>
  <Send size={20} className="mr-2" />
  Send me an Email
</Button>


              <div className="flex justify-center flex-wrap gap-4 w-full">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 + index * 0.1,
                    }}
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

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground mt-10 sm:mt-12"
        >
          Built with passion and code ❤️ by Udayakrishnan K
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
