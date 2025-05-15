import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Link from "next/link";
import styles from "./page.module.css";
import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.css';

const iosevka = localFont({
  src: [
    {
      path: '../fonts/IosevkaNerdFont-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-iosevka'
});

const hack = localFont({
  src: [
    {
      path: '../fonts/HackNerdFont-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-hack'
});

export const metadata: Metadata = {
  title: "joshle.dev",
  description: "josh's portfolio",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-webtui-theme="catppuccin-mocha" className={`${iosevka.variable} ${hack.variable}`}>
    {/* <html lang="en" data-webtui-theme="gruvbox-dark"> */}
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <div style={{ padding: "1rem" }}>
          <div box-="round" className={styles.navBox}>
            <nav className={styles.navContainer}>
              <div className={styles.leftLinks}>
                <Link href="/" className={styles.navLink}>Home</Link>
                <Link href="/projects" className={styles.navLink}>Projects</Link>
                <Link href="/blog" className={styles.navLink}>Blog</Link>
              </div>
              <div className={styles.rightLinks}>
                <Link href="https://github.com/josh-le" className={styles.navLink} style={{ marginLeft: "1rem" }}>GitHub</Link>
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
