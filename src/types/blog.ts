export interface BlogPost {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    date: string;
    tags?: string[];
    filePath: string;
  }