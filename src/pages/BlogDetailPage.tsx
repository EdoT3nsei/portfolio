import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogs';
import { loadMarkdown } from '../utils/loadMarkdown';
import '../styles/markdown.css'; // Import the custom CSS

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === Number(id));
  const [contentHtml, setContentHtml] = useState<string>('');

  useEffect(() => {
    if (post) {
      loadMarkdown(post.filePath).then(({ contentHtml }) => {
        setContentHtml(contentHtml);
      });
    }
  }, [post]);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link to="/blog" className="text-red-600 hover:text-red-500">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Link
        to="/blog"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Blog
      </Link>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
        />

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center space-x-4 mb-8">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-red-700 mr-2" />
            <span className="text-gray-600">{post.date}</span>
          </div>
          
        </div>
        {post.tags && (
          <div className="mt-8 flex items-center gap-2">
            <Tag className="h-5 w-5 text-red-700" />
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="markdown-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />

        
      </motion.article>
    </div>
  );
};

export default BlogDetailPage;