import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "joshle.dev",
  description: "Personal website of joshle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-webtui-theme="catppuccin-mocha">
      <body className={inter.className}>
        <div style={{ padding: "1rem" }}>
          <div box-="square" className={styles.navBox}>
            <nav style={{ display: "flex", gap: "1rem" }}>
              <Link href="/" className={styles.navLink}>Home</Link>
              <Link href="/blog" className={styles.navLink}>Blog</Link>
              <Link href="/projects" className={styles.navLink}>Projects</Link>
            </nav>
          </div>
          <main style={{ marginTop: "2rem" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
} 