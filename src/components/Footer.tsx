import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/40 py-8 px-6 text-center">
    <div className="flex items-center justify-center gap-4 mb-4">
      <a
        href="https://github.com/jsilmaro"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Github size={16} />
      </a>
      <a
        href="https://www.linkedin.com/in/janelle-silmaro-323852281/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Linkedin size={16} />
      </a>
      <a
        href="https://www.instagram.com/janellesilmaro/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Instagram size={16} />
      </a>
    </div>
    <p className="text-xs text-muted-foreground">
      © {new Date().getFullYear()} Janelle B. Silmaro. All rights reserved.
    </p>
  </footer>
);

export default Footer;
