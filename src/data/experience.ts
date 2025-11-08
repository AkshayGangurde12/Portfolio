import { LucideIcon } from "lucide-react";

export interface ExperienceEntry {
  type: 'work' | 'internship' | 'freelance' | 'education';
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  achievements: string[];
  technologies?: string[];
  logo?: string;
}

export interface ExperienceData {
  work: ExperienceEntry[];
  education: ExperienceEntry[];
}

// Work experience entries (internships, jobs, freelance)
export const workExperience: ExperienceEntry[] = [
  // Add your work experience here
  // Example:
  // {
  //   type: 'internship',
  //   title: 'Full-Stack Developer Intern',
  //   organization: 'Company Name',
  //   location: 'Pune, India',
  //   startDate: '2024-06',
  //   endDate: '2024-08',
  //   description: 'Developed and maintained web applications using MERN stack',
  //   achievements: [
  //     'Built RESTful APIs serving 10,000+ daily requests',
  //     'Improved application performance by 40%',
  //     'Collaborated with team of 5 developers'
  //   ],
  //   technologies: ['React', 'Node.js', 'MongoDB', 'Express']
  // }
];

// Education entries
export const education: ExperienceEntry[] = [
  {
    type: 'education',
    title: 'B.Tech in Computer Engineering',
    organization: 'Vishwakarma Institute of Information Technology',
    location: 'Pune, Maharashtra',
    startDate: '2021',
    endDate: '2025',
    description: 'Specialization in Full-Stack Development and Real-Time Systems',
    achievements: [
      'Current CGPA: 7.06',
      'Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management',
      'Active participant in technical events and hackathons'
    ]
  }
];

export const experienceData: ExperienceData = {
  work: workExperience,
  education: education
};
