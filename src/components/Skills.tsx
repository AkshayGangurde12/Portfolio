import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Database, 
  Globe, 
  Server, 
  Terminal
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5", icon: "🌐", proficiency: 90 },
        { name: "CSS3", icon: "🎨", proficiency: 85 },
        { name: "JavaScript", icon: "⚡", proficiency: 88 },
        { name: "React.js", icon: "⚛️", proficiency: 85 },
      ]
    },
    {
      title: "Backend Development", 
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: "🟢", proficiency: 80 },
        { name: "Express.js", icon: "🚀", proficiency: 82 },
        { name: "C++", icon: "⚙️", proficiency: 75 },
      ]
    },
    {
      title: "Database & Storage",
      icon: Database, 
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", icon: "🍃", proficiency: 78 },
        { name: "MySQL", icon: "🐬", proficiency: 80 },
        { name: "SQL", icon: "📊", proficiency: 85 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Terminal,
      color: "from-orange-500 to-red-500", 
      skills: [
        { name: "Git", icon: "📝", proficiency: 85 },
        { name: "GitHub", icon: "🐙", proficiency: 88 },
        { name: "VS Code", icon: "💻", proficiency: 90 },
        { name: "Figma", icon: "🎯", proficiency: 70 },
        { name: "PyCharm", icon: "🐍", proficiency: 75 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise across different domains of software development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title} 
              variants={categoryVariants}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card/70 transition-all duration-500 h-full group rounded-2xl shadow-lg hover:shadow-xl">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className={`p-3 md:p-4 rounded-xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <category.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4 md:space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-xl md:text-2xl group-hover/skill:scale-110 transition-transform duration-200">
                            {skill.icon}
                          </span>
                          <span className="font-medium text-sm md:text-base text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-xs md:text-sm text-muted-foreground/80 font-mono font-semibold">
                          {skill.proficiency}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-background/50 rounded-full h-2 md:h-2.5 overflow-hidden border border-border/30">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Additional <span className="text-primary">Technologies</span>
          </h3>
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              "TypeScript", "Tailwind CSS", "Bootstrap", "REST APIs", 
              "GraphQL", "Docker", "AWS", "Firebase", "Vercel", "Netlify"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Badge
                  variant="outline"
                  className="px-4 md:px-5 py-2 md:py-2.5 text-sm md:text-base font-medium hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all cursor-default bg-card/50 backdrop-blur-sm border-border/50"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
