import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import styles from "./page.module.css";
import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "joshle.dev",
  description: "josh's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-webtui-theme="catppuccin-mocha">
    {/* <html lang="en" data-webtui-theme="gruvbox-dark"> */}
      <body className={inter.className}>
        <div style={{ padding: "1rem" }}>
          <div box-="round" className={styles.navBox}>
            <nav className={styles.navContainer}>
              <div className={styles.leftLinks}>
                <Link href="/" className={styles.navLink}>Home</Link>
                <Link href="/projects" className={styles.navLink}>Projects</Link>
                <Link href="/blog" className={styles.navLink}>Blog</Link>
              </div>
              <div className={styles.rightLinks}>
                <Link href="https://github.com/josh-leblanc" className={styles.navLink} style={{ marginLeft: "1rem" }}>GitHub</Link>
                <Link href="https://www.linkedin.com/in/josh-p-leblanc" className={styles.navLink} style={{ marginLeft: "1rem" }}>LinkedIn</Link>
              </div>
            </nav>
          </div>
          <main style={{ paddingTop: "1rem" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
} 