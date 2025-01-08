interface Collaborator {
  name: string;
  website: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription?: string;
  client?: string;
  date?: string;
  tools?: string[];
  gallery?: string[];
  collaborators?: Collaborator[];
}