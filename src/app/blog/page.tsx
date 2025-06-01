'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePosts } from '@/hooks/usePosts';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

export default function BlogPage() {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
          >
            Latest <span className="text-yellow-500">Insights</span>
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700 stake-card">
                <div className="h-6 bg-slate-700 rounded w-3/4 mb-4 animate-pulse"></div>
                <div className="h-4 bg-slate-700 rounded w-1/2 mb-2 animate-pulse"></div>
                <div className="h-20 bg-slate-700 rounded w-full mb-4 animate-pulse"></div>
                <div className="flex items-center space-x-4">
                  <div className="h-4 bg-slate-700 rounded w-24 animate-pulse"></div>
                  <div className="h-4 bg-slate-700 rounded w-24 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl font-bold mb-4"
          >
            Oops!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-red-400"
          >
            {error}
          </motion.p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-yellow-500">Insights</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore our latest articles, tips, and strategies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="stake-card group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-2xl font-semibold mb-3 text-yellow-500 group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-300 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-400 space-x-6">
                    <div className="flex items-center space-x-2">
                      <FaUser className="text-yellow-500" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaCalendar className="text-yellow-500" />
                      <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <FaArrowRight className="text-yellow-500 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {posts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-slate-400 mb-4">
              No blog posts found.
            </p>
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              <span>Return to homepage</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}