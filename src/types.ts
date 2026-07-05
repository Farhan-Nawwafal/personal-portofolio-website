export type ProjectStatus = "completed" | "in-progress" | "future";
export type ProjectType = "Personal Project" | "Team Project";
export type RoleStatus = "Team Leader" | "Team Member" | "Independent" | "R&D";
export type SkillCategory =
  | "frontend-mobile"
  | "backend-db"
  | "data-science-ai"
  | "google-cloud";

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
