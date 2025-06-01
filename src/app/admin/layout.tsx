'use client';

import { FaGem } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    router.push('/admin');
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/admin" className="flex items-center space-x-2">
            <FaGem className="text-yellow-500 text-2xl" />
            <span className="text-xl font-bold">StakeKid Admin</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-slate-200 hover:text-yellow-500 transition-colors">
              View Site
            </Link>
            <Link href="/blog" className="text-slate-200 hover:text-yellow-500 transition-colors">
              View Blog
            </Link>
            <button
              onClick={handleLogout}
              className="text-slate-200 hover:text-yellow-500 transition-colors"
            >
              Logout
            </button>
          </div>
        </nav>
      </header>
      <main className="pt-16">{children}</main>
    </div>
  );
}