import { FaGem } from "react-icons/fa";
import Link from "next/link";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-slate-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <FaGem className="text-yellow-500 text-2xl" />
            <span className="text-xl font-bold">StakeKid</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-slate-200 hover:text-yellow-500 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-slate-200 hover:text-yellow-500 transition-colors">
              Blog
            </Link>
          </div>
        </nav>
      </header>

      {children}
    </div>
  );
}