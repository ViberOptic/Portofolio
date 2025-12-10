export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image_url?: string;
  demo_url?: string;
  repo_url?: string;
  created_at?: string;
}