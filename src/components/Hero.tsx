import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          <Avatar className="w-36 h-36 md:w-40 md:h-40 mx-auto mb-8 border-4 border-primary/20 shadow-elegant">
            <AvatarImage 
              src="/profile-picture.jpg" 
              alt="Akshay Gangurde" 
              className="object-cover"
            />
            <AvatarFallback className="text-5xl md:text-6xl bg-primary/10 text-primary">AG</AvatarFallback>
          </Avatar>

          <p className="text-sm md:text-base text-muted-foreground mb-6 tracking-wider uppercase font-medium">
            Building <span className="text-primary font-bold">Impactful</span> Solutions
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
            Hello, I'm <span className="text-primary">Akshay Gangurde</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground/90 mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate MERN stack developer and final-year Computer Engineering student, building secure and scalable web applications with real-time features.
          </p>

          <Button
            size="lg"
            onClick={scrollToContact}
            className="group shadow-elegant hover:shadow-glow transition-all text-base md:text-lg px-8 py-6 md:px-10 md:py-7"
          >
            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
