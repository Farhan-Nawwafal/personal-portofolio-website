import {
  Certification,
  Course,
  Project,
  Skill,
  Event,
  WrittenArticle,
} from "./types";

export const HERO_DATA = {
  name: "Farhan",
  title: "I Build Scalable Code & Extract Data Insights.",
  description:
    "Full-Time Learner & Tech Enthusiast | Bridging Software Engineering, Data Science & Mathematics to Build Scalable Digital Ecosystems.",
  avatarUrl: "images/farhanPhoto.jpg",
  cvUrl: "#",
  githubUrl: "https://github.com/Farhan-Nawwafal",
  linkedinUrl:
    "https://www.linkedin.com/in/farhan-nawwafal-pramudia-858a44287/",
  instagramUrl: "https://www.instagram.com/farhannwwfl/",
  email: "farhan091204@gmail.com",
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "project-1",
    title: "Smart Plant App Monitoring System",
    status: "completed",
    type: "Team Project",
    role: "Backend Developer & Database Architect",
    roleStatus: "Team Leader",
    teamSize: 6,
    description:
      "Led a cross-functional team in developing the 'Smart Plant Monitoring System', an IoT-based application that tracks watering frequency, soil moisture, and ambient temperature in real time. Built interactive line chart data visualizations to allow users to analyze historical trends over the past 7 days.",
    techStack: [
      "JavaScript (Node.js)",
      "Express.js",
      "MySQL",
      "RESTful API",
      "IoT Integration",
    ],
    details: [
      "Led and coordinated a team of 6 members, managing project delegation, system architecture planning, and development timelines to ensure timely delivery.",
      "Designed a relational database schema (MySQL) normalized up to 3NF to maintain high data integrity for sensor logs and optimize historical 7-day data aggregation queries.",
      "Developed secure RESTful API endpoints to handle real-time data transmissions from IoT devices to the web application.",
      "Optimized SQL queries and implemented database indexing on sensor log tables, cutting visualization chart load times by 40% when processing thousands of log entries.",
    ],
    github: "https://github.com/Farhan-Nawwafal/smartPlantApp",
    demo: "#",
  },
  {
    id: "project-2",
    title: "Freelance Point of Sale (POS) Website Systems",
    status: "in-progress",
    type: "Team Project",
    role: "Full-Stack Developer & Database Architect",
    roleStatus: "Team Leader",
    teamSize: 4,
    description:
      "Led the custom development of an existing POS application. Integrated client business requirements into the current system architecture through database structure modifications and full-stack workflow enhancements. Focused on improving cashier user experience and ensuring system reliability for daily operational business activities.",
    techStack: ["Laravel", "JavaScript", "MySQL", "PHP"],
    details: [
      "Conducted regular interviews with the business owner and cashiers to gather real-world requirements, identify operational pain points, and define custom feature specifications.",
      "Facilitated team alignment meetings to breakdown technical requirements, plan upcoming development cycles, and unblock team members by answering technical queries.",
      "Managed project deliverables and sprint progress by establishing and maintaining a structured task-tracking matrix via spreadsheets.",
      "Performed continuous database maintenance, regularly updating database schemas, tables, and column configurations to adapt to changing business workflows and requirements.",
      "Hosted progress review and feedback sessions with the application owner to demonstrate updates and implement iterative revisions based on client feedback.",
    ],
    github: "https://github.com/Farhan-Nawwafal/pos-project",
    demo: "#",
  },
  {
    id: "project-3",
    title: "Heylth - Manage Your Health with This App",
    status: "completed",
    type: "Team Project",
    role: "Full-Stack Developer & Database Architect",
    roleStatus: "Team Leader",
    teamSize: 3,
    description:
      "Led a 3-member team during a Capstone project to build 'Heylth', an MVP health-tracking application aligned with SDG 3 (Good Health and Well-Being). The system enables users to monitor lifestyle metrics—including sleep patterns, daily food intake, and screen time—through an integrated system featuring interactive dashboards, data logging, journals, and health reminders.",
    techStack: [
      "React.js",
      "Express.js",
      "JavaScript (Node.js)",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
    ],
    details: [
      "Served as the Team Leader to oversee the end-to-end development of the MVP app, steering the project direction toward alignment with United Nations' Sustainable Development Goal 3 (SDG 3).",
      "Designed the entire data tier architecture, constructing comprehensive Entity-Relationship Diagrams (ERDs) and relational database schemas to effectively capture users' health metrics and logs.",
      "Engineered scalable server-side business logic and securely integrated frontend interfaces with backend RESTful API endpoints to achieve fluid full-stack data workflows.",
      "Developed user-facing application modules, implementing core features such as personalized analytical dashboards, daily lifestyle input forms, digital journals, and automated reminder alerts.",
    ],
    github: "https://github.com/COFFEE-CODE-COMMUNITY/heylth-fe",
    demo: "https://www.heylth.space/",
  },
  {
    id: "project-4",
    title: "AMATI - Adaptive Mathematics Analysis & Teaching Interactive",
    status: "completed",
    type: "Team Project",
    role: "Data Scientist, Database Architect, Backend Developer",
    roleStatus: "Team Leader",
    teamSize: 5,
    description:
      "Led a 5-member cross-functional team (comprising Data Science, AI, and Full-Stack tracks) to develop 'AMATI', an adaptive learning application tailored for 7th-grade Mathematics under the Accessible & Adaptive Learning theme. Spearheaded the project from initial requirement planning to execution, while driving database engineering and data analytics initiatives.",
    techStack: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Streamlit",
      "Seaborn",
      "MySQL",
      "Prisma ORM",
      "React.js",
      "JavaScript (Node.js)",
      "Express.js",
    ],
    details: [
      "Coordinated end-to-end agile sprint planning and task delegation via Discord for a team of 5, aligning objectives across Full-Stack, Data Science, and AI engineering tracks.",
      "Conducted rigorous market research and secondary data gathering to analyze educational pain points, establishing concrete data-driven evidence on student difficulties in 7th-grade Mathematics.",
      "Collaborated closely with the Full-Stack track to architect the entire data tier, mapping core Entity-Relationship Diagrams (ERDs) and relational database schemas.",
      "Executed full-cycle Data Analytics workflows on specific datasets, spanning from defining core business questions to data gathering, wrangling, analysis, and drawing actionable conclusions.",
      "Developed an interactive web dashboard utilizing Streamlit to visualize data analytics insights and facilitate stakeholders in understanding historical metrics effectively.",
    ],
    github: "https://github.com/Farhan-Nawwafal/amati-app",
    demo: "https://amati-frontend.vercel.app/",
  },
  {
    id: "project-5",
    title: "Task Management Project",
    status: "completed",
    type: "Personal Project",
    role: "Full-Stack Developer & Database Architect",
    roleStatus: "Independent",
    teamSize: 1,
    description:
      "Designed and engineered a solo full-stack task management application featuring intuitive status tracking workflow matrices (Not Started, In Progress, and Done). Developed as an end-to-end personal initiative to expand full-stack technical mastery and practice secure database-to-cloud delivery cycles.",
    techStack: [
      "React.js",
      "Express.js",
      "JavaScript (Node.js)",
      "Prisma ORM",
      "PostgreSQL",
      "Material-UI (MUI)",
      "RESTful API",
      "Cloud Deployment (Vercel & Neon)",
    ],
    details: [
      "Spearheaded the entire product lifecycle independently, from architecting user application flows to UI/UX styling prototyping, asset sourcing, and design reference benchmarking.",
      "Conducted rigorous tech stack analysis and feasibility evaluation to adopt a modern React, Node.js, Prisma, and PostgreSQL ecosystem tailored for seamless status lifecycle updates.",
      "Structured data tier schemas utilizing Prisma ORM, implementing relational logic on serverless PostgreSQL instances via Neon Console to manage tasks and board columns.",
      "Formulated robust backend RESTful API Contracts to establish precise request-response standards for frontend component consumers.",
      "Translated custom design mockups into interactive user interfaces using React.js and Material-UI components, ensuring responsive styling behaviors.",
      "Managed production deployment strategies, establishing continuous web hosting services on Vercel and linking remote database clusters to minimize down-time.",
    ],
    github: "https://github.com/Farhan-Nawwafal/task-management-fe",
    demo: "https://task-management-fe-iota.vercel.app/",
  },
  {
    id: "project-6",
    title: "ReJaFood - Restoran Jawa Modern",
    status: "completed",
    type: "Team Project",
    role: "Full-Stack Developer & Database Architect",
    roleStatus: "Team Leader",
    teamSize: 5,
    description:
      "Led a 5-member engineering team to develop a web-based Restaurant Point of Sales (POS) and Service Management system for a large-scale course project. Spearheaded full-cycle project scheduling, database modeling, and server-side engineering while managing client requirement mapping and cross-functional API integrations.",
    techStack: [
      "JavaScript (Node.js)",
      "React.js",
      "PostgreSQL",
      "Express.js",
      "Tailwind CSS",
    ],
    details: [
      "Served as Team Leader for a 5-member engineering team, managing task delegation, establishing operational project milestones, and tracking end-to-end milestone progress.",
      "Acted as the primary point of contact to present iterative project progress, architecture pipelines, and deliverables directly to the course supervisor and stakeholders.",
      "Oversaw the Software Engineering Documentation life cycle, delegating and review-governing the compilation of formal system design, specification, and testing documents.",
      "Designed and optimized the central relational database tier, constructing logical Entity-Relationship Diagrams (ERDs) and relational schemas to model complex restaurant operational workflows.",
      "Developed robust and secure server-side logic and RESTful API endpoints, collaborating closely with Frontend Developers to smoothly connect and consume data models.",
    ],
    github: "https://github.com/Farhan-Nawwafal/resto-unikom-fe",
    demo: "#",
  },
  {
    id: "project-7",
    title: "Smart Room Environmental Monitoring",
    status: "in-progress",
    type: "Team Project",
    role: "Backend Developer, Database Architect & IoT Engineer",
    roleStatus: "Team Leader",
    teamSize: 5,
    description:
      "Led a 5-member engineering team to develop 'Smart Room Environmental Monitoring', an IoT and cloud-integrated system that automates environment controls based on real-time ambient data. Managed the entire product delivery using SDLC principles and tracker matrices, while engineering serverless backend routines and microcontroller logic.",
    techStack: [
      "Arduino (C/C++)",
      "Firebase Cloud Firestore",
      "Firebase Cloud Functions",
      "JavaScript (Node.js)",
      "Express.js",
      "React.js",
    ],
    details: [
      "Served as Team Leader for a 5-member cross-functional team, overseeing task delegation, establishing structured Git workflows via GitHub, and tracking SDLC milestone velocity via spreadsheets.",
      "Facilitated procurement and feasibility discussions with IoT hardware engineers to evaluate hardware architectures and establish the required sensor-actuator bill of materials.",
      "Architected the cloud database tier by provisioning Firebase Cloud Firestore to store unstructured, real-time telemetry logs streaming from physical microcontrollers.",
      "Engineered serverless backend business logic utilizing Firebase Cloud Functions and Node.js to trigger event-driven event handlers directly in the cloud.",
      "Developed embedded microcontroller firmware in Arduino C/C++ to build responsive, delay-free control loops that read environment parameters and execute hardware responses.",
      "Integrated edge-to-cloud telemetry pipelines, establishing secure data-transmission protocols from the physical Arduino architecture straight into Cloud Firestore.",
    ],
    github: "https://github.com/Farhan-Nawwafal/smart-room-iot-komawan2",
    demo: "#",
  },
];

