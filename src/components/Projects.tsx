import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, Star, GitFork, Users, ChevronDown, ChevronUp, X, Play, Code2, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [expandedCaseStudy, setExpandedCaseStudy] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const projects = [
    {
      title: "Online Farmer Management & Auction Platform",
      description:
        "Comprehensive web application enabling farmers to sell produce through real-time auction system with inventory management and automated record-keeping.",
      images: [
        "/farm-management-screenshot.png",
        "/placeholder.svg",
        "/placeholder.svg"
      ],
      features: [
        "Real-time auction system",
        "Inventory management", 
        "Transaction history",
        "User authentication",
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      liveDemo: "https://farmer-platform-demo.com",
      github: "https://github.com/AkshayGangurde12/farm-management-system",
      stats: { stars: 24, forks: 8, watchers: 12 },
      caseStudy: {
        problem: "Farmers struggled with traditional selling methods, lacking direct market access and fair pricing.",
        solution: "Built a comprehensive platform with real-time auctions, inventory tracking, and secure payments.",
        impact: "Increased farmer income by 30% and reduced middleman dependency by 60%."
      },
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      title: "Doctor Appointment System",
      description:
        "Healthcare web application with blockchain-enhanced security, featuring multi-tier authentication and real-time doctor-patient communication.",
      images: [
        "/Screenshot 2025-11-07 163951.png",
        "/placeholder.svg"
      ],
      features: [
        "OTP & Google OAuth authentication",
        "Real-time chat functionality", 
        "Role-based access control",
        "Document management system",
      ],
      tech: ["MERN Stack", "Google Auth", "WebSocket", "OAuth"],
      liveDemo: "https://github.com/AkshayGangurde12/biotran22",
      github: "https://github.com/AkshayGangurde12/biotran22",
      stats: { stars: 18, forks: 5, watchers: 8 },
      caseStudy: {
        problem: "Healthcare systems lacked secure, efficient appointment booking with proper patient data management.",
        solution: "Developed blockchain-secured platform with multi-factor authentication and real-time communication.",
        impact: "Reduced appointment booking time by 70% and improved data security compliance by 95%."
      },
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      title: "Attendance Management System",
      description:
        "An Attendance Management System built using the MERN stack with IBM Db2 as the database efficiently tracks, manages, and stores student attendance records. It ensures accurate data handling, easy monitoring, and seamless access for administrators and teachers, with separate login portals for both students and teachers.",
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg"
      ],
      features: [
        "Student & Teacher login portals",
        "Real-time attendance tracking",
        "Automated report generation",
        "Role-based access control",
      ],
      tech: ["React", "Node.js", "Express.js", "IBM Db2"],
      liveDemo: "https://analytics-dashboard-demo.com",
      github: "https://github.com/AkshayGangurde12/Attendance",
      stats: { stars: 32, forks: 12, watchers: 18 },
      caseStudy: {
        problem: "Educational institutions relied on manual, error-prone attendance processes and fragmented records, causing inaccurate reporting, slow audits, and poor visibility into student engagement.",
        solution: "Developed a web-based Attendance Management System using the MERN stack with IBM Db2 as the backend; features include separate student and teacher login portals, real-time attendance capture, bulk import/export, role-based dashboards, and analytics for trends and absentee alerts.",
        impact: "Reduced manual attendance processing time by 70%, increased record accuracy to over 99%, and improved early-identification of at-risk students—enabling timely interventions and better classroom outcomes."
      },
      gradient: "from-green-500/10 to-emerald-500/10",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-20 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden project-card glass group h-full flex flex-col">
                {/* Image Gallery */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                  <motion.img
                    src={project.images[0]}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110"
                    onClick={() => setLightboxImage(project.images[0])}
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Image count indicator */}
                  {project.images.length > 1 && (
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white">
                      <Eye className="w-3 h-3 inline mr-1" />
                      {project.images.length}
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                    {project.stats && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="w-3 h-3" />
                        {project.stats.stars}
                      </div>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* GitHub Stats */}
                  {project.stats && (
                    <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {project.stats.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        {project.stats.forks}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {project.stats.watchers}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2 mb-4">
                    <Button 
                      size="sm" 
                      className="flex-1 group/btn"
                      asChild
                    >
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <Play className="w-3 h-3 mr-1 group-hover/btn:translate-x-0.5 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      asChild
                    >
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`View source code of ${project.title}`}
                      >
                        <Code2 className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>

                  {/* Case Study Toggle */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full mb-4 text-xs"
                    onClick={() => setExpandedCaseStudy(expandedCaseStudy === index ? null : index)}
                    aria-expanded={expandedCaseStudy === index}
                    aria-label={`${expandedCaseStudy === index ? 'Hide' : 'Show'} case study for ${project.title}`}
                  >
                    <FileText className="w-3 h-3 mr-1" />
                    Case Study
                    {expandedCaseStudy === index ? (
                      <ChevronUp className="w-3 h-3 ml-1" />
                    ) : (
                      <ChevronDown className="w-3 h-3 ml-1" />
                    )}
                  </Button>

                  {/* Expandable Case Study */}
                  <AnimatePresence>
                    {expandedCaseStudy === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4 space-y-3 text-xs"
                      >
                        <div>
                          <h5 className="font-semibold text-primary mb-1">Problem</h5>
                          <p className="text-muted-foreground">{project.caseStudy.problem}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-primary mb-1">Solution</h5>
                          <p className="text-muted-foreground">{project.caseStudy.solution}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-primary mb-1">Impact</h5>
                          <p className="text-muted-foreground">{project.caseStudy.impact}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs badge-pulse hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              onClick={() => setLightboxImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-[90vh] p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImage}
                  alt="Project screenshot"
                  className="w-full h-full object-contain rounded-lg"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={() => setLightboxImage(null)}
                  aria-label="Close lightbox"
                >
                  <X className="w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
