// src/components/blog/BlogCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}`}>
      <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        <div className="relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-burgundy-950/0 group-hover:bg-burgundy-950/10 transition-colors duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mt-2">{post.title}</h3>
          <div className="flex flex-wrap mt-2">
            {post.tags && post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-600 mt-2">{post.description}</p>
          <div className="flex items-center mt-4">
            <p className="text-sm text-gray-500">{post.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;