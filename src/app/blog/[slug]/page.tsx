'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

interface Post {
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/slug/${params.slug}`);
      if (!response.ok) throw new Error('Failed to fetch post');
      const data = await response.json();
      setPost(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch post');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="h-8 w-32 bg-slate-800 rounded-lg mb-8 animate-pulse"></div>
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-slate-800 rounded-xl w-3/4"></div>
            <div className="flex items-center space-x-6">
              <div className="h-6 bg-slate-800 rounded w-32"></div>
              <div className="h-6 bg-slate-800 rounded w-40"></div>
            </div>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-slate-800 rounded w-full"></div>
              ))}
              <div className="h-4 bg-slate-800 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="bg-red-500/10 border border-red-500 rounded-xl p-6 mb-8">
              <p className="text-red-500 text-lg">{error || 'Post not found'}</p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-yellow-500 hover:text-yellow-400 transition-colors group"
            >
              <FaArrowLeft className="transform group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blog</span>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="stake-card p-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-yellow-500 hover:text-yellow-400 transition-colors group mb-8"
          >
            <FaArrowLeft className="transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-yellow-500"
          >
            {post.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 text-slate-400 mb-12 border-b border-slate-700 pb-6"
          >
            <div className="flex items-center space-x-2">
              <FaUser className="text-yellow-500" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCalendar className="text-yellow-500" />
              <span>
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="prose prose-invert prose-yellow max-w-none prose-lg"
          >
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-slate-300">{paragraph}</p>
            ))}
          </motion.div>
        </motion.article>
      </div>
    </div>
  );
}