export const SKILLS_DATA: Skill[] = [
  // Frontend & Mobile
  { name: "React.js", category: "frontend-mobile", iconName: "React" },
  {
    name: "Laravel",
    category: "frontend-mobile",
    iconName: "Smartphone",
  },
  { name: "Tailwind CSS", category: "frontend-mobile", iconName: "Wind" },
  { name: "Bootstrap", category: "frontend-mobile", iconName: "" },
  { name: "JavaScript", category: "frontend-mobile", iconName: "Code2" },
  { name: "Kotlin", category: "frontend-mobile", iconName: "Tablet" },

  // Backend & DB
  { name: "Node.js", category: "backend-db", iconName: "Cpu" },
  { name: "Express.js", category: "backend-db", iconName: "Server" },
  { name: "Laravel", category: "backend-db", iconName: "Globe" },
  { name: "PostgreSQL", category: "backend-db", iconName: "Database" },
  { name: "MySQL", category: "backend-db", iconName: "Database" },
  { name: "Prisma ORM", category: "backend-db", iconName: "Layers" },

  // Data Science & AI
  { name: "Python", category: "data-science-ai", iconName: "LineChart" },
  { name: "NumPy", category: "data-science-ai", iconName: "Binary" },
  { name: "Pandas", category: "data-science-ai", iconName: "BarChart3" },
  { name: "Matplotlib", category: "data-science-ai", iconName: "Sparkles" },
  { name: "Seaborn", category: "data-science-ai", iconName: "Brain" },

  // Google Cloud Platform
  { name: "Cloud Firestore", category: "google-cloud", iconName: "Layers" },
  { name: "Cloud Functions", category: "google-cloud", iconName: "Layers" },
];

