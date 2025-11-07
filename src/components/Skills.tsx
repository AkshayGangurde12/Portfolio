import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Palette, 
  Terminal,
  FileCode,
  Layers,
  Cpu,
  GitBranch,
  Monitor,
  Figma as FigmaIcon
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
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
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
    <section id="skills" className="py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
            <motion.div key={category.title} variants={categoryVariants}>
              <Card className="p-6 glass hover:glass-hover transition-all duration-500 h-full group">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-xl group-hover/skill:scale-125 transition-transform duration-200">
                            {skill.icon}
                          </span>
                          <span className="font-medium text-sm">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">
                          {skill.proficiency}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
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

                {/* Floating particles effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${category.color} rounded-full opacity-0 group-hover:opacity-60`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [-10, -20, -10],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
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
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Additional Technologies</h3>
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
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
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default glass"
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
