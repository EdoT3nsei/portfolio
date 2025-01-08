// src/data/blog.ts
import { BlogPost } from '../types/blog';
import cover1 from '../assets/images/map_1.jpg';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React",
    category: "Development",
    image: cover1,
    description: "Learn the basics of React development",
    date: "2024-03-15",
    tags: ["React", "JavaScript", "Web Development"],
    filePath: "post1.md"
  },
  // Add more blog posts...
];