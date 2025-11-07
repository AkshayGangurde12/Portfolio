import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/AkshayGangurde12",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/akshay-gangurde-8b2714283",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:akshay.gangurde@example.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            <p className="text-muted-foreground text-base leading-relaxed">
              I'm a passionate MERN stack developer and final-year Computer Engineering student, building secure and scalable web applications with real-time features.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-primary transition-colors text-left text-base"
              >
                About Me
              </button>
              <button 
                onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-primary transition-colors text-left text-base"
              >
                Skills
              </button>
              <button 
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-primary transition-colors text-left text-base"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-primary transition-colors text-left text-base"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-base">
              © {currentYear} Akshay Gangurde. All rights reserved.
            </p>
            <p className="text-muted-foreground text-base flex items-center">
              Built with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;