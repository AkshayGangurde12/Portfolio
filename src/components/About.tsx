import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download, GraduationCap, FolderGit2, Trophy, Code2 } from "lucide-react";

const About = () => {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Akshay_Gangurde_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    {
      icon: GraduationCap,
      value: "7.06 CGPA",
      label: "Current semester academic excellence",
    },
    {
      icon: FolderGit2,
      value: "2+ Projects",
      label: "Built with MERN stack and blockchain",
    },
    {
      icon: Code2,
      value: "5+ Skills",
      label: "Full-stack development expertise",
    },
    {
      icon: Trophy,
      value: "5+ Certifications",
      label: "Industry-recognized achievements",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-20 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[320px_1fr] gap-12 md:gap-16 items-start mb-16">
          <div className="flex flex-col items-center lg:sticky lg:top-24">
            <Avatar className="w-64 h-64 md:w-72 md:h-72 mb-8 border-4 border-primary/20 shadow-elegant">
              <AvatarImage 
                src="/profile-picture.jpg" 
                alt="Akshay Gangurde" 
                className="object-cover"
              />
              <AvatarFallback className="text-7xl md:text-8xl bg-primary/10 text-primary">AG</AvatarFallback>
            </Avatar>
            <Button 
              variant="outline" 
              className="w-full text-base md:text-lg py-6 hover:bg-primary hover:text-primary-foreground transition-all" 
              onClick={handleDownloadCV}
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="space-y-8 md:space-y-10">
            <Card className="p-8 md:p-10 glass hover:glass-hover transition-all duration-500 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Who Am I?</h3>
              <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed">
                I'm Akshay Gangurde, a final year Computer Engineering student at Vishwakarma Institute 
                of Information Technology, Pune. With a deep passion for technology, I specialize in 
                Full-Stack Development using the MERN stack and am constantly exploring innovative solutions 
                in real-time systems. I thrive on solving real-world problems through 
                innovation and efficiency. Whether it's building impactful projects or participating in 
                hackathons, I'm committed to pushing boundaries and contributing to solutions that make 
                a difference.
              </p>
            </Card>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 md:p-8 glass hover:glass-hover transition-all duration-300 hover:-translate-y-2 rounded-2xl group"
                >
                  <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-2xl md:text-3xl font-bold mb-3">{stat.value}</h4>
                  <p className="text-sm md:text-base text-muted-foreground/80">{stat.label}</p>
                </Card>
              ))}
            </div>

            <Card className="p-8 md:p-10 glass hover:glass-hover transition-all duration-500 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Future Goals and Aspirations</h3>
              <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed">
                I am currently expanding my skill set by exploring advanced full-stack architectures 
                and technologies. My focus is on applying these skills to real-world projects, 
                solving impactful problems, and contributing to innovation through active participation 
                in hackathons. My goal is to continuously learn, create, and collaborate, building 
                solutions that make a difference in the tech industry.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
