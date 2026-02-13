import React from 'react';
import { motion } from 'framer-motion';
import gif from '../assets/images/weld.gif';
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
        className="flex flex-col items-center justify-center py-12"
      >
        <img src={gif} alt="Loading" className="w-64 mt-10" />
        <p className="text-xl text-gray-600 mt-8">Coming soon...</p>
      </motion.div>

      {/* 
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </motion.div>
      */}
    </div>
  );
};

export default BlogListPage;