/**
 * Root layout for houtai (admin panel)
 * This is a standalone admin panel without locale routing
 */
import "./globals.css";

export const metadata = {
  title: 'Admin Panel - Houtai',
  description: '后台管理系统',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
