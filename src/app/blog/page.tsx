import Link from 'next/link';
import styles from "../page.module.css";
import { getAllBlogPosts } from '@/lib/markdown';

export default function Blog() {
  const posts = getAllBlogPosts();

  return (
    <div>
      <h1 className={styles.pageHeading}>blog posts</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id} box-="round" className={styles.readmeBox} style={{ marginBottom: '1rem' }}>
            <div className={styles.readmeBoxHeader}>
              <span is-="badge" variant-="background0" style={{ color: "var(--yellow)" }}>{post.title}</span>
              <span is-="badge" variant-="background0">{post.tag}</span>
            </div>
            <div className={styles.readmeBoxContent}>
              <p style={{ color: "var(--subtext0)" }}>{post.date}</p>
              <p>{post.excerpt}</p>
              <div style={{ marginTop: '1rem' }}>
                <Link href={`/blog/${post.id}`}>
                  <button box-="round" className={styles.firstBoxButtons}>Read More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 