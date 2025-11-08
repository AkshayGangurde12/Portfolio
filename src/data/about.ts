import { 
  Lightbulb, 
  Users, 
  MessageSquare, 
  Target,
  Zap,
  Heart,
  GraduationCap,
  FolderGit2,
  Code2,
  Trophy,
  LucideIcon
} from "lucide-react";

export interface SoftSkill {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AboutContent {
  bio: string;
  whyIBuild: string;
  whatDrivesMe: string[];
  softSkills: SoftSkill[];
  stats: Array<{
    icon: LucideIcon;
    value: string;
    label: string;
  }>;
}

export const aboutContent: AboutContent = {
  bio: "I'm Akshay Gangurde, a final year Computer Engineering student at Vishwakarma Institute of Information Technology, Pune. With a deep passion for technology, I specialize in Full-Stack Development using the MERN stack and am constantly exploring innovative solutions in real-time systems. I thrive on solving real-world problems through innovation and efficiency. Whether it's building impactful projects or participating in hackathons, I'm committed to pushing boundaries and contributing to solutions that make a difference.",
  
  whyIBuild: "I build software because I believe technology should simplify lives, not complicate them. Every line of code I write is aimed at solving real problems and creating meaningful impact. I'm driven by the challenge of transforming complex requirements into elegant, user-friendly solutions that people actually enjoy using. Whether it's helping farmers get fair prices or making healthcare more accessible, I see software development as a powerful tool for positive change.",
  
  whatDrivesMe: [
    "Simplifying complex workflows into intuitive, user-friendly interfaces",
    "Building scalable systems that grow seamlessly with user needs",
    "Creating real-time experiences that feel instant and responsive",
    "Continuous learning and staying current with emerging technologies",
    "Solving real-world problems that make a tangible difference",
    "Writing clean, maintainable code that other developers appreciate"
  ],
  
  softSkills: [
    {
      title: 'Problem Solving',
      description: 'Breaking down complex challenges into manageable, actionable solutions with systematic thinking',
      icon: Lightbulb
    },
    {
      title: 'Team Collaboration',
      description: 'Working effectively with cross-functional teams, sharing knowledge, and contributing to collective success',
      icon: Users
    },
    {
      title: 'Communication',
      description: 'Translating technical concepts into clear language for diverse audiences, from developers to stakeholders',
      icon: MessageSquare
    },
    {
      title: 'Adaptability',
      description: 'Quickly learning new technologies and adapting to changing project requirements with flexibility',
      icon: Zap
    },
    {
      title: 'Attention to Detail',
      description: 'Ensuring code quality, catching edge cases, and delivering polished, bug-free applications',
      icon: Target
    },
    {
      title: 'User Empathy',
      description: 'Understanding user needs and pain points to create solutions that truly serve their requirements',
      icon: Heart
    }
  ],
  
  stats: [
    {
      icon: GraduationCap,
      value: "7.06 CGPA",
      label: "Current semester academic excellence",
    },
    {
      icon: FolderGit2,
      value: "3+ Projects",
      label: "Built with MERN stack and real-time features",
    },
    {
      icon: Code2,
      value: "10+ Skills",
      label: "Full-stack development expertise",
    },
    {
      icon: Trophy,
      value: "5+ Certifications",
      label: "Industry-recognized achievements",
    },
  ]
};
