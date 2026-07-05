export interface ProfileInformation {
  firstName: string;
  lastName: string;
  fullName: string;
  displayName: string;
  roles: [string, string]; // Enforces exactly two roles
  location: string;
  country: string;
  avatarUrl?: string;
  email: string;
  githubUrl: string;
  linkedinUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend & DB' | 'Tools & DevOps';
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface Value {
  title: string;
  description: string;
}

export const profileInfo: ProfileInformation = {
  firstName: "Nathanael Jedd",
  lastName: "del Castillo",
  fullName: "Nathanael Jedd N. del Castillo",
  displayName: "Nate",
  roles: ["Aspiring Software Developer", "Leader"],
  location: "Minglanilla, Cebu",
  country: "Philippines",
  avatarUrl: "https://avatars.githubusercontent.com/u/143606848?v=4",
  email: "nathanaeljedd.delcastillo@gmail.com",
  githubUrl: "https://github.com/doinath"
};

export const projects: Project[] = [
  {
    id: "presyoani",
    title: "PresyoAni",
    description: "An offline-capable digital AI assistant that empowers rural producers by providing instant quality grading, market price transparency, and direct access to buyers through Messenger.",
    tags: ["TypeScript", "AI Assistant", "Messenger API", "Offline-Capable"],
    githubUrl: "https://github.com/moisturicer/PresyoAni",
    featured: true
  },
  {
    id: "hardstack-capstone",
    title: "Hardstack Capstone",
    description: "The Adventures of Joe and Marie — a fun, puzzle-filled cooperative 2D platformer game built as a Capstone project.",
    tags: ["Java", "Game Development", "Capstone Project", "OOP"],
    githubUrl: "https://github.com/Smoll05/hardstack-capstone",
    featured: true
  },
  {
    id: "teampythers-alert",
    title: "TeamPythers Alert",
    description: "An emergency website and alert portal designed to coordinate disaster response, report local incidents, and dispatch help requests in real-time.",
    tags: ["HTML5", "CSS3", "JavaScript", "Leaflet Maps", "School Project"],
    githubUrl: "https://github.com/doinath/TeamPythers_Alert",
    featured: false
  },
  {
    id: "teampythers-streamlit",
    title: "TeamPythers Streamlit Analytics",
    description: "An academic data analytics and visualization dashboard built for analysing local environmental and public health metrics, rendering interactive trends and statistics.",
    tags: ["Python", "Streamlit", "Pandas", "Matplotlib", "Data Visualization"],
    githubUrl: "https://github.com/doinath/teampythers_streamlit",
    featured: false
  }
];

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Go", category: "Languages" },
  { name: "HTML5 / CSS3", category: "Languages" },

  // Frontend
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "Vite", category: "Frontend" },

  // Backend & DB
  { name: "Node.js", category: "Backend & DB" },
  { name: "Express.js", category: "Backend & DB" },
  { name: "PostgreSQL", category: "Backend & DB" },
  { name: "Supabase", category: "Backend & DB" },
  { name: "Prisma ORM", category: "Backend & DB" },

  // Tools & DevOps
  { name: "Git & GitHub", category: "Tools & DevOps" },
  { name: "Docker", category: "Tools & DevOps" },
  { name: "WebSockets", category: "Tools & DevOps" },
  { name: "Linux / Bash", category: "Tools & DevOps" }
];

export const education: Education[] = [
  {
    institution: "Cebu Institute of Technology - University",
    degree: "Bachelor of Science in Computer Science",
    period: "2023 - Present",
    location: "Cebu City, Philippines"
  }
];

export const values: Value[] = [
  {
    title: "Leadership & Collaboration",
    description: "Empowering teammates, organizing workflows, and driving engineering consistency through standard guidelines and collaborative communication."
  },
  {
    title: "Continuous Learning",
    description: "Actively exploring modern design patterns, systems architecture, and web standards to deliver highly optimized, accessible software solutions."
  },
  {
    title: "Problem Solving",
    description: "Approaching engineering challenges logically, writing clean self-documenting code, and prioritizing performance and user experience."
  }
];