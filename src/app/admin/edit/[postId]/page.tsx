'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { usePosts } from '@/hooks/usePosts';
import RichTextEditor from '@/components/RichTextEditor';

interface Post {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  slug: string;
}

export default function EditPost({ params }: { params: { postId: string } }) {
  const router = useRouter();
  const { updatePost } = usePosts();
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/${params.postId}`);
      if (!response.ok) throw new Error('Failed to fetch post');
      const data = await response.json();
      setPost(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch post');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!post) return;

    const updatedData = {
      title: post.title,
      author: post.author,
      excerpt: post.excerpt,
      content: post.content,
      slug: post.slug,
    };

    const success = await updatePost(post._id, updatedData);
    if (success) {
      router.push('/admin');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-slate-800 rounded w-1/4"></div>
            <div className="h-12 bg-slate-800 rounded w-3/4"></div>
            <div className="h-32 bg-slate-800 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 mb-8">
            <p className="text-red-500">{error || 'Post not found'}</p>
          </div>
          <Link
            href="/admin"
            className="inline-flex items-center text-sm text-slate-400 hover:text-white transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back to Admin Panel
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Edit Post</h1>
          <Link
            href="/admin"
            className="inline-flex items-center text-sm text-slate-400 hover:text-white transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back to Admin Panel
          </Link>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-slate-800 rounded-lg p-6"
        >
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              required
              className="w-full bg-slate-900 rounded-lg border border-slate-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
              value={post.author}
              onChange={(e) => setPost({ ...post, author: e.target.value })}
              required
              className="w-full bg-slate-900 rounded-lg border border-slate-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={post.excerpt}
              onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
              required
              rows={3}
              className="w-full bg-slate-900 rounded-lg border border-slate-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-2">
              Content
            </label>
            <RichTextEditor
              markdown={post.content}
              onChange={(content) => setPost({ ...post, content })}
              className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden"
            />
          </div>

          <div>
            <label htmlFor="slug" className="block text-sm font-medium mb-2">
              Slug
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={post.slug}
              onChange={(e) => setPost({ ...post, slug: e.target.value })}
              required
              className="w-full bg-slate-900 rounded-lg border border-slate-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Link
              href="/admin"
              className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}