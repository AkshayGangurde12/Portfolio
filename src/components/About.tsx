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
    <section id="about" className="py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">About Me</h2>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[300px_1fr] gap-12 items-start mb-16">
          <div className="flex flex-col items-center">
            <Avatar className="w-64 h-64 mb-6 border-4 border-primary/20">
              <AvatarImage 
                src="/profile-picture.jpg" 
                alt="Akshay Gangurde" 
                className="object-cover"
              />
              <AvatarFallback className="text-6xl bg-primary/10 text-primary">AG</AvatarFallback>
            </Avatar>
            <Button variant="outline" className="w-full" onClick={handleDownloadCV}>
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="space-y-8">
            <Card className="p-8 glass hover:glass-hover transition-all duration-500">
              <h3 className="text-2xl font-bold mb-4">Who Am I?</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm Akshay Gangurde, a final year Computer Engineering student at Vishwakarma Institute 
                of Information Technology, Pune. With a deep passion for technology, I specialize in 
                Full-Stack Development using the MERN stack and am constantly exploring innovative solutions 
                in real-time systems. I thrive on solving real-world problems through 
                innovation and efficiency. Whether it's building impactful projects or participating in 
                hackathons, I'm committed to pushing boundaries and contributing to solutions that make 
                a difference.
              </p>
            </Card>

            <div className="grid sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 glass hover:glass-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <stat.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="text-2xl font-bold mb-2">{stat.value}</h4>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>

            <Card className="p-8 glass hover:glass-hover transition-all duration-500">
              <h3 className="text-xl font-bold mb-4">Future Goals and Aspirations</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am currently expanding my skill set by exploring advanced full-stack architectures 
               technologies. My focus is on applying these skills to real-world projects, 
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