// === Learning Hub Data ===

export const CERTIFICATIONS_DATA: Certification[] = [];

export const COURSES_DATA: Course[] = [];

export const EVENTS_DATA: Event[] = [
  {
    id: "event-1",
    title: "Google Developer Group (GDG) DevFest Bandung 2023",
    description:
      "Menghadiri pertemuan teknologi tahunan yang membahas Android, Flutter, Cloud, AI/ML,Firebase, and Web yang dipresentasikan oleh para pakar di bidangnya masing-masing.",
    status: "Attended",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&h=350&q=80",
    location: "Maranatha University",
    eventType: "Tech Event",
    date: "Desember 2023",
  },
  {
    id: "event-2",
    title: "Google Developer Group (GDG) DevFest Bandung 2024",
    description:
      "Menghadiri pertemuan teknologi tahunan yang membahas AI with Ethics: Transforming Technology for Humanity yang dibawakan oleh para expertnya masing-masing.",
    status: "Attended",
    imageUrl:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&h=350&q=80",
    location: "Maranatha University",
    eventType: "Tech Event",
    date: "December, 2024",
  },
  {
    id: "event-3",
    title: "BRIN AIDeaNation",
    description:
      "Lomba yang membawakan tema AI For Sustainable Future. Tujuan nya untuk menggali potensi dan inovasi berbasis AI untuk masa depan yang berkelanjutan.",
    status: "In Progress",
    imageUrl: "/images/events/brin-ai-2026.png",
    location: "Online Competition",
    eventType: "Competition Event",
    date: "July 25, 2026",
  },
  {
    id: "event-4",
    title: "International Student Conference UNIKOM",
    description:
      "Kegiatan tahunan yang diselenggarakan oleh UNIKOM dengan tujuan mengundang mahasiswa untuk memberikan hasil risetnya sekarang, yang berfokus pada beberapa tema seperti Earth, Environmental Science and Technology, dan dan lain-lain.",
    status: "In Progress",
    imageUrl: "/images/events/isceer-2026.png",
    location: "Offline Conference",
    eventType: "Academic Event",
    date: "Maret 2026",
  },
  {
    id: "event-5",
    title: "Coding Camp Powered By DBS Foundation 2026",
    description:
      "Program pelatihan dalam bidang Gen AI Engineer, Data Scientist, dan Full-Stack Web Developer, AI Engineer, serta mencakup soft skills dan literasi keuangan. Tujuannya adalah mempersiapkan peserta secara menyeluruh untuk memasuki dunia kerja dengan menggabungkan keterampilan teknis dan keahlian tambahan yang penting bagi kesuksesan profesional.",
    status: "In Progress",
    imageUrl: "/images/events/cc-2026.png",
    location: "Online",
    eventType: "Tech Event",
    date: "Feb - June 2026",
  },
  {
    id: "event-6",
    title: "Kuliah Umum: Advancing Computer Science Research through Artificial Intelligence",
    description:
      "Seminar offline yang membahas tentang bagaimana memanfaatkan AI untuk melakukan suatu riset dengan mempertimbangkan Etika juga.",
    status: "Attended",
    imageUrl: "/images/events/kuliah-umum.jpeg",
    location: "Offline Seminar",
    eventType: "Academic Event",
    date: "July 3, 2026",
  },
];

