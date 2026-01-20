import { motion } from "framer-motion";
import { Award, ExternalLink, Download } from "lucide-react";
import { Button } from "./ui/button";

const certificates = [
  {
    title: "Meta Python Programming",
    platform: "Meta / Coursera",
    date: "2026",
    credentialUrl: "https://coursera.org/share/438f5b08579fb275bdbdc24dea400329",
  },
];


const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading font-display">
            Certificates & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-subheading mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group"
            >
              <div className="glass-card-hover p-5 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-semibold text-sm leading-tight mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{cert.platform}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/30">
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                  <div className="flex gap-2">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                    >
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href={cert.credentialUrl}
                      className="p-2 rounded-lg bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                    >
                      <Download size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download all button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button variant="outline" size="lg">
            <Download className="mr-2" size={18} />
            Download All Certificates
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
