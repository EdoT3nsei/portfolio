interface Collaborator {
  name: string;
  website: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  thumbnail: string;
  description: string;
  fullDescription?: string;
  client?: string;
  clientUrl?: string;
  date?: string;
  tools?: string[];
  gallery?: string[];
  collaborators?: Collaborator[];
}