// Types pour les données Supabase

export interface Project {
  id: number;
  created_at: string;
  title: string;
  slug: string;
  description: string;
  long_description?: string;
  image_url: string;
  category: "web" | "design" | "video" | "communication";
  tags: string[];
  link?: string;
  github_url?: string;
  featured: boolean;
  order: number;
}

export interface Experience {
  id: number;
  created_at: string;
  title: string;
  company: string;
  location: string;
  start_date: string;
  end_date?: string;
  current: boolean;
  description: string[];
  type: "work" | "education";
  order: number;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  level: number;
  category: "design" | "video" | "dev" | "productivity";
  order: number;
}

export interface Profile {
  id: number;
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  linkedin_url?: string;
  github_url?: string;
  cv_url?: string;
  profile_image_url?: string;
  tags: string[];
}

// Types pour la base de données Supabase
export interface Database {
  public: {
    Tables: {
      projects: {
        Row: Project;
        Insert: Omit<Project, "id" | "created_at">;
        Update: Partial<Omit<Project, "id" | "created_at">>;
      };
      experiences: {
        Row: Experience;
        Insert: Omit<Experience, "id" | "created_at">;
        Update: Partial<Omit<Experience, "id" | "created_at">>;
      };
      skills: {
        Row: Skill;
        Insert: Omit<Skill, "id">;
        Update: Partial<Omit<Skill, "id">>;
      };
      profile: {
        Row: Profile;
        Insert: Omit<Profile, "id">;
        Update: Partial<Omit<Profile, "id">>;
      };
    };
  };
}
