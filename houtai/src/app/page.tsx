import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Admin Panel</h1>
        <p className="text-slate-500 mb-8">后台管理系统</p>
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-xl font-bold shadow hover:opacity-90 transition"
        >
          进入管理后台
        </Link>
      </div>
    </div>
  );
}
