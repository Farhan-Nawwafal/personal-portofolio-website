export type ProjectStatus = "completed" | "in-progress" | "future";
export type ProjectType = "Personal Project" | "Team Project";
export type RoleStatus = "Team Leader" | "Team Member" | "Independent" | "R&D";
export type SkillCategory =
  | "frontend-mobile"
  | "backend-db"
  | "data-science-ai"
  | "google-cloud";
export type CertificationStatus = "Completed";
export type CourseStatus = "Ongoing" | "Completed";
export type EventStatus = "Attended" | "In Progress";
export type ArticleStatus = "Published" | "In Progress" | "Idea";
export type EventType =
  | "Tech Event"
  | "Competition Event"
  | "Fellowship Event"
  | "Community Event"
  | "Academic Event";

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  type: ProjectType;
  role: string;
  roleStatus: RoleStatus;
  teamSize: number;
  description: string;
  techStack: string[];
  details?: string[];
  github?: string;
  demo?: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  iconName: string;
}

export interface Certification {
  id: string;
  title: string;
  provider: string;
  description: string;
  status: CertificationStatus;
  imageUrl: string;
  credentialUrl?: string;
}

export interface Course {
  id: string;
  title: string;
  platform: string;
  description: string;
  status: CourseStatus;
  imageUrl: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  status: EventStatus;
  imageUrl: string;
  location: string;
  eventType: EventType;
  date: string;
}

export interface WrittenArticle {
  id: string;
  title: string;
  description: string;
  status: ArticleStatus;
  readTime?: string;
  url?: string;
  date?: string;
}
