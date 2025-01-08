import React from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogs';
import BlogCard from '../components/blog/BlogCard';

const BlogListPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Blog
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </motion.div>
    </div>
  );
};

export default BlogListPage;