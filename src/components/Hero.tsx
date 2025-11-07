import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/20">
            <AvatarImage 
              src="/profile-picture.jpg" 
              alt="Akshay Gangurde" 
              className="object-cover"
            />
            <AvatarFallback className="text-4xl bg-primary/10 text-primary">AG</AvatarFallback>
          </Avatar>

          <p className="text-sm text-muted-foreground mb-4 tracking-wider uppercase">
            Building <span className="text-primary font-semibold">Impactful</span> Solutions
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hello, I'm Akshay Gangurde
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate MERN stack developer and final-year Computer Engineering student, building secure and scalable web applications with real-time features.
          </p>

          <Button
            size="lg"
            onClick={scrollToContact}
            className="group shadow-elegant hover:shadow-glow transition-all"
          >
            <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
            Contact me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
