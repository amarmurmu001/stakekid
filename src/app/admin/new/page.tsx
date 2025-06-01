'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { usePosts } from '@/hooks/usePosts';

export default function NewPost() {
  const router = useRouter();
  const { createPost } = usePosts();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const title = formData.get('title') as string;
    const author = formData.get('author') as string;
    const excerpt = formData.get('excerpt') as string;
    const content = formData.get('content') as string;
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    try {
      const success = await createPost({
        title,
        author,
        excerpt,
        content,
        slug,
      });

      if (success) {
        router.push('/admin');
      } else {
        setError('Failed to create post');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            href="/admin"
            className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back to Admin
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800 rounded-lg p-6"
        >
          <h1 className="text-2xl font-bold mb-6">Create New Post</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                maxLength={60}
                className="w-full px-3 py-2 bg-slate-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="author" className="block text-sm font-medium mb-2">
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                required
                className="w-full px-3 py-2 bg-slate-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
                Excerpt
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                required
                maxLength={200}
                rows={3}
                className="w-full px-3 py-2 bg-slate-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium mb-2">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                required
                rows={10}
                className="w-full px-3 py-2 bg-slate-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>

            {error && (
              <div className="text-red-400 text-sm">{error}</div>
            )}

            <div className="flex justify-end space-x-4">
              <Link
                href="/admin"
                className="px-4 py-2 text-slate-300 hover:text-white transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating...' : 'Create Post'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}