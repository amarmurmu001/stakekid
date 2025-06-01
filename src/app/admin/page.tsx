'use client';

import { useState, useEffect } from 'react';
import { FaGem, FaPlus, FaEdit, FaTrash, FaChartBar, FaUsers, FaNewspaper } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Post {
  _id: string;
  title: string;
  slug: string;
  createdAt: string;
  author: string;
}

interface DashboardStats {
  totalPosts: number;
  totalViews: number;
  totalComments: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    totalPosts: 0,
    totalViews: 0,
    totalComments: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem('adminAuth');
      if (!auth) {
        router.push('/admin/login');
      }
    };

    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        setPosts(data);
        setStats({
          totalPosts: data.length,
          totalViews: data.reduce((acc: number, post: any) => acc + (post.views || 0), 0),
          totalComments: data.reduce((acc: number, post: any) => acc + (post.comments?.length || 0), 0)
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
    fetchPosts();
  }, [router]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('Failed to delete post');
      
      setPosts(posts.filter(post => post._id !== id));
      setStats(prev => ({ ...prev, totalPosts: prev.totalPosts - 1 }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete post');
    }
  };

  const filteredPosts = posts
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'date') {
        return sortOrder === 'asc' 
          ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      } else {
        return sortOrder === 'asc'
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
    });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400">Total Posts</p>
                <h3 className="text-3xl font-bold">{stats.totalPosts}</h3>
              </div>
              <FaNewspaper className="text-4xl text-yellow-500" />
            </div>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400">Total Views</p>
                <h3 className="text-3xl font-bold">{stats.totalViews}</h3>
              </div>
              <FaChartBar className="text-4xl text-yellow-500" />
            </div>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400">Total Comments</p>
                <h3 className="text-3xl font-bold">{stats.totalComments}</h3>
              </div>
              <FaUsers className="text-4xl text-yellow-500" />
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Manage Posts</h2>
            <Link 
              href="/admin/posts/new" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <FaPlus /> New Post
            </Link>
          </div>

          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <div className="flex gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
                className="bg-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="date">Sort by Date</option>
                <option value="title">Sort by Title</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors"
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded-lg mb-4">
              {error}
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-slate-700">
                  <th className="pb-4">Title</th>
                  <th className="pb-4">Author</th>
                  <th className="pb-4">Date</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts.map((post) => (
                  <tr key={post._id} className="border-b border-slate-700/50">
                    <td className="py-4">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-yellow-500 hover:text-yellow-400"
                      >
                        {post.title}
                      </Link>
                    </td>
                    <td className="py-4">{post.author}</td>
                    <td className="py-4">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-4">
                      <div className="flex gap-2">
                        <Link
                          href={`/admin/edit/${post._id}`}
                          className="text-blue-500 hover:text-blue-400"
                        >
                          <FaEdit />
                        </Link>
                        <button
                          onClick={() => handleDelete(post._id)}
                          className="text-red-500 hover:text-red-400"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}