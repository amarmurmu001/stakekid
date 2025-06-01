'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Comment {
  _id: string;
  author: string;
  content: string;
  createdAt: string;
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ author: '', email: '', content: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/comments?postId=${postId}&status=approved`);
      if (!response.ok) throw new Error('Failed to fetch comments');
      const data = await response.json();
      setComments(data);
    } catch (err) {
      setError('Failed to load comments');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newComment, post: postId }),
      });

      if (!response.ok) throw new Error('Failed to submit comment');

      setNewComment({ author: '', email: '', content: '' });
      await fetchComments(); // Refresh comments list
    } catch (err) {
      setError('Failed to submit comment. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-bold">Comments</h2>
        <div className="animate-pulse space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="bg-slate-800 p-4 rounded-lg">
              <div className="h-4 bg-slate-700 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-slate-700 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-2xl font-bold">Comments</h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-lg space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="author" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="author"
              value={newComment.author}
              onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
              className="w-full bg-slate-900 rounded-lg border border-slate-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={newComment.email}
              onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
              className="w-full bg-slate-900 rounded-lg border border-slate-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-2">
            Comment
          </label>
          <textarea
            id="content"
            value={newComment.content}
            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
            className="w-full bg-slate-900 rounded-lg border border-slate-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows={4}
            required
          />
        </div>
        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Submitting...' : 'Submit Comment'}
        </button>
      </form>

      {/* Comments List */}
      <AnimatePresence>
        <div className="space-y-4">
          {comments.length === 0 ? (
            <p className="text-slate-400">No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment) => (
              <motion.div
                key={comment._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-slate-800 p-4 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{comment.author}</h3>
                  <span className="text-sm text-slate-400">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-slate-300">{comment.content}</p>
              </motion.div>
            ))
          )}
        </div>
      </AnimatePresence>
    </div>
  );
}