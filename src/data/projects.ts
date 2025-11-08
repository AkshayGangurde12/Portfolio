export interface Project {
  title: string;
  description: string;
  challenge: string;
  myRole: string;
  keyFeatures: string[];
  tech: string[];
  images: string[];
  liveDemo: string;
  github: string;
  stats?: {
    stars: number;
    forks: number;
    watchers: number;
  };
  caseStudy: {
    problem: string;
    solution: string;
    impact: string;
  };
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "Online Farmer Management & Auction Platform",
    description: "Comprehensive web application enabling farmers to sell produce through real-time auction system with inventory management and automated record-keeping.",
    challenge: "Farmers lacked direct market access and struggled with fair pricing in traditional selling methods, leading to dependency on middlemen and reduced profits.",
    myRole: "Full-Stack Developer - Designed and implemented the complete application from database architecture to user interface, including real-time auction system.",
    keyFeatures: [
      "Real-time bidding system with WebSocket integration for live auctions",
      "Secure payment gateway integration for seamless transactions",
      "Comprehensive inventory management dashboard with analytics",
      "Automated transaction history and detailed reporting system",
      "User authentication with role-based access control"
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
    images: [
      "/farm-management-screenshot.png",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    liveDemo: "https://farmer-platform-demo.com",
    github: "https://github.com/AkshayGangurde12/farm-management-system",
    stats: { stars: 24, forks: 8, watchers: 12 },
    caseStudy: {
      problem: "Farmers struggled with traditional selling methods, lacking direct market access and fair pricing mechanisms.",
      solution: "Built a comprehensive platform with real-time auctions, inventory tracking, secure payments, and transparent pricing.",
      impact: "Increased farmer income by 30% and reduced middleman dependency by 60%, empowering over 100+ farmers."
    },
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "Doctor Appointment System",
    description: "Healthcare web application with blockchain-enhanced security, featuring multi-tier authentication and real-time doctor-patient communication.",
    challenge: "Healthcare systems lacked secure, efficient appointment booking with proper patient data management and real-time communication capabilities.",
    myRole: "Full-Stack Developer - Developed the complete MERN stack application with focus on security, authentication, and real-time features.",
    keyFeatures: [
      "Multi-factor authentication with OTP and Google OAuth integration",
      "Real-time chat functionality for doctor-patient communication",
      "Role-based access control for patients, doctors, and administrators",
      "Secure document management system for medical records",
      "Appointment scheduling with automated reminders"
    ],
    tech: ["MERN Stack", "Google Auth", "WebSocket", "OAuth", "Blockchain"],
    images: [
      "/Screenshot 2025-11-07 163951.png",
      "/placeholder.svg"
    ],
    liveDemo: "https://github.com/AkshayGangurde12/biotran22",
    github: "https://github.com/AkshayGangurde12/biotran22",
    stats: { stars: 18, forks: 5, watchers: 8 },
    caseStudy: {
      problem: "Healthcare systems lacked secure, efficient appointment booking with proper patient data management and communication.",
      solution: "Developed blockchain-secured platform with multi-factor authentication, real-time communication, and comprehensive data management.",
      impact: "Reduced appointment booking time by 70% and improved data security compliance by 95%, serving 500+ users."
    },
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Attendance Management System",
    description: "An Attendance Management System built using the MERN stack with IBM Db2 as the database, efficiently tracking and managing student attendance records.",
    challenge: "Educational institutions relied on manual, error-prone attendance processes with fragmented records, causing inaccurate reporting and poor visibility into student engagement.",
    myRole: "Full-Stack Developer - Architected and developed the complete system including database design, backend APIs, and responsive frontend interfaces.",
    keyFeatures: [
      "Separate login portals for students and teachers with role-based access",
      "Real-time attendance tracking and marking system",
      "Automated report generation with analytics and insights",
      "Bulk import/export functionality for attendance data",
      "Dashboard with attendance trends and absentee alerts"
    ],
    tech: ["React", "Node.js", "Express.js", "IBM Db2", "REST APIs"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    liveDemo: "https://analytics-dashboard-demo.com",
    github: "https://github.com/AkshayGangurde12/Attendance",
    stats: { stars: 32, forks: 12, watchers: 18 },
    caseStudy: {
      problem: "Manual attendance processes were error-prone, time-consuming, and provided poor visibility into student engagement patterns.",
      solution: "Built a web-based system with real-time tracking, automated reporting, role-based dashboards, and analytics for trend identification.",
      impact: "Reduced manual processing time by 70%, increased record accuracy to 99%+, and enabled early identification of at-risk students."
    },
    gradient: "from-green-500/10 to-emerald-500/10",
  },
];