export const ARTICLES_DATA: WrittenArticle[] = [
  {
    id: "art-1",
    title: "Dari Pecandu Game ke Pembelajar Tanpa Batas: Sebuah Awal Baru",
    description:
      "Cerita tentang aku yang awalnya tidak berminat sama sekali di bidang pendidikan. Hingga akhirnya ketemu satu momen yang membuat aku sadar bahwa pendidikan menjadi sepenting itu.",
    status: "Published",
    readTime: "2 min read",
    url: "https://medium.com/@farhan091204/dari-pecandu-game-ke-pembelajar-tanpa-batas-sebuah-awal-baru-b5e39d9bfc88?sharedUserId=farhan091204",
    date: "16 Mei 2026",
  },
  {
    id: "art-2",
    title:
      "The Ostrich Effect: Kenapa Kita Sengaja Mengabaikan Tanggung Jawab yang Jelas Penting",
    description:
      "Penjelasan dengan pendekatan sains yang membahas, kenapa kita terasa takut untuk keluar dari zona nyaman yang membuat kita bisa berkembang.",
    status: "Published",
    readTime: "4 min read",
    url: "https://medium.com/@farhan091204/the-ostrich-effect-kenapa-kita-sengaja-mengabaikan-tanggung-jawab-yang-jelas-penting-e5cbf13fffd3?sharedUserId=farhan091204",
    date: "5 Juli 2026",
  },
  {
    id: "art-3",
    title:
      "Kutukan Keahlian: Semakin Kamu Tahu, Semakin Kamu Buta terhadap Kesalahanmu Sendiri",
    description:
      "Penjelasan kenapa kita merasa pekerjaan yang kita lakukan, dirasa sudah benar. Tapi, orang lain bisa lihat kekurangannya secara objektif.",
    status: "In Progress",
    readTime: "Sedang Ditulis",
    url: "",
    date: "Estimasi rilis 19 Juli 2026",
  },
];
